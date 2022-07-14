const {
  Client
} = require('pg');
const dbEngine = process.env.DB_ENVIRONMENT || 'development'
const config = require('./dbConfig')[dbEngine];
const client = new Client(config)

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('Connected to the database!')
  }
})

const Query = async (query) => {
  //console.log(query)
  return new Promise(function(resolve,reject){
    client.query(query, (err, res) => {
      if (err){
        reject(err)
      }
      resolve(res);
    })
  })
}

module.exports = {
  Query
}