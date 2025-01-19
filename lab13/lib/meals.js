
import sqlite from 'better-sqlite3';

let db;
function initDB() {
  if (!db) {
    db = sqlite('meals.db');
  }
}

export function getMeal(slug) {
  initDB();

  const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
  return meal;
}

export function getAllMeals() {
  initDB();

  return db.prepare('SELECT * FROM meals').all();
}
