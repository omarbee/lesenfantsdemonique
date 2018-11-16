var express = require('express');
var router = express.Router();
const {getUser, addUSer, modifyUser, deleteUser} = require('../controllers/userController')
const {getDonation} = require('../controllers/donationController')

/* GET users listing. */
router.get('/',getUser);
router.get('/:iduser',getUser);
router.get('/:iduser/donation',getDonation);
router.post('/',addUSer);
router.put('/:iduser',modifyUser);
router.delete('/:iduser',deleteUser);

module.exports = router;
