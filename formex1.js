var express = require('express');
var app=express();
app.get('/formex1', function (req, res) {
res.send('<h1>Username: ' + req.query['first_name']+'</p><p>Lastname:'+req.query['last_name']+'</h1>');
})
var server = app.listen(8000, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
})