const express = require('express');
const  {Login}  = require('../controllers/login-controller');
const router = express.Router();

router.get('/',Login);

module.exports = router;