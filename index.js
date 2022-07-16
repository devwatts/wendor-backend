const express = require('express');
const app = new express();
require('dotenv').config()
const PORT = process.env.PORT || 3000;
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

app.use(express.json({
    limit: "20mb"
}));

require('./src/config/dbConnection')

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization');
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

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Inventory API",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        contact: {
          name: "Dev Watts",
          url: "https://devwatts.engineer",
          email: "devwattsbusiness@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
        {
            url: "wattsinventory.herokuapp.com",
          },
      ],
    },
    apis: ["./src/routes/*.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUI.serve,
    swaggerUI.setup(specs)
  );

app.listen(PORT,function(){
    console.log(`Server Started at ${PORT}`)
})
