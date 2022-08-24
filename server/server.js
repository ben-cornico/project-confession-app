const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios')
require("dotenv").config();
const Confessions = require('./models/confessionSchema')


const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//express app


app.get('/confessions/search', async (req, res) => {
    const searchString = req.query.search;
    const confession = await Confessions.find({
        $text: { $search: searchString },
    })

    res.send(confession)
})

app.get('/confessions', async (req, res) => {
    const confessions = await Confessions.find();
    res.send(confessions)
})


app.get('/confessions/:cat', async (req, res) => {
    console.log(req.params)
    const cat = req.params.cat;
    const confessionsRes = await Confessions.find({
        category: cat,
    })
    res.send(confessionsRes)
})

app.post("/confess", async (req, res) => {
    const { cat, body } = req.body;
    if(res.status(200)) {
        const confession = await Confessions.create({
            category: cat,
            body: body,
            date: new Date(),
            views: 0,
        })
        res.json(confession)
    } else {
        res.send("ROBOT")
    }
})


app.get('/', (req, res) => {
    res.send({msg: "MAYAYT"})
})

//listen for request
app.listen(4000, () => {
    console.log("SERVER CONNTECTED")
})