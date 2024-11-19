var fs = require("fs/promises");
console.log("start");

async function readdata(){
    try {
        var result = await fs.readFile("./home.html",{encoding: "utf-8"});
        console.log(result);
        
    } catch (err) {
        console.log(err.message);
        
    }
}
readdata();
console.log("end");