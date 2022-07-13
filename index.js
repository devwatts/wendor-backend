const express = require('express');
const bodyParser = require('body-parser');
const app = new express();

const PORT = process.env.PORT || 3000;

require('./src/config/cors')

app.listen(PORT,function(){
    console.log(`Server Started at ${PORT}`)
})
