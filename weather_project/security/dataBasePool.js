const { Pool } = require('pg');
const dataBaseConfiguration = require('./dataBaseConfiguration');

const pool = new Pool(dataBaseConfiguration);

module.exports = pool