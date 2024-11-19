var http = require("http");
var fs = require("fs");

const server = http.createServer((req,res)=>{
    fs.readFile("./home.html","utf-8",(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.end(data)
        }
    })
});
server.listen(9001 , ()=>{
    console.log("Server started");
});
// >1024 <65635