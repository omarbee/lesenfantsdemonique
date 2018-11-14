var express = require('express');
var router = express.Router();
const {getContent, addContent, modifyContent, deleteContent} = require('../controllers/contentController')


router.get('/',getContent);
router.get('/:idcontent',getContent);
router.post('/',addContent);
router.put('/:idcontent',modifyContent);
router.delete('/:idcontent',deleteContent);

module.exports = router;