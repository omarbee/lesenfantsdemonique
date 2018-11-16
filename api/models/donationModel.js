const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var donationSchema = new Schema({
    _idDonation: {
        type: Schema.Types.ObjectId,
    },
    _idUser: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('donations', donationSchema);
