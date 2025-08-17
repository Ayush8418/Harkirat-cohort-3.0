const express = require('express');
const app = express();

let users = [{username: "ayush", password: "112233", token: "2"}];

app.use(express.json());

function generateToken(){
    let token = "";
    for(i=0 ; i<5 ; i++){
        token += (Math.ceil(Math.random()*1000000) + "0");
    }
    return token;
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
    const user = users.findIndex((user)=> (user.username==username && user.password==password));
    if(user == -1){
        res.status(405).json({message: "wrong credentials"});
    }

    let token = generateToken();
    users[user].token = token;
    res.status(200).json({message: "logged in", token: token});
})

app.post("/me", (req, res)=>{
    console.log("profile Request.");
    const token = req.headers.token;
    console.log(token)
    const user = users.findIndex((user)=> (user.token==token));
    if(user == -1){
        res.status(405).json({message: "wrong token header"});
    }

    res.status(200).json({message: "success Profile", username: users[user].username});
})

app.listen(3000, ()=>{
    console.log("listening...");
});