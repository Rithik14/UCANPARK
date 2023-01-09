const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/contoller'); 
var User = require('../model/user'),
    passport = require("passport");

/** 
* @description Root Route
* @method GET /
*
*/

route.get("/",services.home);


route.get("/register",services.register);

route.get("/table",services.homeRoutes);

route.get("/login",services.login);

route.get("/adminlog",services.adminlog);

route.get("/adminreg",services.adminreg);

route.get("/logout",services.logout);

route.get("/contact",services.contact);

route.get("/contacttbl",services.contacttbl);

route.get("/usertbl",services.usertbl);

route.get("/admintbl",services.admintbl);

route.get("/feedback",services.feedback);

route.get("/feedbacktbl",services.feedbacktbl);

route.get("/userindex",services.userindex);


route.get("/forgot",services.forgot);

/** 
* @description add users
* @method GET /add-user
*
*/
route.get("/add-user",services.add_user);


/** 
* @description for updating users
* @method GET /update-user
*
*/
route.get("/update-user",services.update_user);

//Handling user login
route.post("/login", passport.authenticate("local", {
    successRedirect: "/table",
    failureRedirect: "/login"
}), function (req, res) {
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}

//Handling user login
route.post("/adminlog", passport.authenticate("local", {
    successRedirect: "/table",
    failureRedirect: "/adminlog"
}), function (req, res) {
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/adminlog");
}

//API
route.post('/adreg',controller.createadmin);
route.get('/adreg',controller.findadmin);

route.post('/reg',controller.createreg);
route.get('/reg',controller.finduser);
route.delete('/reg/:id',controller.deleteuser);

route.post('/feedbacks',controller.createfeed);
route.get('/feedbacks',controller.findfeed);
route.delete('/feedbacks/:id',controller.deletefeed);

route.post('/contacts',controller.createcon);
route.get('/contacts',controller.findcon);
route.delete('/contacts/:id',controller.deletecon);

route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);
module.exports = route;