const express = require('express');
//const bodyParser = require('body-parser');
const app = new express();
require('dotenv').config()
const PORT = process.env.PORT || 3000;

app.use(express.json({
    limit: "20mb"
}));

require('./src/config/dbConnection')
require('./src/config/cors')

const products = require('./src/routes/products')
const Login = require('./src/routes/login')

app.get('/',(req,res) => {
    res.send({message:"Server ok"})
})

app.use('/login',Login)
app.use('/products',products);

app.listen(PORT,function(){
    console.log(`Server Started at ${PORT}`)
})
