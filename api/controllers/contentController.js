const contentModel = require('../models/contentModel');
const { sendError } = require('../functions/sendFunction');


exports.getContent = function(req, res, next) {
    let param = {};
    if (req.params.idcontent) {
        param = { _id: req.params.idcontent };
    }

    contentModel.find(param, function(err, users) {
        if (err) return sendError(res, err);
        if (contents.length === 0) return sendError(res, 'Content not found', 404);
        res.send(contents);
    });
};

exports.addContent = function(req, res, next) {
    if (!req.body.title) return sendError(res, 'title is required');
    if (!req.body.text) return sendError(res, 'text is required');
    if (!req.body.type) return sendError(res, 'type is required');

    

    const newContent = contentModel({
        title: req.body.title,
        text: req.body.text,
        image:req.body.image,
        type: req.body.type,
        date: req.body.date,
    });

    newContent.save(function(err, content) {
        if (err) return sendError(res, err);
        res.status(201).send(content);
    });

    
};

exports.modifyContent = function(req, res, next) {
    
    const updateContent = contentModel({
        title: req.body.title,
        text: req.body.text,
        image:req.body.image,
        type: req.body.type,
        date: req.body.date,
    });

    contentModel.findByIdAndUpdate(req.params.idcontent, {$set:updateContent},function(err, content){
        if(err) return sendError(res, err);
        if(content === null) return sendError(res, 'Content not found', 404);
        res.send(content)
    });
};

exports.deleteContent = function(req, res, next) {
    contentModel.findByIdAndRemove(req.params.idcontent, function(err, user) {
        if (err) return sendError(res, err);
        if (content === null) return sendError(res, 'Content not found', 404);
        res.send(content);
    })};
