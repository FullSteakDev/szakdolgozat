const {Pool} = require('pg')
const pool = new Pool ({
    user: 'space_elyq_user',
    host: 'dpg-cljr1phll56s73boj0fg-a',
    database: 'space_elyq',
    password: 'k7jyxqYdCKwfS8QTSNWfzwsaeWb08qBy',
    port: 5432
})


module.exports = {
    query: (text, params) => pool.query(text, params),
}