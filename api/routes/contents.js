var express = require('express');
var router = express.Router();
const {getContent, addContent, deleteContent} = require('../controllers/contentController')


router.get('/',getContent);
router.post('/',addContent);
router.delete('/:idcontent',deleteContent);

module.exports = router;