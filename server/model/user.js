var mongoose=require("mongoose");
var passportlocalmongoose=require("passport-local-mongoose");
var UserSchema=mongoose.Schema({
username: String,
phone: String,
carnum: String,
email: String,
password: String
});

UserSchema.plugin(passportlocalmongoose);

const Userdb = mongoose.model("userdb", UserSchema);
module.exports = Userdb
