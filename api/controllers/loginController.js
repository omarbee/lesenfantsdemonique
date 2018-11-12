const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../configs/config');
const { sendError } = require('../functions/sendFunction');
const userModel = require('../models/userModel');

exports.authentificate = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email) return sendError(res, 'email missing');
    if (!password) return sendError(res, 'password missing');

    userModel.find({ email: email }, function(err, users) {
        console.log(users);
        if (!users[0]) return sendError(res, 'wrong password or email');
        bcrypt.compare(password, users[0].password, function(err, results) {
            if (err) return sendError(res, err);
            if (!results) return sendError(res, 'wrong password or email');
            const tokenDetail = {
                _id: users[0]._id
            };
            const token = jwt.sign(tokenDetail, config.secret);
            res.status(200).send({ token: token });
        });
    });
};
