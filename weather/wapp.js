const express = require("express")
const app = express();
const https = require("https");
https.get("")

app.get("/",function(req,res){
    res.send("server is running")
})




app.listen(3000,function(){console.log("server is runnign");})