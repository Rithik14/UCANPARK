var mongoose=require("mongoose");
var passportlocalmongoose=require("passport-local-mongoose");
var AdminSchema=mongoose.Schema({
adminid:{
    type:String,
    require:true,
},
username: {
    type:String,
    require:true,
},
email: {
    type:String,
    require:true,
},
phone: {
    type:String,
    require:true,
},
password: {
    type:String,
    require:true,
}
});

AdminSchema.plugin(passportlocalmongoose);

const Admindb = mongoose.model("admindb", AdminSchema);
module.exports = Admindb
