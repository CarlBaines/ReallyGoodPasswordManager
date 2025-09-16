const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");

// Use a persistent data directory under backend/data
const dataDir = path.resolve(__dirname, "..", "..", "data");
fs.mkdirSync(dataDir, { recursive: true });
const dbPath = path.join(dataDir, "pm_db.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("SQLite open error:", err.message);
    return;
  }

  // Enforce foreign keys
  db.run("PRAGMA foreign_keys = ON");

  // Ensure tables exist
  db.run(`CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS passwords(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    service TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(user_id, email, service)
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS deletedPasswords(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    deletedService TEXT NOT NULL,
    deletedEmail TEXT NOT NULL,
    deletedPassword TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS notifications(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )`);
});

module.exports = db;
