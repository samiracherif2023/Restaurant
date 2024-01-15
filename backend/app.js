// import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
// import bcrypt module
const bcrypt = require("bcrypt");
// import mongoose module
const mongoose = require('mongoose');
// connect app with db
mongoose.connect('mongodb://127.0.0.1:27017/restoDB');
// create express application
const app = express();
// Configure Body-parser
// Send JSON responses
app.use(bodyParser.json());
// Get objects from Request 
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// Models Importation
const Chef = require ("./models/chef");
const Plat = require ("./models/plat");
const User = require ("./models/user");





function generatedId(T){
    let max;
    if (T.length == 0) {
      max = 0;
  }
  else {
      max = T[0].id;
      for (let i = 0; i < T.length; i++) {
          if (T[i].id > max) {
              max = T[i].id;
          }
      }
  }
  return max + 1;
  }

// Plats Tab Simulation
let plats = [
    {id:1,name:"sbaguetti",price:"23$",description:"sbaguetti est delecieux"},
    {id:2,name:"kouskous",price:"31$",description:"kouskous est delecieux"},
    {id:3,name:"poisson",price:"19$",description:"POISSON est delecieux"}
]

// Users Tab Simulation
let users = [
    {id:1,firstName:"haroun",lastName:"Jlassi",email:"haroun@gmail.com",password:123456,phone:12345678},
    {id:2,firstName:"zakariyya",lastName:"Dridi",email:"zakariyya@gmail.com",password:123456,phone:12345678},
    {id:3,firstName:"yahya",lastName:"Cherif",email:"yahya@gmail.com",password:123456,phone:12345678}
]

//Business Logic : Get All Plats
app.get("/plats", (req, res) => {
    //
    console.log("here all Plats");
    Plat.find().then((docs)=>{
        console.log("Here docs",docs);
        res.json({platsArray:docs,message:"Done"});
    })
   
})

//Business Logic : Get All Chefs
app.get("/chefs", (req, res) => {
    //
    console.log("here all Chefs");
    Chef.find().then((docs)=>{
        console.log("Here docs",docs);
        res.json({chefsArray:docs,message:"Done"});
    })
   
})

//Business Logic : Get All Users
app.get("/users", (req, res) => {
    //
    console.log("here all Users");
    User.find().then((docs)=>{
        console.log("Here docs",docs);
        res.json({usersArray:docs,message:"Done"});
    })
})

//Business Logic : Get Plat by Id
app.get("/plats/:id", (req, res) => {
    //
    console.log("here into bl: get plat by id");
  
    let id= req.params.id;
    
    Plat.findOne({_id:id}).then((doc)=> {
        res.json({plat: doc});
    })
})

//Business Logic : Get Chef by Id
app.get("/chefs/:id", (req, res) => {
    //
    console.log("here into bl: get chef by id");
  
    let id= req.params.id;
    
    Chef.findOne({_id:id}).then((doc)=> {
        res.json({chef: doc});
    })
})

//Business Logic : Get User by Id
app.get("/users/:id", (req, res) => {
    //
    console.log("here into bl: get plat by id");
    // let id = activatedRoute . snapshot() . paramMap().get("id");
    let id= req.params.id;
    User.findOne({_id:id}).then((doc)=>{
        res.json({user: doc});
    })
  
})

//Business Logic : delete Plat
app.delete("/plats/:id", (req, res) => {
    console.log("here into bl: delete plat ")
    let id = req.params.id;
    Plat.deleteOne({_id:id}).then((response)=>{
        console.log("here response",response);
        if (response.deletedCount==1){
            res.json ({isDeleted:true});
        }
        else {
            res.json ({isDeleted:false}); 
        }
           });
        
})

//Business Logic : delete Chef
app.delete("/chefs/:id", (req, res) => {
    console.log("here into bl: delete chef ")
    let id = req.params.id;
    Chef.deleteOne({_id:id}).then((response)=>{
        console.log("here response",response);
        if (response.deletedCount==1){
            res.json ({isDeleted:true});
        }
        else {
            res.json ({isDeleted:false}); 
        }
           }); 
})

//Business Logic : delete User
app.delete("/users/:id", (req, res) => {
    console.log("here into bl: delete user ")
    let id = req.params.id;
    User.deleteOne({_id:id}).then((response)=>{
        console.log("here response",response);
        if (response.deletedCount==1){
            res.json ({isDeleted:true});
        }
        else {
            res.json ({isDeleted:false}); 
        }
           });
        
})

//Business Logic : add Plat
app.post("/plats", (req, res) => {
    //
    console.log("here into bl: add plat ");
    // get object from request
    let plat = new Plat(req.body);
    plat.save();
    res.json ({message:"Plat Added with success"});
})

//Business Logic : add Chef
app.post("/chefs", (req, res) => {
    //
    console.log("here into bl: add chef ");
    // get object from request
    let chef = new Chef(req.body);
    chef.save();
    res.json ({message:"Chef Added with success"});
})

// Business Logic: signup
app.post("/users/signup",(req,res)=>{
    console.log("Here into BL: Signup",req.body);
    bcrypt.hash(req.body.password,8).then((cryptedPwd)=>{
        console.log("crypted pwd",cryptedPwd);
        let user= new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:cryptedPwd,
            phone:req.body.phone,
            role:req.body.role,
    });
    user.save((err,doc)=>{
        if(err){
            res.json({message:"Email exist"});
        }
        else {
            res.json({message:"Added with success"});
        }
    });
    });
});

//Business Logic : edit Plat
app.put("/plats", (req, res) => {
    //
    console.log("here into bl: edit plat ")
    let newPlat = req.body;
    for (let i = 0; i < plats.length; i++) {
       if (plats[i].id == newPlat.id) {
        plats[i]=newPlat;
        break;
       }
    }
    res.json({isUpdated:true});
})

//Business Logic : edit Profile
app.put("/users", (req, res) => {
    //
    console.log("here into bl: edit profile ")
    let newProfile = req.body;
    for (let i = 0; i < users.length; i++) {
       if (users[i].id == newProfile.id) {
        users[i]=newProfile;
        break;
       }
    }
    res.json({isUpdated:true});
})


// Business Logic: signup
app.post("/users/signup",(req,res)=>{
    console.log("Here into BL: Signup",req.body);
    bcrypt.hash(req.body.password,8).then((cryptedPwd)=>{
        console.log("crypted pwd",cryptedPwd);
        let user= new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:cryptedPwd,
            phone:req.body.phone,
            role:req.body.role,
    });
    user.save((err,doc)=>{
        if(err){
            res.json({message:"Email exist"});
        }
        else {
            res.json({message:"Added with success"});
        }
    });
    });
});
//Business Logic : Login
app.get("/users/:email/:password", (req, res) => {
    //
    
    console.log("here LOGIN");
    let email = req.params.email;
    let password = req.params.password;
    let findedUser;
    for (let i = 0; i < users.length; i++) {
       if (users[i].email == email && users[i].password == password) {
         findedUser=users[i];
        break;
       }
    }
    res.json({findedUser:findedUser});
})


  //make app importable
module.exports = app;