const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'shanghai',
});

pool.on('connect', () => {
  console.log('Успешное подключение к PostgreSQL');
});

pool.on('error', (err) => {
  console.error('Ошибка в пуле PostgreSQL:', err);
});

module.exports = pool;