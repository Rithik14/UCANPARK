const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    parkno:{
        type:String,
        require:true,
        unique: true
    },
    name:{
        type:String,
        require:true,
    },
    contactno:{
        type:String,
        require:true
    },
    category:String,
    regno:{
        type:String,
        require:true,
        unique: true
    },
    // intime: { type: Date, default: Date.now },
    // outtime:String,
    charge:String,
    createdAt: String,
    updatedAt: String
 },
{timestamps: true });
const Vechdb = mongoose.model('vechdb',schema);
module.exports = Vechdb