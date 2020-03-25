//for at lave en aktiv localhost
//localhost:696969

const express = require('express')
const app = express();

app.get('/', function(req,res){
    res.send('hello world')
});

app.listen(696969)