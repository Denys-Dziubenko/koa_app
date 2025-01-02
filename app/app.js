const Koa = require('koa');
const config = require('config');
const router = require('./routes/index');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = new Koa();

// Connect to SQLite database
const dbPath = path.resolve(__dirname, '../data/database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
      console.log('Connected to SQLite database');
      
      try {
        // Create table and insert fake data
        db.serialize(() => {
            // db.run(`CREATE TABLE IF NOT EXISTS users__ (
            // id INTEGER PRIMARY KEY AUTOINCREMENT,
            // name TEXT,
            // country TEXT
            // )`);
    
            const stmt = db.prepare("INSERT INTO users (name, country) VALUES (?, ?)");
            stmt.run("John U", "Ukraine");
            stmt.run("Jane S", "Sweden");
            stmt.finalize();
    
            db.each("SELECT id, name, country FROM users", (err, row) => {
            if (err) {
                console.error('Error fetching data', err);
            } else {
                console.log(`User: ${row.id}, ${row.name}, ${row.country}`);
            }
            });
        });
      } catch (error) {
          console.log('Error in creating table', error);
      }
      

    
  }
});

app.use(router.routes())
    .use(router.allowedMethods());

app.use((ctx) => {
    ctx.status = 404;
    ctx.body = {status: 404, err: 'Route Not Found'};
});

const PORT = process.env.PORT || config.server.PORT;

const server = app.listen(PORT, () => {
    console.log(`Server running in http://127.0.0.1:${PORT}`);
});

module.exports = server;