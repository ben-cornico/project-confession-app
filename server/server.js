const express = require('express');
const mongoose = require('mongoose')
require("dotenv").config();

mongoose.connect(process.env.CONNECTION_URL, () => {
    console.log("CONNECTED")
})
//express app
const app = express();


app.get('/', (req, res) => {
    res.json({msg: "HELLO WORLD"})
})

//listen for request
app.listen(4000, () => {
    console.log("SERVER CONNTECTED")
})