// jshint esversion:6
// var superheroes=require("superheroes");
// var mysuperheroname=superheroes.random();
// console.log(mysuperheroname);

var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200);
    res.end('happy to learn node js')
}).listen(8080);