
var express = require('express')
var users = require('./MOCK_DATA.json')
var app= express();

app.get("/users",(req,res)=>{   
    return res.json(users);
})

app.get("/users/:id", (req, res) => {
    var id = Number(req.params.id);    
    var user = users.find((user) => user.id === id);  
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  });

app.post("/users",(res,req)=>{

    return res.json({status:"pending"})
})

app.listen(8080,()=>{
    console.log("server started!")
})