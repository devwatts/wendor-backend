const { Client } = require('pg');

const client = new Client({
  host: 'ec2-3-219-229-143.compute-1.amazonaws.com',
  port: 5432,
  user: 'esfdfblhwbrfnf',
  password: '69f4838696b54f5720a8951e237e86fda8457c9ecc8834eda57409e72c36d7bf',
})

client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  })