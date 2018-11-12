const config = require('../configs/config');
const jwt = require('jsonwebtoken');
const { sendError } = require('../functions/sendFunction');

module.exports = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.secret, function(err, decoded) {
            if (err) {
                return sendError(res, 'Unauthorized access', 401);
            }
            req.tokenInfo = decoded;
            next();
        });
    } else {
        // if there is no token
        // return an error
        return sendError(res, 'No token provided', 401);
    }
};
