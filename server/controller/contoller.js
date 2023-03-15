var Vechdb = require('../model/model');
const Contactdb = require('../model/modelcon');
var Userdb = require('../model/user');
var Admindb = require('../model/admin');
const Feedbackdb = require('../model/feedmod');
    passport = require("passport");


// ****************Admin Login***********


exports.createadmin = (req,res)=>{
	var adminid = req.body.adminid;
    var username = req.body.username;
	var phone = req.body.phone;
	var email = req.body.email;
    var password = req.body.password;
    Admindb.register(new Admindb({adminid: adminid, username: username ,phone: phone, email: email}),
                password, function (err, user) {
            if (err) {
                console.log(err);
                return res.render("adminreg");
            }
            // passport authenticate is an plugin which is used to authenticate username and password 
            passport.authenticate("Admin-auth")(
                req, res, function () {
                res.render("adminlog");
            });
        });
    }

// retrieve and return all users/ retrive and return a single user
exports.findadmin = (req,res)=>{
    
    if(req.query.id){
        const id = req.query.id;
    
        Admindb.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"Error retrieving user with id"+id});
            }else{
                res.send(data)
            }
        })
    
    }else{
        Admindb.find()
        .then(user =>{
            res.send(user)
        })
        .catch(err =>{
            res.status(500).send({message:err.message||"Error Occured while retriving user information"})
        })
    }}




// ****************user Login***********


exports.createreg = (req,res)=>{
    var username = req.body.username;
	var phone = req.body.phone;
	var email = req.body.email;
    var password = req.body.password;
    Userdb.register(new Userdb({ username: username ,phone: phone, email: email}),
            password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        }
        
        // passport authenticate is an plugin which is used to authenticate username and password 
        passport.authenticate("User-auth")(
            req, res, function () {
            res.render("login");
        });
    });
}

// retrieve and return all users/ retrive and return a single user
exports.finduser = (req,res)=>{
    
    if(req.query.id){
        const id = req.query.id;
    
        Userdb.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"Error retrieving user with id"+id});
            }else{
                res.send(data)
            }
        })
    
    }else{
        Userdb.find()
        .then(user =>{
            res.send(user)
        })
        .catch(err =>{
            res.status(500).send({message:err.message||"Error Occured while retriving user information"})
        })
    }  
    }
    
    
    //Delete a user with specified user id in the request
    exports.deleteuser = (req,res)=>{
        const id = req.params.id;//here value is passed through params object
        
        Userdb.findByIdAndDelete(id)
        .then(data=>{
         if(!data){
            res.status(404).send({message: `Cannot Delete with  id ${id}, Maybe id is wrong`})
         }else{
            res.send({
                message:"User was deleted successfully"
            })
         }
        })
        .catch(err=>{
            res.status(500).send({
                message:"Could not delete user with id="+id
            });
        });
    }




//**************contact*********** /
exports.createcon = (req,res)=>{
    //  validate request
    if(!req.body.name){
        res.status(400).send({message:"Content can not be empty!"});
        return;
    } 
    
    //new user
    const user = new Contactdb({   
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
    })
    
    //save user in the database(using chaining system)
    user
        .save(user)
        .then(data=>{
         //res.send(data)
         res.redirect('/contact');
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Some error occurred while creating a create operation"
            });
        });
    }
    
    // retrieve and return all users/ retrive and return a single user
    exports.findcon = (req,res)=>{
    
    if(req.query.id){
        const id = req.query.id;
    
        Contactdb.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"Error retrieving user with id"+id});
            }else{
                res.send(data)
            }
        })
    
    }else{
        Contactdb.find()
        .then(user =>{
            res.send(user)
        })
        .catch(err =>{
            res.status(500).send({message:err.message||"Error Occured while retriving user information"})
        })
    }
    
       
    }
    
    //Delete a user with specified user id in the request
    exports.deletecon = (req,res)=>{
        const id = req.params.id;//here value is passed through params object
        
        Contactdb.findByIdAndDelete(id)
        .then(data=>{
         if(!data){
            res.status(404).send({message: `Cannot Delete with  id ${id}, Maybe id is wrong`})
         }else{
            res.send({
                message:"User was deleted successfully"
            })
         }
        })
        .catch(err=>{
            res.status(500).send({
                message:"Could not delete user with id="+id
            });
        });
    }


//*****************end contact*************** */


//**************feedback*********** /
exports.createfeed = (req,res)=>{
    //  validate request
    if(!req.body.category1){
        res.status(400).send({message:"Content can not be empty!"});
        return;
    } 
    
    //new user
    const user = new Feedbackdb({   
        category1:req.body.category1,
        category2:req.body.category2,
        category3:req.body.category3,
        email:req.body.email,
        message:req.body.message
    })
    
    //save user in the database(using chaining system)
    user
        .save(user)
        .then(data=>{
         //res.send(data)
         res.redirect('/feedback');
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Some error occurred while creating a create operation"
            });
        });
    }
    
    // retrieve and return all users/ retrive and return a single user
    exports.findfeed = (req,res)=>{
    
    if(req.query.id){
        const id = req.query.id;
    
        Feedbackdb.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"Error retrieving user with id"+id});
            }else{
                res.send(data)
            }
        })
    
    }else{
        Feedbackdb.find()
        .then(user =>{
            res.send(user)
        })
        .catch(err =>{
            res.status(500).send({message:err.message||"Error Occured while retriving user information"})
        })
    }   
    }
    
    //Delete a user with specified user id in the request
    exports.deletefeed = (req,res)=>{
        const id = req.params.id;//here value is passed through params object
        
        Feedbackdb.findByIdAndDelete(id)
        .then(data=>{
         if(!data){
            res.status(404).send({message: `Cannot Delete with  id ${id}, Maybe id is wrong`})
         }else{
            res.send({
                message:"User was deleted successfully"
            })
         }
        })
        .catch(err=>{
            res.status(500).send({
                message:"Could not delete user with id="+id
            });
        });
    }


//*****************end feedback*************** */






// create and save new user
exports.create = (req,res)=>{
//  validate request
if(!req.body.name){
    res.status(400).send({message:"Content can not be empty!"});
    return;
} 

//new user
const user = new Vechdb({   
    parkno:req.body.parkno,
    name:req.body.name,
    contactno:req.body.contactno,
    category:req.body.category,
    regno:req.body.regno,
    intime:req.body.intime,
    outtime:req.body.outtime,
    charge:req.body.charge
})

//save user in the database(using chaining system)
user
    .save(user)
    .then(data=>{
     //res.send(data)
     res.redirect('/add-user');
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occurred while creating a create operation"
        });
    });
}

// retrieve and return all users/ retrive and return a single user
exports.find = (req,res)=>{

if(req.query.id){
    const id = req.query.id;

    Vechdb.findById(id)
    .then(data =>{
        if(!data){
            res.status(404).send({message:"Error retrieving user with id"+id});
        }else{
            res.send(data)
        }
    })

}else{
    Vechdb.find()
    .then(user =>{
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({message:err.message||"Error Occured while retriving user information"})
    })
}  
}

//Update a new identified user by user id 
exports.update = (req,res)=>{
if(!req.body){
    return res
    .status(400)
    .send({message:"Data to update can not be empty"})
}
const id = req.params.id;//here value is passed through params object
Vechdb.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
.then(data=>{
    if(!data){
    res.status(404).send({message:`Cannot Update user with ${id}, Maybe user not found!`})
}else{
    res.send(data)
}
})
.catch(err =>{
    res.status(500).send({message:"Error Update user information"})
})
}

//Delete a user with specified user id in the request
exports.delete = (req,res)=>{
    const id = req.params.id;//here value is passed through params object
    
    Vechdb.findByIdAndDelete(id)
    .then(data=>{
     if(!data){
        res.status(404).send({message: `Cannot Delete with  id ${id}, Maybe id is wrong`})
     }else{
        res.send({
            message:"User was deleted successfully"
        })
     }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Could not delete user with id="+id
        });
    });
}