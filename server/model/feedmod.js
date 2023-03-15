const mongoose = require('mongoose');

var feedschema = new mongoose.Schema({
    
    category1:{
        type:String,
        require:true
    },
    category2:{
        type:String,
        require:true
    },
    category3:{
        type:String,
        require:true
    },
    email:{
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
    {timestamps: true }
    );

const Feedbackdb = mongoose.model('feedbackdb',feedschema);

module.exports = Feedbackdb