const express = require('express');
const jwt = require("jsonwebtoken");
const cors = require('cors');

const app = express();
const PORT = 3000;
const secret = "harsh"


let users = [{username: "ayush", password: "112233"}];

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/public"));

function verifyToken(req, res, next){
    console.log(req.headers.token)
    const token = req.headers.token;

    try{
        var decoded = jwt.verify(token, secret);
        req.user = decoded;
    }
    catch(err){
        console.log("wrong Token");
        res.status(401).json({msg: "Invalid Token"})
    }
    
    next();

}

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.js", (err)=>{
        res.send(err);
    });
});

app.post("/signup", (req, res)=>{
    console.log("Signup Request.");
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((user)=> user.username===username);
    if(user){
        res.status(400).json({message: "user already Exist"});
    }
    else{
        const newUser = {username: username, password: password};
        users.push(newUser);
        res.status(200).json({msg: "successfully registered"});
    }
})

app.post("/signin", (req, res)=>{
    console.log("Signin Request.");
    const username = req.body.username;
    const password = req.body.password;
    const user = users.find((user)=> (user.username==username && user.password==password));
    if(!user){
        res.status(405).json({message: "wrong credentials"});
    }
    else{
        let token = jwt.sign({username: username}, secret, { expiresIn: '1h' });

        res.status(200).json({message: "logged in", token: token, user: user});
    }
})

app.get("/me", verifyToken, (req, res)=>{
    console.log("me request")
    const user = req.user;

    res.status(200).json({message: "success Profile", user: user});

});

app.listen(PORT, ()=>{
    console.log("listening...");
});


// whee coockie and heder come into picture 
// logout problems with jwt