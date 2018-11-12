var express = require('express');
var router = express.Router();
const {getUser, addUSer} = require('../controllers/userController')

/* GET users listing. */
router.get('/',getUser);
router.post('/',addUSer);

module.exports = router;
