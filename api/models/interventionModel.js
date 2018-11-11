const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var interventionSchema = new Schema ({
    _idIntervention:{
        type: Number,
        unique: true
    },
    _idUser:{
         type: Schema.Types.ObjectId, 
         ref: 'User',
         required:true   
        
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

module.exports = mongoose.model( 'interventions', interventionSchema );