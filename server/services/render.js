const axios = require('axios');//this allows us to make request
var Vechdb = require('../model/model');
const mongoose = require('mongoose');
const { schema } = require('../model/model');

// const defaultItems = [item1,item2,item3];

// const listSchema ={
//     name: String,
//     items: [schema]
// }

// const List = mongoose.model("List",listSchema)



exports.home =(req,res)=>{
    res.render("index");
}

exports.register =(req,res)=>{
    res.render("register");
}

exports.login =(req,res)=>{
    res.render("login");
}

exports.adminlog =(req,res)=>{
    res.render("adminlog");
}

exports.adminreg =(req,res)=>{
    res.render("adminreg");
}

exports.feedback = (req,res)=>{
    if(req.isAuthenticated()){
        res.render("feedback");
    } else {
        res.redirect("/login");
    }
}

exports.contact = (req,res)=>{
    if(req.isAuthenticated()){
        res.render("contact");
    } else {
        res.redirect("/login");
    }
}

exports.userindex = (req,res)=>{
    if(req.isAuthenticated()){
        res.render("userindex");
    } else {
        res.redirect("/login");
    }
}

exports.forgot = (req,res)=>{
    res.render("forgot");
}


exports.logout = (req,res)=>{
    req.logout(function(err) {
        if (err) { 
            return next(err); }
        res.redirect("/");
    });
}

// if we use exports to var then that var can by other file
exports.homeRoutes =(req,res) => {
    if(req.isAuthenticated()){
    //make get req to /api/users (this will return the promise)
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
    console.log(response.data)
    res.render('table',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}else {
    res.redirect("/adminreg");
}
}

// exports.homeRoutes =(req,res) => {
//     //make get req to /api/users (this will return the promise)
//     axios.get('http://localhost:3000/api/users')
//     .then(function(response){
//     console.log(response.data)

//     const customListName = req.params.customListName;


//     List.findOne({name: customListName},function(err, foundList){
//         if(!err){
//             if(!foundList){
//                 //Create a new list
//                 const list = new List({
//                     name: customListName
//                 });list.save();
//                 res.redirect("/" + customListName);
//             } else {
//               res.render('list',{users:response.data,newListItems: foundList.item});

//                 // res.render("list",{listTitle :foundList.name,newListItems: foundList.item});
//             }
//         }
//     })
//     })
// }
   





// used to ad

exports.add_user = (req,res) => {
    if(req.isAuthenticated()){
    res.render('add_user');
}else {
    res.redirect("/adminreg");
}
}

/****************used for Updating vechile table */

exports.update_user = (req,res) =>{
    if(req.isAuthenticated()){
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_user",{user:userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}else {
    res.redirect("/adminreg");
}
}

// *************End of vechile table**************

/****************used for retrieve contact table */
exports.contacttbl =(req,res) => {
    if(req.isAuthenticated()){
    //make get req to /api/users (this will return the promise)
    axios.get('http://localhost:3000/contacts')
    .then(function(response){
    console.log(response.data)
    res.render('contact_tbl',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}else {
    res.redirect("/adminreg");
}
}

// ***********************end of contact table *********


/****************used for retrieve user table */

exports.usertbl =(req,res) => {
    if(req.isAuthenticated()){
    //make get req to /api/users (this will return the promise)
    axios.get('http://localhost:3000/reg')
    .then(function(response){
    console.log(response.data)
    res.render('user_tbl',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}else {
    res.redirect("/adminreg");
}
}

// ***********************end of user table *********

/****************admin for retrieve user table */

exports.admintbl =(req,res) => {
    if(req.isAuthenticated()){
    //make get req to /api/users (this will return the promise)
    axios.get('http://localhost:3000/adreg')
    .then(function(response){
    console.log(response.data)
    res.render('admin_tbl',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}else {
    res.redirect("/adminreg");
}
}

// ***********************end of user table *********


/****************used for retrieve feedback table */
exports.feedbacktbl =(req,res) => {
    if(req.isAuthenticated()){
    //make get req to /api/users (this will return the promise)
    axios.get('http://localhost:3000/feedbacks')
    .then(function(response){
    console.log(response.data)
    res.render('feedbacktbl',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}else {
    res.redirect("/adminreg");
}
}

// ***********************end of feedback table *********