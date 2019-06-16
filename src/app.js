const express= require("express");
const http = require("http");
// const bodyParser = require('body-parser');
const mongoose =require("mongoose");
require("dotenv/config");

const app=express();

//with body-parser 
// app.use(bodyParser.json());


// without body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const server= http.createServer(app);

const userRoute=require("./route/userRoute");

app.use("/user", userRoute);

app.get("/", (req,res)=>{
    res.send("<h1>Welcome Sasikumar</h1>");
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },()=>{
    console.log("db is working");
})

server.listen(process.env.APP_PORT,(req,res)=>{
    console.log(`server run on port ${process.env.APP_PORT}`);
});