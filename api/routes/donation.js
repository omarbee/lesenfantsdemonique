const express = require('express');
const router = express.Router();
const {getDonation, addDonation, deleteDonation} = require('../controllers/donationController')


router.get('/',getDonation);
router.get('/:iddonation',getDonation);
router.post('/',addDonation);
// router.put('/:iddonation',modifyDonation);
router.delete('/:iddonation',deleteDonation);

module.exports = router;