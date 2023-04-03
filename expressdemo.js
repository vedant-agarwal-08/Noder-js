const express=require("express");
var app=express();
app.get("/",function(req,res){
    res.send("<html><body><h1>Hello world</h1></body></html>")
});
var server=app.listen(5000,function(){
    console.log("server is up and running");
})