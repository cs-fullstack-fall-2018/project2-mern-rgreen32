const router = require('./Controllers/api.js');
const express = require('express');
const app = express();
const config = require('./Config/index.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


mongoose.connect(config.getDbConnectionString(),{useNewUrlParser: true}).then(
    ()=>{
        console.log("Successfully connected to the database.")
    },
    err=>{
        console.log("ERROR connecting to the database")
        throw err;
    }
)

app.use(bodyParser.json())

app.use('/', router);

console.log("listening in port 3005")

app.listen(3005);




