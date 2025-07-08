const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ludoearn.db');
db.run(`
  CREATE TABLE IF NOT EXISTS deposits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    amount INTEGER NOT NULL,
    status TEXT DEFAULT 'pending',
    created_at TEXT
  )
`);

module.exports = db;
