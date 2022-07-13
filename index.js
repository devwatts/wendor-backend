const express = require('express');
const bodyParser = require('body-parser');
const app = new express();

const PORT = process.env.PORT || 3000;

require('./src/config/dbConnection')
require('./src/config/cors')

const products = require('./src/routes/products')

app.get('/',(req,res) => {
    res.send({message:"Server ok"})
})

app.use('/products',products);

app.listen(PORT,function(){
    console.log(`Server Started at ${PORT}`)
})
