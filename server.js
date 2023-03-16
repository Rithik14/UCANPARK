const express = require('express');
const dotenv = require('dotenv');//.env module will allows you to separate your secret from your source code  
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path =require('path');
const connectDB = require('./server/database/connection');
var passport = require("passport"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose =
    require("passport-local-mongoose");
var User = require('./server/model/user');
var Admin = require('./server/model/admin');


app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));
 
app.use(passport.initialize());
app.use(passport.session());

passport.use("Admin-auth",new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

passport.use("User-auth",new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

dotenv.config({path:'config.env'});//THIS IS USED TO GIVE THE PORT NUMBER DEFINED INSIDE THE CONFIG.ENV
const PORT = process.env.PORT || 8080;
 


//log requests
app.use(morgan('tiny'));//morgan allow us to log the whenever we make request

//mongodb connection
connectDB();

app.use(bodyparser.json());
//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static('views'));

//set view engine
app.set('view engine', 'ejs');

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

//load routers
app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)});