//Library imports
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const path = require('path')
//Local imports
const mongoose = require('./../server/database/mongoose');
const Todo = require('./../server/database/models/todo');
const User = require('./../server/database/models/users');

var PORT = process.env.PORT || 3000
var app = express();

app.use(express.static(path.join(__dirname, 'public')));


// app.get("/", (req,res) => {
//     res.send("<h1>Hello There</h1>")
// })

app.listen(3000, () => console.log(`Server is listening on port ${PORT}`));