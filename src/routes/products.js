const express = require('express');
const { displayAllProducts } = require('../controllers/product-controller');
const { checkToken } = require('../helpers/checkToken');
const router = express.Router();

router.get('/',[displayAllProducts]);



module.exports = router;