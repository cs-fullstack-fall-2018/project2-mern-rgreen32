const blog = require('../Model/dbModel');
const moment = require('moment')

const express = require('express');

const router = express.Router();

router.get('/getAll', (req, res) => {
    blog.find().then((items)=>res.send(items))
});

router.post("/send", (req, res) => {
    const newDeed = new blog({
        UserName: req.body.UserName,
        Title: req.body.Title,
        JournalEntry: req.body.JournalEntry,
        Date: new Date()
    })

        newDeed.save().then(()=> res.send("Hes hree!!!"))


})

module.exports = router