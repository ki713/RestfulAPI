const mongoose = require('mongoose');
const validator = require('validator');
const express = require('express');

//to create a schema
const studentsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength: 3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"The email is already exists"],
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid email");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        //max:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }


});

//to create a database
const Students = new mongoose.model("Student",studentsSchema);

module.exports = Students;
//to create a collection
// const student = async()=>{
//     try{
//         const stu1 = new Students({
//             name:"Kiran",
//             email:"kiranpreetsethi65@gmail.com",
//             phone:122421325,
//             address:"wwqqdhwerhiwehfi"
//         })

//         const stu2 = new Students({
//             name:"giya",
//             email:"giya12@gmail.com",
//             phone:122421325,
//             address:"wwqqdhwerhiwehfi"
//         })

//         const stu3 = new Students({
//             name:"riya",
//             email:"riya235@gmail.com",
//             phone:1222142355,
//             address:"wwqqdhwerhiwehfi"
//         })

//         const stu4 = new Students({
//             name:"Kiran",
//             email:"kiranpreetsethi65@gmail.com",
//             phone:122421325,
//             address:"wwqqdhwerhiwehfi"
//         })

//         const stu5 = new Students({
//             name:"Kiran",
//             email:"kiranpreetsethi65@gmail.com",
//             phone:122421325,
//             address:"wwqqdhwerhiwehfi"
//         })

//         const result = await insertMany([stu1,stu2,stu3,stu4,stu5]);
//         console.log(result);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }
// student();