
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE trig_data (id INTEGER PRIMARY KEY, angle REAL)");
  db.run("INSERT INTO trig_data (angle) VALUES (30)");
  db.run("INSERT INTO trig_data (angle) VALUES (45)");
  db.run("INSERT INTO trig_data (angle) VALUES (60)");
});

export default db;
