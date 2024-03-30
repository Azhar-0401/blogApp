 const express = require("express");
 const app = express();

 app.listen(3000, ()=>{
    console.log("App is running successfully");
 })

 app.get("/" , (req,res) =>{
       res.send(`<h1>this is Home page</h1>`)
 })