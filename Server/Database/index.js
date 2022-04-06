const { Pool }  = require('pg')

const pool = new Pool({
    host:process.env.DB_HOST,
    port:DB_PORT,
    user:DB_USER,
    database:DB_NAME,
    password:DB_PASSWOR
})
const query = async(q_text,params) =>{
    const res = await pool.query(q_text,params)
    return res
}

module.exports = {
    query,
    pool
}