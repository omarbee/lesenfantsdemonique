const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var donationSchema = new Schema({
    _idDonation: {
        type: Schema.Types.ObjectId,
    },
    _idUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    type: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('donations', donationSchema);
