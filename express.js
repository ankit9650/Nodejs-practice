
var express = require('express')
var app= express();

app.get("/",(req,res)=>{
   
    return res.send(`hey ankit${req.query.myname}`);
})

app.listen(8080,()=>{
    console.log("server started!")
})