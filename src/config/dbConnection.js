const { Client } = require('pg');
const dbEngine = process.env.DB_ENVIRONMENT || 'development'
const config = require('./dbConfig')[dbEngine];
const client = new Client(config)

client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  })

  client.query('select * from products', (err, res) => {
    if (err) throw err
    console.log(res.rows)
    client.end()
  })