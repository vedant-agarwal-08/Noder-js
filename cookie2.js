var express=require('express');
var cookieParser=require('cookie-parser');
var app=express();
app.use(cookieParser());
app.get('/',function(req,res){
    res.send('Welcome to a simple HTTP cookie server');
})
app.get('/setcookie',function(req,res){
    res.cookie(`cookie token name`,`encypted cookie string value`,{
        maxAge:5000,
        expires:new Date(),
        secure:true,
        httpOnly:true,
        sameSite:'lax'
    });
    res.send('cookie have been saved succesfully');
})
app.listen(8000,function(){
    console.log('the server is up and running');
})