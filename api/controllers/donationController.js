const donationModel = require('../models/donationModel');
const { sendError } = require('../functions/sendFunction');
var _ = require('lodash');

exports.getDonation = function(req, res, next) {
    let param = {};
    if (req.params.iddonation) {
        param._id = req.params.iddonation;
    }
    if (req.params.iduser) {
        param._idUser = req.params.iduser;
    }

    donationModel.find(param, function(err, donations) {
        if (err) return sendError(res, err);
        if (donations.length === 0)
            return sendError(res, 'User not found', 404);
        res.send(donations);
    });
};

exports.addDonation = function(req, res, next) {
    if (!req.body._idUser) return sendError(res, '_idUser is required');
    if (!req.body.amount) return sendError(res, 'amount is required');
    if (!req.body.type) return sendError(res, 'type is required');

    const newDonation = donationModel({
        _idUser: req.body._idUser,
        amount: req.body.amount,
        date: req.body.date,
        type: req.body.type,
    });

    newDonation.save(function(err, user) {
        if (err) return sendError(res, err);
        res.status(201).send(user);
    });
};

exports.deleteDonation = function(req, res, next) {
    dbDeleteDonation(req.params.iddonation, '', function(err, donation){
        if (err) return sendError(res, err);
        if (donation === null) return sendError(res, 'Donation not found', 404);
        res.send(donation);
    });
};

dbDeleteDonation = function(iddonation = '', iduser = '', fReturn) {
    if (!_.isEqual(iddonation, '')) {
        donationModel.findByIdAndRemove(iddonation, function(err, donation) {
            return fReturn(err, donation);
        });
    }
    if (!_.isEqual(iduser, '')) {
    }
};
