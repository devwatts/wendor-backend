/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - phone_num
 *       properties:
 *         phone_num:
 *           type: string
 *           description: The phone number of the user
 *       example:
 *         phone_num: +919355350111
 */

 /**
  * @swagger
  * tags:
  *   name: Login
  *   description: The login API
  */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Gets phone number for sending OTP
 *     tags: [Login]
 *     parameters: 
 *       - in: body
 *         name: user
 *         schema:
 *           type: object
 *           required: 
 *            - phone_num
 *           properties:
 *               phone_num:
 *                 type: string
 *                 description: The phone number to send OTP to
 *           example:
 *               phone_num: +919355350111
 *     responses:
 *        200:
 *          description: Success or failure of OTP sent to mobile
 */

/**
 * @swagger
 * /login/confirm:
 *   post:
 *     summary: Confirms the OTP sent to the phone number
 *     tags: [Login]
 *     parameters: 
 *       - in: body
 *         name: user
 *         schema:
 *           type: object
 *           required: 
 *            - phone_num
 *            - otp
 *           properties:
 *               phone_num:
 *                 type: string
 *                 description: The phone number the OTP was sent to
 *               otp:
 *                 type: string
 *                 description: OTP entered by user
 *           example:
 *               phone_num: +919355350111
 *               otp: 458754
 *     responses:
 *        200:
 *          description: OTP verified successfully or failed
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                   token:
 *                      type: string
 *                      description: auth token for the user
 *                example:
 *                   token: fs87sf8dsfs97fsdfsf79h
 */


/**
 * @swagger
 * /login/verify:
 *   post:
 *     summary: Verifies the token of the user
 *     tags: [Login]
 *     parameters: 
 *       - in: body
 *         name: user
 *         schema:
 *           type: object
 *           required: 
 *            - token
 *           properties:
 *               token:
 *                 type: string
 *                 description: The token to verify
 *           example:
 *               token: fs87sf8dsfs97fsdfsf79h
 *     responses:
 *        200:
 *          description: Success or failure of verification of token
 */


const express = require('express');
const  {Login,confirmLogin,verifyToken}  = require('../controllers/login-controller');
const router = express.Router();

router.post('/',Login);
router.post('/confirm',confirmLogin)
router.post('/verify',verifyToken)

module.exports = router;