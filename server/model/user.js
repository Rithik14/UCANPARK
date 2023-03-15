var mongoose=require("mongoose");
var passportlocalmongoose=require("passport-local-mongoose");
var UserSchema=mongoose.Schema({
username: {
    type:String,
    require:true,
},
phone: {
    type:String,
    require:true,
},
email: {
    type:String,
    require:true,
},
password: {
    type:String,
    require:true,
},
createdAt: String,
updatedAt: String
},
{timestamps: true }
);

UserSchema.plugin(passportlocalmongoose);

const Userdb = mongoose.model("userdb", UserSchema);
module.exports = Userdb
