const express = require('express');
const fs = require('fs');
const app = express();

app.get("/", (req, res)=>{
    res.send("<h1> Perform Calculation </h1>")
})

let count = 0;
function logger(req, res, next){
    count++;
    const date = new Date();
    fs.appendFile('a.txt', date+"  |  "+req.method+"  |  "+req.url+"\n", (err) => {
        console.log(err);
    })
    next();
}

app.use(logger);

app.get("/multiply", (req, res)=> {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.status(200).json({ans: a*b});
})

app.get("/add", (req, res)=> {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.status(200).json({ans: a+b});
})

app.get("/divide", (req, res)=> {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.status(200).json({ans: a/b});
})

app.get("/subtract", (req, res)=> {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.status(200).json({ans: a-b});
})

app.get("/req-count", (req, res)=> {
    res.send(count);
})

app.listen(3000, ()=>{
    console.log("listening on 3000");
})