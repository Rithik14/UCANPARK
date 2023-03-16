const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true
    },
    subject:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
createdAt: String,
updatedAt: String
 },
{timestamps: true });

const Contactdb = mongoose.model('contactdb',schema);

module.exports = Contactdb