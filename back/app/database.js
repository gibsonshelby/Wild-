const { Client } = require('pg');
console.log(process.env.DATABASE_URL)
 const db = new Client({connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false} });
db.connect()  


module.exports = db;