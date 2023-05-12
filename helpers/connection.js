const mysqli = require('mysql');

const db = mysqli.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbName',
});

module.exports = db;
