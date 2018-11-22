var express = require('express');
var router = express.Router();
const {getUser, addUSer, modifyUser, deleteUser} = require('../controllers/userController')
const {getDonation} = require('../controllers/donationController')
const {getContent} = require('../controllers/contentController')

/* GET users listing. */
router.get('/',getUser);
router.get('/:iduser',getUser);
router.get('/:iduser/donation',getDonation);
router.get('/:iduser/content',getContent);
router.post('/',addUSer);
router.put('/:iduser',modifyUser);
router.delete('/:iduser',deleteUser);

module.exports = router;
