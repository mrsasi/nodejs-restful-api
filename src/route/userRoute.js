const express= require("express");
const userRoute= express.Router();

const userModel= require("../model/userModel");


userRoute.get("/",(req,res)=>{
    res.send("<h1>this user get methods</h1>");
})


userRoute.post("/data", async (req,res)=>{
    const post = new userModel({
        name:req.body.name,
        age:req.body.age,
        address:req.body.address
    });
    try{
        const postUserData = await post.save();
        res.json(postUserData);
    }catch(err){
        res.json({message:err});
    }
    // post.save().then(data=>{
    //     res.json(data);
    // }).catch(err=>{
    //     res.json({message:err});
    // })
})

module.exports=userRoute;