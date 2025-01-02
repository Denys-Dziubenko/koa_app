const dbConn = require('../services/sqlite');

const SELECT = (sql = '', params = []) => new Promise((resolve, reject) => {
    dbConn.all(sql, params, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
});

const INSERT = (sql = '', params = []) => new Promise((resolve, reject) => {
    dbConn.run(sql, params, function(err) {
        if (err) reject(err);
        resolve(this.lastID);
    });
});
    
module.exports = {
    SELECT,
    INSERT,
};