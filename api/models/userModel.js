const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var userSchema = new Schema ({
    _idUser:{
        type: Number,
        unique: true
    },
    email:{
        type: String,
    },

    firstname:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    type:{
        type: Number,
        required: true,
    },
    street:{
        type: String,
        
    },
    streetNumber:{
        type: Number,
        
    },
    postalcode:{
        type: String,
        
    },

    country:{
        type:string,
        
    },
    city:{
        type: String,
        
    },
    phoneNumber:{
        type: String,
        
    },
    date:{
        type: Date,

    }
});

module.exports = mongoose.model( 'user', userSchema );