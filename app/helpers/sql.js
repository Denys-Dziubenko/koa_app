const dbConn = require('../services/sqlite');

const respKeys = {
    insert: 'lastID',
    delete: 'changes',
};

const SELECT = (sql = '', params = []) => new Promise((resolve, reject) => {
    dbConn.all(sql, params, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
});

const runWrapper = (sql = '', params = [], reqType = 'insert') => new Promise((resolve, reject) => {
    dbConn.run(sql, params, function(err) {
        if (err) reject(err);
        resolve(this[respKeys[reqType]] || null);
    });
});
    
module.exports = {
    SELECT,
    INSERT: runWrapper,
    DELETE: runWrapper,
};