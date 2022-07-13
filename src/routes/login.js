const express = require('express');
const  {Login,confirmLogin}  = require('../controllers/login-controller');
const router = express.Router();

router.post('/',Login);
router.post('/confirm',confirmLogin)

module.exports = router;