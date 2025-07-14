const {Pool} = require('pg')
require('dotenv').config()
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL 
})

async function add_data(table_name,data){
    const task = await pool.query(`INSERT INTO ${table_name} (username, password_hashed, last_seen) VALUES ($1,$2,CURRENT_TIMESTAMP)`,[data.username,data.password]);
    console.log(task.rows)
    console.log("hello")
}

module.exports = {add_data}