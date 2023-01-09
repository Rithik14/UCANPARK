const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    parkno:String,
    name:{
        type:String,
        require:true,
    },
    contactno:{
        type:String,
        require:true
    },
    company:String,
    category:String,
    regno:{
        type:String,
        require:true
    },
    intime:String,
    outtime:String,
    charge:String
});

const Vechdb = mongoose.model('vechdb',schema);

module.exports = Vechdb