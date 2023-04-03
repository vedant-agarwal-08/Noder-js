var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('readdemo.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
    fs.writeFile('sample.txt','File manipulation is very simple in node js',function(err){
        if(err) throw err;
        console.log('sample.txt is created successfully');
    })
    fs.appendFile('sample.txt','Read,write and append file operation',function(err){
        if(err) throw err;
        console.log('New line of content stored in sample.txt');
    })
    // fs.unlink('sample1.txt',function(err){
    //     if(err) throw err;
    //     console.log('File deleted!');
    // })
    // fs.rename('sample.txt','sampledemo.txt',function(err){
    //     if(err) throw err;
    //     console.log('File renamed succesfully!');
    // })
}).listen(8080);