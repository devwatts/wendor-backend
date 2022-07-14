const express = require('express');
const  {Login,confirmLogin,verifyToken}  = require('../controllers/login-controller');
const router = express.Router();

router.post('/',Login);
router.post('/confirm',confirmLogin)
router.post('/verify',verifyToken)

module.exports = router;