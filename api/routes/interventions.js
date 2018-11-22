var express = require('express');
var router = express.Router();
const {getIntervention, addIntervention, modifyIntervention, deleteIntervention} = require('../controllers/interventionController')


router.get('/',getIntervention);
router.get('/:idintervention',getIntervention);
router.post('/',addIntervention);
router.put('/:idintervention',modifyIntervention);
router.delete('/:idintervention',deleteIntervention);

module.exports = router;