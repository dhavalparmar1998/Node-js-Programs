var express = require("express");
const bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: true }))
const port = 9000;
app.set("view engine", "ejs");

app.get("/" , async(req,res)=>{
    try {
        var result = await fetch("https://fakestoreapi.com/products");
        var ans = await result.json();
        res.render("home", {apidata:ans});
        
    } catch (err) {
        console.log(err);
        res.send("Error in API")
        
    }
})
app.get("/register-page" , (req,res)=>{
    res.render("register");
})

app.get("/login-page" , (req,res)=>{
    res.render("login");
})
app.post("/register-action", (req,res)=>{
    console.log("post called");
    console.log(req.body);
})
app.listen(port, ()=>{
    console.log("started");
})
