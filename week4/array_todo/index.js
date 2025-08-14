const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.json());
// app.use(express.static('public'));

let todos = [];
let completed = [];

app.get("/all", (req, res)=>{
    res.json({"todos": todos, "completed": completed});
})

app.post("/add", (req, res)=>{
    const tasks = req.body.task;
    tasks.forEach(task => {
        todos.push(task);
    });
    res.status(200).send("item added.");
})

app.put("/edit", (req, res)=>{
    const oldTask = req.body.oldTask;
    const newTask = req.body.newTask;

    todos.forEach((task, ind)=>{
        if(task == oldTask){
            todos[ind] = newTask
        }
    })
    console.log(todos);
    res.status(200).send("task Edited.");
})

app.post("/mark", (req, res)=>{
    const tasks = req.body.tasks;
    tasks.forEach((task)=>{
        if(todos.includes(task)){
            const ind = todos.indexOf(task);
            todos.splice(ind, 1);
        }
        completed.push(task);
    })
    res.status(200).send("item marked.");
})

app.delete("/delete", (req, res)=>{
    const tasks = req.body.tasks;
    tasks.forEach((task)=>{
        if(todos.includes(task)){
            const ind = todos.indexOf(task);
            todos.splice(ind, 1);
        }
        if(completed.includes(task)){
            const ind = completed.indexOf(task);
            completed.splice(ind, 1);
        }
    })
    res.status(200).send("item deleted.");
})

app.listen(PORT, (err)=>{
    if(err) console.log(err);
    console.log("Listening at ",PORT);
})

