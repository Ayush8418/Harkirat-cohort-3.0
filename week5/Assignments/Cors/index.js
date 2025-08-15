const express = require('express');
const cors = require("cors");

const app = express();

app.use(express.json())
// -----this line allows all the websites to fetch data and send request to this server
// app.use(cors());               
// -----this line allows limited the websites to fetch data and send request to this server
app.use(cors({
    origin: 'http://localhost:55463', // Specific allowed site
    methods: 'GET,POST,PUT,DELETE',  // Allowed methods
    credentials: true                // If you want to allow cookies/auth headers
}));                                  


app.post("/post", (req, res)=>{
    console.log("got POST Request: ",req.body)
    res.json({"your post" : req.body.post});
})

app.listen(3000, ()=>{
    console.log("listening on 3000");
})