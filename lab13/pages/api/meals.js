
import sqlite from 'better-sqlite3';

let db;


export default function handler(req, res) {

  if (!db) {
    db = sqlite('meals.db'); 
  }

  const rows = db.prepare('SELECT * FROM meals').all();

  return res.status(200).json(rows);
}
