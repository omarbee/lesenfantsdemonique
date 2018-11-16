var express = require('express');
var router = express.Router();
const {getIntervention, addIntervention, modifyIntervention, deleteIntervention} = require('../controllers/contentController')


router.get('/',getIntervention);
router.get('/:idcontent',getIntervention);
router.post('/',addIntervention);
router.put('/:idcontent',modifyIntervention);
router.delete('/:idcontent',deleteIntervention);

module.exports = router;