const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const ToDOModels = require('./models/ToDOModels');
const { find } = require('./models/ToDOModels');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res)=> {
    res.send('We are in the root folder');
});
app.get('/completed_todos', (req, res)=>{
    res.send("We are completely done");
});
app.post('/', (req, res )=> {
const todo = ToDOModel.create({
    title: req.body.title,
    body: req.body.body,
    status: req.body.status,
    endDate: req.body.endDate
});
 try {
    const createToDo = await todo.save();
 res.json({
     data: createToDo,
     message: "ToDo succeefully created"
 })
 }
 catch (error) {
     res.json({
         message(error)
     })
     //console.app("reer occured")
 }
});

app.get('/todos/', async(req, res)=> {
    try {
        const getToDo = await ToDOModel.find();
        res.json({
            message: 'ToDo successfully retrieved',
            data: getToDo,
        })
    } 
    catch (error) {
        res.json({
            message: console.error()
        });
    }
} )
app.get('/getAPp', (req,res)=>{
    res.send("Waaaw")
});
//connecting database
mongoose.connect(process.env.db_myURL,()=>console.log('Connected successfully'));

//this is the port for listening to
app.listen(process.env.port_num ||2021);

//posing code on githup
//use terminal, type git init
//git add .
// git commit 'name for project'
//git branch -M main
// git remote add origin https://github.com/BKElias/myToDoApp.git
// git push -u origin main