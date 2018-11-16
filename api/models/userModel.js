const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    _idUser: {
        type: Schema.Types.ObjectId,
    },
    email: {
        type: String,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    type: {
        type: Number,
        required: true,
    },
    street: {
        type: String,
    },
    streetNumber: {
        type: Number,
    },
    postalcode: {
        type: String,
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    date: {
        type: Date,
    },
});

module.exports = mongoose.model('users', userSchema);
