const express = require('express');
//const bodyParser = require('body-parser');
const app = new express();
require('dotenv').config()
const PORT = process.env.PORT || 3000;

app.use(express.json({
    limit: "20mb"
}));

require('./src/config/dbConnection')

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    return next();
});


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
