const express = require('express');
const { displayAllProducts, addNewProduct, deleteProduct } = require('../controllers/product-controller');
const { checkToken } = require('../helpers/checkToken');
const router = express.Router();

router.get('/',[displayAllProducts]);
router.post('/addnewproduct',[checkToken,addNewProduct]);
router.post('/deleteproduct',[checkToken,deleteProduct]);


module.exports = router;