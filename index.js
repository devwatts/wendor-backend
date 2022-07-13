const express = require('express');
const bodyParser = require('body-parser');
const app = new express();

const PORT = process.env.PORT || 3000;

require('./src/config/cors')

app.get('/',(req,res) => {
    res.send({message:"Server ok"})
})

app.listen(PORT,function(){
    console.log(`Server Started at ${PORT}`)
})
