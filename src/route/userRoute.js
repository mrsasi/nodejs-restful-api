const express= require("express");
const userRoute= express.Router();

const userModel= require("../model/userModel");


userRoute.get("/",(req,res)=>{
    res.send("<h1>this user get methods</h1>");
})


userRoute.post("/data",(req,res)=>{
    const post = new userModel({
        name:req.body.name,
        age:req.body.age,
        address:req.body.address
    });
    post.save().then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json({message:err});
    })
})

module.exports=userRoute;