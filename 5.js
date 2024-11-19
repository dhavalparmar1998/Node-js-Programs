var fs = require("fs");

console.log("start");
fs.readFile("./home.html","utf-8",(err,data)=>{
  if(err){
    console.log(err);
  }
  else {
    console.log(data);
  }
});
console.log("end");