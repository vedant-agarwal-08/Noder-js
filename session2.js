var express=require('express');
var cookieParser=require("cookie-parser");
var session=require('express-session');
var app=express();
app.use(cookieParser());
app.use(session({
    secret:'Your_secret_key',
    resave:true,
    saveUninitialized:true
}));
app.get('/',function(req,res){
    if(req.session.page_views){
        req.session.page_views++;
        res.send("you visited this page"+req.session.page_views+"times");
    }else{
        req.session.page_views=1;
        res.send('welcome to this page for the first time');
    }
})
app.listen(8000);