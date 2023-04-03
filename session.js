var express=require("express");
var session=require('express-session');
var app=express();
app.use(session({
    secret:'Your_secret_key',
    resave:true,
    saveUninitialized:true
}));
app.get('/',function(req,res){
    req.session.userName='Vedant';
    res.send('Thanks for visiting');
})
app.get('/login',function(req,res){
    var userName=req.session.userName;
    res.send("welcome"+userName);
})
app.listen(8000,function(){
    console.log("server is up and running");
})