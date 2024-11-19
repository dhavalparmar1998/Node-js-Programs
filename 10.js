const fs = require("fs");
const zlib = require("zlib");
var readstream = fs.createReadStream("home.html");
var writestream = fs.createWriteStream("home.html.zip");

var gzip = zlib.createGzip();
readstream.pipe(gzip).pipe(writestream).on("finish",function(){
    console.log("zip file created successfully");
})