var http = require('http')
var Date = require('./module1')
var fs = require('fs')
var url = require('url')
http.createServer(function(req,res){
//     res.writeHead(200);
//     //################ import module ################//
//     //res.end('hello ankit'+Date.myDateTime())
//     // console.log('hii ankit')  

//     //################ file write and create ######################//

//     //fs.writeFileSync("./file1.txt","Hey ankit this is your first file handling");
    
//     //################ file read  ######################//

//     // const Reading= fs.readFileSync("./file1.txt","utf-8")    
//     // console.log(Reading)    
    
    //################ update file on every request ######################//
    if(req.url ==="./favicon.io") {
        
        return res.end()   
    }

    // ######### url handling##################//
    const myurl = url.parse(req.url, true);
    console.log(myurl);

    // ###############log entry################?//
    const log = `${Date.myDateTime()+myurl.query.myname}: Record added \n`
   

    //#################### file writing#################//
    fs.writeFile("./file.txt",log,{ flag: 'a' },(err)=>{
        if (err) {
            console.error('error wrting file',err)
            res.writeHead(500, {'Content-Type': 'text/plain'});        
            return res.end("Error!!!!!");        
        }
     
        switch(myurl.pathname) {
            case "/":
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end("My HomePage");
                break;  

            case "/about":
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end("My About Page");
                break;  

            default:
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end("404 Not Found");
                break;  
        }
        
    })

}).listen(8080, ()=>{
    console.log("server started")
})



