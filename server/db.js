const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Postgres@rickkk#0",
    host: "127.0.0.1",
    port : 5432,
    database: "perntodo"
});

module.exports = pool;
