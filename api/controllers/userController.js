const userModel = require('../models/userModel');
const { sendError } = require('../functions/sendFunction');
const bcrypt = require('bcrypt');

exports.getUser = function(req, res, next) {
    userModel.find({}, function(err, users) {
        if (err) return sendError(res, err);
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
        type: req.body.type,
    });

    newUser.save(function(err, user) {
        if (err) return sendError(res, err);
        res.status(201).send(user);
    });
};
