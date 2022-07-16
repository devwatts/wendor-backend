/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - title
 *         - sell_price
 *         - act_price
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the product
 *         title:
 *           type: string
 *           description: The product title
 *         sell_price:
 *           type: integer
 *           description: The Selling price of the product
 *         act_price:
 *           type: integer
 *           description: The Actual price of the product
 *         image_url:
 *           type: string
 *           description: The URL of the image of the product
 *         _user:
 *           type: string
 *           description: The phone number of the user who added product
 *       example:
 *         id: 1
 *         title: Pendant
 *         sell_price: 899
 *         act_price: 1999
 *         image_url: https://kinclimg7.bluestone.com/f_jpg,c_scale,w_1024,b
 *         _user: +919355350111
 */

 /**
  * @swagger
  * tags:
  *   name: Products
  *   description: The products API
  */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */


/**
 * @swagger
 * /products/addnewproduct:
 *   post:
 *     summary: Adds new product
 *     security: 
 *        BearerAuth:
 *          type: http
 *          scheme: bearer
 *     tags: [Products]
 *     parameters: 
 *       - in: body
 *         name: user
 *         description: The product to create.
 *         schema:
 *           type: object
 *           required: 
 *            - title
 *            - sell_price
 *            - act_price
 *           properties:
 *               title:
 *                 type: string
 *                 description: The product title
 *               sell_price:
 *                 type: integer
 *                 description: The Selling price of the product
 *               act_price:
 *                 type: integer
 *                 description: The Actual price of the product
 *               image_url:
 *                 type: string
 *                 description: The URL of the image of the product
 *           example:
 *               title: Pendant
 *               sell_price: 899
 *               act_price: 1999
 *               image_url: https://kinclimg7.bluestone.com/f_jpg,c_scale,w_1024,b
 *     responses:
 *        200:
 *          description: Success or failure of addition of product
 */


/**
 * @swagger
 * /products/deleteproduct:
 *   post:
 *     summary: deletes product
 *     security: 
 *        BearerAuth:
 *          type: http
 *          scheme: bearer
 *     tags: [Products]
 *     parameters: 
 *       - in: body
 *         name: id
 *         description: The id of product to delete.
 *         schema:
 *           type: object
 *           required: 
 *            - id
 *           properties:
 *               id:
 *                 type: string
 *                 description: The product id
 *           example:
 *               id: 1
 *     responses:
 *        200:
 *          description: Success or failure of deletion of product
 */



const express = require('express');
const { displayAllProducts, addNewProduct, deleteProduct } = require('../controllers/product-controller');
const { checkToken } = require('../helpers/checkToken');
const router = express.Router();

router.get('/',[displayAllProducts]);
router.post('/addnewproduct',[checkToken,addNewProduct]);
router.post('/deleteproduct',[checkToken,deleteProduct]);


module.exports = router;