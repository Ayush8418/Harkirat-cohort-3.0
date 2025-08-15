const express = require('express');
const app = express();
const path = require('path');
const fs = require("fs");
const { json } = require('stream/consumers');

const PORT = 3000;

app.use(express.json());
// app.use(express.static('public'));

app.get("/all", (req, res)=>{
    const user = req.query.name;
    fs.readFile("a.txt", "utf8", (err, data)=>{
        if(err){
            console.log(err);
            res.send("error while reading file");
        } 
        const fileData = JSON.parse(data);
        const todos = [];
        const completed = [];
        fileData[user].forEach(task => {
            if(task.done == false){
                todos.push(task);
            }else{
                completed.push(task);
            }
        });
        res.json({"todos":todos, "completed": completed});
    })
})

app.post("/add", (req, res)=>{
    const user = req.query.name;
    const task = req.body.task;
    fs.readFile("a.txt", "utf8", (err, data)=>{
        if(err){
            console.log(err);
            res.send("error while reading file");
        }
        
        let fileData = JSON.parse(data);
        fileData[user] = [...fileData[user], {task: task, done: false}];

        const newData = JSON.stringify(fileData);

        fs.writeFile("a.txt", newData, (err)=>{
            console.log(err);
        })

        res.send("task added");
    })
})

app.post("/mark", (req, res)=>{
    const user = req.query.name;
    let task = req.body.task;
    fs.readFile("a.txt", "utf8", (err, data)=>{
        if(err){
            console.log(err);
            res.send("error while reading file");
        }

        let fileData = JSON.parse(data);
        fileData[user].forEach(currtask =>{
            if(currtask.task === task){
                currtask.done = true;
            }
        });

        const newData = JSON.stringify(fileData);

        fs.writeFile("a.txt", newData, (err)=>{
            console.log(err);
        })

        res.send("task marked");
    })
})

app.listen(PORT, (err)=>{
    if(err) console.log(err);
    console.log("Listening at ",PORT);
})

