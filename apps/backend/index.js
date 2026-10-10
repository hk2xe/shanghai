const express = require('express');
const cors = require('cors');

const postsRoutes = require('./src/routes/posts.routes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Привет от Express!' });
});

app.use('/api/posts', postsRoutes);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});