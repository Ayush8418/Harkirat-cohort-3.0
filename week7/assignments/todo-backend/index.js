const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { z } = require("zod");

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://harshweather2712:harsh21@cluster0.kcfkc9d.mongodb.net/todo-app");
const {UserModel, TodoModel} = require("./db.js");

const JWT_SECRET = "harshishard";
const PORT = 3000;
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));


const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(18),
    username: z.string()
})
const tosoSchema = z.object({
    description: z.string(),
    done: z.boolean(),
    userId: z.string()
})


function verifyToken(req, res, next){
    const token = req.headers.token;
    try{
        const user = jwt.verify(token, JWT_SECRET);
        req.user = user;
        next();
    }
    catch(err){
        res.status(403).json({message: "token verification fail"});
    }
}

app.post("/signup", async (req, res)=>{
    const newUser = req.body;
    const validate = userSchema.safeParse(newUser);
    if(!validate.success){
        res.status(403).json({message: "invalid input.", input: newUser, error: validate.error.m});
    }else{
        const findUser = await UserModel.findOne({email : newUser.email});
        if(findUser){
            res.status(400).json({message: "email already in use."});
        }

        try{
            bcrypt.hash(newUser.password, saltRounds, async (err, hash) => {
                if(err){
                    console.log("fail to hash password");
                    res.status(400).json({message: "failed to hash password", user: user});
                }
                const user = await UserModel.create({...newUser, password: hash});
                res.status(200).json({message: "User created", user: user});
            });
        }
        catch(err){
            res.status(400).json({message: "failed to create user", user: user});
        }
    }
    
});

app.post("/signin", async (req, res)=>{
    const newUser = req.body;
    const validate = userSchema.safeParse(newUser);
    if(!validate.success){
        res.status(406).json({message: "Invalid Input"});
    }else{
        const user = await UserModel.findOne({email: newUser.email});
        if(user){
            bcrypt.compare(newUser.password, user.password, function(err, result) {
                if(err){
                    res.status(403).json({message: "wrong password."})
                    console.log("wrong password");
                }
                if(result){
                    const token = jwt.sign({id: user._id.toString()}, JWT_SECRET, { expiresIn: '1h' });
                    res.status(200).json({message: "User logged-in", user: user, token: token});
                }
                else{
                    res.status(403).json({message: "wrong password."})
                }
            });
        }
        else{
            res.status(403).json({message: "email is not registered.", user: user});
        }
    }
})

app.get("/todos", verifyToken, async (req, res)=>{
    const userId = req.user.id;
    const TodoList = await TodoModel.find({userId: userId})
    res.status(200).json({message: "all todo fetch easily", todos: TodoList});
})

app.post("/add", verifyToken, async (req, res)=>{
    const userId = req.user.id;
    const description = req.body.description;
    try{
        const newtodo = await TodoModel.create({description: description, userId: userId});
        res.status(200).json({message: "todo Added.", todo: newtodo});
    }catch(err){
        res.status(500).json({message: "fail to add todo."});
    }
})

app.post("/mark", verifyToken, async (req, res)=>{
    const todoId = req.body.todoId;
    try{
        const newtodo = await TodoModel.findByIdAndUpdate(todoId, {done: true});
        res.status(200).json({message: "todo Marked.", todo: newtodo});
    }
    catch(err){
        res.status(500).json({message: "fail to Mark todo."});
    }
})

app.post("/delete", verifyToken, async (req, res)=>{
    const todoId = req.body.todoId;
    try{
        const newtodo = await TodoModel.findByIdAndDelete(todoId, {done: true});
        if(newtodo){
            res.status(200).json({message: "todo Deleted.", todo: newtodo});
        }else{
            res.status(200).json({message: "todo Deleted.", todo: newtodo});
        }
    }
    catch(err){
        res.status(500).json({message: "fail to Delete todo."});
    }
})

app.listen(PORT, (err)=>{
    if(err) console.log("failed Listening");
    else console.log("listening on port: ", PORT);
})
