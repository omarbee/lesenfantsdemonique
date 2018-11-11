const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var contentSchema = new Schema ({
    _idContent:{
        type: Number,
        unique: true
    },
    _idUser:{
         type: Schema.Types.ObjectId, 
         ref: 'User',
         required:true 
        
    },

    title:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        
    },
    type:{
        type: Number,
        required: true
    },
    text:{
        type: text,
        required: true
    },
    image:{
        type: String,
        
    },
});

module.exports = mongoose.model( 'contents', contentSchema );