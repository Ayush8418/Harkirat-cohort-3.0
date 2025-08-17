const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

app.post("/register", (req,res)=>{
    const a = req.body.a;
    const b = req.body.b;
    const name = req.headers.name;
    console.log(a);
    console.log(b);
    console.log(name);

    res.status(200).send("Post Successful");

})

app.listen(3000);