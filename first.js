var http = require('http')
var Date = require('./module1')
var fs = require('fs')
http.createServer(function(req,res){
    res.writeHead(200);
    //################ import module ################//
    res.end('hello ankit'+Date.myDateTime())
    // console.log('hii ankit')  

    //################ file write and create ######################//

    //fs.writeFileSync("./file1.txt","Hey ankit this is your first file handling");
    
    //################ file read  ######################//

    // const Reading= fs.readFileSync("./file1.txt","utf-8")    
    // console.log(Reading)    
}).listen(8080)