const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
require("dotenv").config();
const Confessions = require('./models/confessionSchema')


const app = express();
app.use(cors())


const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//express app


app.get('/confessions', async (req, res) => {
    const confessions = await Confessions.find();
    res.send(confessions)
})


app.get('/confessions/:cat', async (req, res) => {

    const cat = req.params.cat;
    const confessionsRes = await Confessions.find({
        category: cat,
    })

    res.send(confessionsRes)
})



app.get("/new", async (req, res) => {
    const confession = await Confessions.create({
        category: "Dreams",
        body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod architecto, nam voluptas iusto assumenda, ipsa officiis repellat earum aut minus ipsum delectus voluptatibus sunt dicta non, corrupti eos itaque. Aspernatur!
        Qui eligendi maxime odio deleniti ullam, nobis repudiandae sapiente quisquam saepe omnis!vel id saepe velit ullam dicta a, totam, cum minima debitis nostrum neque voluptatem ex voluptate provident dolorum iure corporis quia. Doloribus!`,
        date: new Date(),
        views: 0,
    })
    res.json(confession)
})


app.get('/', (req, res) => {
    res.send({msg: "MAYAYT"})
})

//listen for request
app.listen(4000, () => {
    console.log("SERVER CONNTECTED")
})