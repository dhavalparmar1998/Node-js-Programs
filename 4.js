var fs = require("fs");

console.log("start");
var result = fs.readFileSync('./home.html','utf-8');
console.log(result);
console.log("end");