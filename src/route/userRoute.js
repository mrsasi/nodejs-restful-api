const express = require("express");
const userRoute = express.Router();

const userModel = require("../model/userModel");

//get all data 
userRoute.get("/", async (req, res) => {
  try {
    const getUserData = await userModel.find();
    res.json(getUserData);
  } catch (err) {
    res.json({ message: err });
  }
  // res.send("<h1>this user get methods</h1>");
});

// save all data
userRoute.post("/data", async (req, res) => {
  const post = new userModel({
    name: req.body.name,
    age: req.body.age,
    address: req.body.address
  });
  try {
    const postUserData = await post.save();
    res.json(postUserData);
  } catch (err) {
    res.json({ message: err });
  }
  // post.save().then(data=>{
  //     res.json(data);
  // }).catch(err=>{
  //     res.json({message:err});
  // })
});

// get one id
userRoute.get("/:id", async (req, res) => {
  try {
    const data = await userModel.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete id
userRoute.delete("/:id", async (req, res) => {
  try {
    const removedata = await userModel.deleteOne({ _id: req.params.id });
    res.json(removedata);
  } catch (err) {
    res.json({ message: err });
  }
});

// update id
userRoute.patch("/:id", async (req, res) => {
  try {
    const updateOnedata = await userModel.updateOne(
      { _id: req.params.id },
      { $set: { name: req.params.name } }
    );
    res.json(updateOnedata);
    console.log(updateOnedata);
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = userRoute;
