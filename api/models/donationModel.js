const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var donationSchema = new Schema ({
    _idDonation:{
        type: Number,
        unique: true
    },
    _idUser:{
        type: Number,
        required: true,
        
    },

     amount:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        required: true
    },
    type:{
        type: Number,
        required: true
    },
    
});

module.exports = mongoose.model( 'donation', donationSchema );