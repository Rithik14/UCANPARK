const axios = require('axios');//this allows us to make request

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

exports.logout = (req,res)=>{
    res.render("index");
}

exports.feedback = (req,res)=>{
    res.render("feedback");
}

exports.contact = (req,res)=>{
    res.render("contact");
}

exports.userindex = (req,res)=>{
    res.render("userindex");
}

exports.forgot = (req,res)=>{
    res.render("forgot");
}


// if we use exports to var then that var can by other file
exports.homeRoutes =(req,res) => {
    //make get req to /api/users (this will return the promise)
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
    console.log(response.data)
    res.render('table',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}


// used to ad

exports.add_user = (req,res) => {
    res.render('add_user');
}

/****************used for Updating vechile table */

exports.update_user = (req,res) =>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_user",{user:userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}

// *************End of vechile table**************

/****************used for retrieve contact table */
exports.contacttbl =(req,res) => {
    //make get req to /api/users (this will return the promise)
    axios.get('http://localhost:3000/contacts')
    .then(function(response){
    console.log(response.data)
    res.render('contact_tbl',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}

// ***********************end of contact table *********


/****************used for retrieve user table */

exports.usertbl =(req,res) => {
    //make get req to /api/users (this will return the promise)
    axios.get('http://localhost:3000/reg')
    .then(function(response){
    console.log(response.data)
    res.render('user_tbl',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}

// ***********************end of user table *********

/****************admin for retrieve user table */

exports.admintbl =(req,res) => {
    //make get req to /api/users (this will return the promise)
    axios.get('http://localhost:3000/adreg')
    .then(function(response){
    console.log(response.data)
    res.render('admin_tbl',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}

// ***********************end of user table *********


/****************used for retrieve feedback table */
exports.feedbacktbl =(req,res) => {
    //make get req to /api/users (this will return the promise)
    axios.get('http://localhost:3000/feedbacks')
    .then(function(response){
    console.log(response.data)
    res.render('feedbacktbl',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}

// ***********************end of feedback table *********