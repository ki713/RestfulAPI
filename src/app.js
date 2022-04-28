const express = require("express");
require("./db/conn");
const Students = require('./models/student');
const app = express();
const port = process.env.PORT || 8000

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello World from other side");
})

//to create a data
app.post("/students",(req,res)=>{
    //to get the data from the postman
    console.log(req.body);
    const user = new Students(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((error)=>{
        res.status(400).send(error);
    })
    //res.send("Hello World");
});
//console.log("Hello from the students");

app.listen(port,()=>{
    console.log(`Connection Successful ${port}`);
})

