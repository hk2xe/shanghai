const express = require('express');

const app = express();
const cors = require('cors');

const port = 3000;

app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello world' });
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
