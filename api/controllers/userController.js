const userModel = require('../models/userModel');
const { sendError } = require('../functions/sendFunction');
const bcrypt = require('bcrypt');

exports.getUser = function(req, res, next) {
    let param = {};
    if (req.params.iduser) {
        param = { _id: req.params.iduser };
    }

    userModel.find(param, function(err, users) {
        if (err) return sendError(res, err);
        if (users.length === 0) return sendError(res, 'User not found', 404);
        res.send(users);
    });
};

exports.addUSer = function(req, res, next) {
    if (!req.body.firstname) return sendError(res, 'firstname is required');
    if (!req.body.lastname) return sendError(res, 'lastname is required');
    if (!req.body.password) return sendError(res, 'password is required');
    if (!req.body.type) return sendError(res, 'type is required');

    const password = bcrypt.hashSync(req.body.password, 10);

    const newUser = userModel({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: password,
        type: type,
        street: req.body.street,
        streetNumber: req.body.streetNumber,
        postalcode: req.body.postalcode,
        country: req.body.country,
        city: req.body.city,
        phoneNumber: req.body.phoneNumber,
        date: req.body.date,
    });

    newUser.save(function(err, user) {
        if (err) return sendError(res, err);
        res.status(201).send(user);
    });
};

exports.modifyUser = function(req, res, next) {
    if (!req.body.firstname) return sendError(res, 'firstname is required');
    if (!req.body.lastname) return sendError(res, 'lastname is required');
    if (!req.body.password) return sendError(res, 'password is required');
    if (!req.body.type) return sendError(res, 'type is required');

    //TODO MODIFY USER
};

exports.deleteUser = function(req, res, next) {
    userModel.findByIdAndRemove(req.params.iduser, function(err, user) {
        if (err) return sendError(res, err);
        if (user === null) return sendError(res, 'User not found', 404);
        res.send(user);
    });
};
