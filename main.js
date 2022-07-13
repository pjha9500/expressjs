
const express=require('express');
const app=express();

app.use((req,res,next)=>{           //middleware1
    console.log("hello Expressjs");
    next(); //allows the request to comtinue int next middleware
})

app.use((req,res,next)=>{           //middleware2
    console.log("int the other middleware")
    res.send('<h1>Hello Expressjs</h1')
})

app.listen(4000); 