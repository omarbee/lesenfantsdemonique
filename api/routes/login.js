var express = require('express');
var router = express.Router();
const {authentificate} = require('../controllers/loginController')

router.post('/',authentificate);

module.exports = router;
