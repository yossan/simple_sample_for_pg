const dotenv = require('dotenv').config()
const {Client} = require('pg')
const client = new Client()

const tbname = 'favorite_fruits'

client.connect()

function createTable() {
    const stmt = 
    `CREATE TABLE IF NOT EXISTS ${tbname} (
        name varchar(255) PRIMARY KEY,
        calorie INTEGER
    );`
    
    return client.query(stmt)
}

function dropTable() {
    const stmt = 
    `DROP TABLE IF EXISTS ${tbname};`
    return client.query(stmt)
}


async function exec() {
    try {
        const ret1 = await createTable()
        const ret2 = await dropTable()

        console.log(ret1)
        console.log(ret2)
    } catch (e) {
        console.log('Error occur: ' + e)
    } finally {
        client.end()
    }
}

exec()
