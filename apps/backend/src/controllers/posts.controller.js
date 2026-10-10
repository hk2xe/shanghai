// Импортируем слой базы данных (напишем его следующим шагом)
const postsDb = require('../db/posts.db');

// 1. Получить все посты (GET /api/posts)
async function getAllPosts(req, res) {
  try {
    const { title } = req.query; // Проверяем, есть ли поисковый запрос в URL (?title=...)
    const posts = await postsDb.findAll(title);
    res.json(posts);
  } catch (error) {
    console.error('Ошибка в getAllPosts:', error);
    res.status(500).json({ error: 'Ошибка сервера при получении постов' });
  }
}

// 2. Получить конкретный пост по ID (GET /api/posts/:id)
async function getPostById(req, res) {
  try {
    const postId = Number(req.params.id);
    const post = await postsDb.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Пост не найден' });
    }

    res.json(post);
  } catch (error) {
    console.error('Ошибка в getPostById:', error);
    res.status(500).json({ error: 'Ошибка сервера при получении поста' });
  }
}

// 3. Получить комментарии к конкретному посту (GET /api/posts/:id/comments)
async function getPostComments(req, res) {
  try {
    const postId = Number(req.params.id);
    
    // Сначала проверяем, существует ли вообще такой пост
    const post = await postsDb.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Пост не найден' });
    }

    const comments = await postsDb.findCommentsByPostId(postId);
    res.json(comments);
  } catch (error) {
    console.error('Ошибка в getPostComments:', error);
    res.status(500).json({ error: 'Ошибка сервера при получении комментариев' });
  }
}

// 4. Создать новый пост (POST /api/posts)
async function createPost(req, res) {
  try {
    const { title, content, author } = req.body;

    // ВАЛИДАЦИЯ: заголовок и текст обязательны
    if (!title || !content || !title.trim() || !content.trim()) {
      return res.status(400).json({ error: 'Поля title и content обязательны для заполнения' });
    }

    // Если автор не указан — по правилам анонимного форума ставим 'Аноним'
    const authorName = author && author.trim() ? author.trim() : 'Аноним';

    const newPost = await postsDb.create({
      title: title.trim(),
      content: content.trim(),
      author: authorName,
    });

    res.status(201).json(newPost); // 201 Created
  } catch (error) {
    console.error('Ошибка в createPost:', error);
    res.status(500).json({ error: 'Ошибка сервера при создании поста' });
  }
}

// 5. Добавить комментарий к посту (POST /api/posts/:id/comments)
async function addComment(req, res) {
  try {
    const postId = Number(req.params.id);
    const post = await postsDb.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Пост не найден' });
    }

    const { content, author } = req.body;

    // ВАЛИДАЦИЯ: текст комментария обязателен
    if (!content || !content.trim()) {
      return res.status(400).json({ error: 'Поле content обязательно для заполнения' });
    }

    const authorName = author && author.trim() ? author.trim() : 'Аноним';

    const newComment = await postsDb.createComment({
      postId,
      content: content.trim(),
      author: authorName,
    });

    res.status(201).json(newComment); // 201 Created
  } catch (error) {
    console.error('Ошибка в addComment:', error);
    res.status(500).json({ error: 'Ошибка сервера при добавлении комментария' });
  }
}

// 6. Поставить лайк посту (POST /api/posts/:id/like)
async function addLike(req, res) {
  try {
    const postId = Number(req.params.id);
    const post = await postsDb.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Пост не найден' });
    }

    const updatedLikes = await postsDb.incrementLike(postId);
    res.json({ message: 'Лайк добавлен', likes_count: updatedLikes });
  } catch (error) {
    console.error('Ошибка в addLike:', error);
    res.status(500).json({ error: 'Ошибка сервера при постановке лайка' });
  }
}

// Экспортируем все функции для файла роутов
module.exports = {
  getAllPosts,
  getPostById,
  getPostComments,
  createPost,
  addComment,
  addLike,
};