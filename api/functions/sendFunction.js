exports.sendError = function(res, message, code = 500){
    res.status(code).send({error: true, message: message});
}