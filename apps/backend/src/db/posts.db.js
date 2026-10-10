const pool = require('./connection');

// 1. Получить все посты (с автором и числом лайков)
async function findAll(searchTitle) {
  let sql = `
    SELECT 
      p.id, 
      p.title, 
      p.content, 
      p.creation_date,
      COALESCE(u.first_name, 'Аноним') AS author,
      COUNT(DISTINCT l.id) AS likes_count
    FROM op_post p
    LEFT JOIN op_user u ON p.id_author = u.id
    LEFT JOIN "like" l ON l.id_post = p.id
  `;
  const params = [];

  if (searchTitle) {
    sql += ` WHERE p.title ILIKE $1`;
    params.push(`%${searchTitle}%`);
  }

  sql += ` GROUP BY p.id, u.first_name ORDER BY p.creation_date DESC, p.id DESC`;

  const result = await pool.query(sql, params);
  return result.rows;
}

// 2. Найти один пост по ID
async function findById(id) {
  const sql = `
    SELECT 
      p.id, 
      p.title, 
      p.content, 
      p.creation_date,
      COALESCE(u.first_name, 'Аноним') AS author,
      COUNT(DISTINCT l.id) AS likes_count
    FROM op_post p
    LEFT JOIN op_user u ON p.id_author = u.id
    LEFT JOIN "like" l ON l.id_post = p.id
    WHERE p.id = $1
    GROUP BY p.id, u.first_name
  `;
  const result = await pool.query(sql, [id]);
  return result.rows[0] || null;
}

// 3. Найти комментарии к посту
async function findCommentsByPostId(postId) {
  const sql = `
    SELECT 
      c.id, 
      c.id_post, 
      c.content, 
      c.creation_date,
      COALESCE(u.first_name, 'Аноним') AS author
    FROM comments c
    LEFT JOIN op_user u ON c.id_author = u.id
    WHERE c.id_post = $1
    ORDER BY c.creation_date ASC, c.id ASC
  `;
  const result = await pool.query(sql, [postId]);
  return result.rows;
}

// 4. Создать пост
async function create({ title, content, author }) {
  const defaultAuthorId = 1; // Пользователь из таблицы op_user
  const sql = `
    INSERT INTO op_post (title, content, id_author, creation_date)
    VALUES ($1, $2, $3, CURRENT_DATE)
    RETURNING *
  `;
  const result = await pool.query(sql, [title, content, defaultAuthorId]);
  return {
    ...result.rows[0],
    author: author || 'Аноним',
    likes_count: 0,
  };
}

// 5. Создать комментарий к посту
async function createComment({ postId, content, author }) {
  const defaultAuthorId = 1;
  const sql = `
    INSERT INTO comments (content, id_author, id_post, creation_date)
    VALUES ($1, $2, $3, CURRENT_DATE)
    RETURNING *
  `;
  const result = await pool.query(sql, [content, defaultAuthorId, postId]);
  return {
    ...result.rows[0],
    author: author || 'Аноним',
  };
}

// 6. Поставить лайк посту
async function incrementLike(postId) {
  const defaultAuthorId = 1;
  const sql = `
    INSERT INTO "like" (id_author, id_post)
    VALUES ($1, $2)
  `;
  await pool.query(sql, [defaultAuthorId, postId]);

  const countResult = await pool.query('SELECT COUNT(*) FROM "like" WHERE id_post = $1', [postId]);
  return Number(countResult.rows[0].count);
}

module.exports = {
  findAll,
  findById,
  findCommentsByPostId,
  create,
  createComment,
  incrementLike,
};