const Pool = require('pg').Pool
require('dotenv').config({path: 'config/config.env'});

const pool = new Pool({
    user: process.env.USER_NAME, 
    host: process.env.HOST, 
    database: process.env.DATABASE, 
    password: process.env.PASSWORD, 
    port: 5432, 
    ssl: {
      rejectUnauthorized: false,
    },
  });

module.exports = pool