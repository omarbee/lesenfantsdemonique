const interventionModel = require('../models/interventionModel');
const { sendError}= require('../functions/sendFunctions');

exports.getIntervention = function(req, res, next) {
    let param = {};
    if (req.params.idintervention) {
        param = { _id: req.params.idintervention };
    }

    interventionModel.find(param, function(err, interventions) {
        if (err) return sendError(res, err);
        if (interventions.length === 0) return sendError(res, 'Intervention not found', 404);
        res.send(interventions);
    });
};

exports.addInterventions = function(req, res, next) {
    if(!req.body.amount) return sendError(res, 'Amount is required');
    if(!req.body.date) return sendError(res, 'Date is required');
    if(!req.body.type) return sendError(res, 'Type is required');

    const newIntervention = interventionModel({
        amount: req.body.amount,
        date: req.body.date,
        type: req.body.type,
    });

    newIntervention.save(function(err, intervention) {
        if(err) return sendError(res, err);
        res.status(201).send(intervention);
    });
};

exports.modifyIntervention = function(req, res, next) {

    const updateIntervention = interventionModel({
        amount: req.body.amount,
        date: req.body.date,
        type: req.body.type,
    });

    interventionModel.findByIdAndUpdate(req.params.idintervention, {$set:updateIntervention}, function(err, intervention){
        if(err) return sendError(res, err);
        if(intervention === null) return sendError(res, 'Intervention not found', 404);
        res.send(intervention)
    });
};

exports.deleteIntervention = function(req, res, next) {
    interventionModel.findByIdAndDelete(req.params.idintervention, function(err, intervention) {
        if(err) return sendError(res, err);
        if(intervention === null) return sendError(res, 'Intervention not found', 404);
        res.send(intervention)
    });
};