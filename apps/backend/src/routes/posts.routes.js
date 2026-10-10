const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts.controller');

// ==================== GET (Получение данных) ====================

// Получить все посты: GET /api/posts
router.get('/', postsController.getAllPosts);

// Получить конкретный пост по id: GET /api/posts/:id
router.get('/:id', postsController.getPostById);

// Получить комментарии к посту: GET /api/posts/:id/comments
router.get('/:id/comments', postsController.getPostComments);

// ==================== POST (Отправка данных) ====================

// Создать новый пост: POST /api/posts
router.post('/', postsController.createPost);

// Добавить комментарий к посту: POST /api/posts/:id/comments
router.post('/:id/comments', postsController.addComment);

// Поставить лайк посту: POST /api/posts/:id/like
router.post('/:id/like', postsController.addLike);

module.exports = router;