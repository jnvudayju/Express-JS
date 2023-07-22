
const path = require('path');
const express = require('express');
const app = express();


//we can use write method too
//console.log(__dirname);

const staticpath = path.join(__dirname,"../public");
const templatePath  = path.join(__dirname,"../template3");


//to set the view engine
app.set("view engine", "hbs");

//how to set different name
app.set("views", templatePath);

// // // //template engien route
app.get("/", (req, res)=>{
    res.render("index.hbs");
});

//built in middleware function
app.use(express.static(staticpath));

app.get("/", (req, res)=>{
    res.send("Hello from the express side ");
});



app.get("/about", (req, res)=>{
    res.send("Hello from the about side ");
});

app.get("/food", (req, res)=>{
    res.send("<h1> Food should be treated like God </h1>");
});

//json object
app.get("/nav", (req, res)=>{
    res.send({
        id:null,
        name: "Uday"
    });
});

app.listen(8000, ()=>{
    console.log("listening to the port.... ");
});