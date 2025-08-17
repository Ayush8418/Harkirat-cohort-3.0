const express = require('express');
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;
const secret = "harsh"

let users = [{username: "ayush", password: "112233"}];

app.use(express.json());

function verifyToken(req, res, next){
    console.log(req.body)
    const token = req.headers.token;

    try{
        var decoded = jwt.verify(token, secret);
        req.body.user = decoded;
    }
    catch(err){
        console.log("wrong Token");
        res.status(401).json({msg: "Invalid Token"})
    }
    
    next();

}

app.post("/signup", (req, res)=>{
    console.log("Signup Request.");
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((user)=> user.username==username);
    if(user){
        res.status(400).json({message: "user already Exist"});
    }

    const newUser = {username: username, password: password};
    users.push(newUser);
    res.status(200).json({msg: "successfully registered"});
})

app.post("/signin", (req, res)=>{
    console.log("Signin Request.");
    const username = req.body.username;
    const password = req.body.password;
    const user = users.find((user)=> (user.username==username && user.password==password));
    if(!user){
        res.status(405).json({message: "wrong credentials"});
    }

    let token = jwt.sign({username: username}, secret, { expiresIn: '1h' });

    res.status(200).json({message: "logged in", token: token});
})

app.post("/me", verifyToken, (req, res)=>{

    const user = req.body.user;

    res.status(200).json({message: "success Profile", username: user.username});

})

app.listen(PORT, ()=>{
    console.log("listening...");
});


// whee coockie and heder come into picture 
// logout problems with jwt