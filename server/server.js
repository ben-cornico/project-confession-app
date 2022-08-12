const express = require('express');
require("dotenv").config();
const Confessions = require('./models/confessionSchema')


const app = express();

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true , useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//express app


app.get('/', (req, res) => {
    res.json({msg: "HELLO WORLD"})
})

app.get("/new", async (req, res) => {
    const confession = await Confessions.create({
        category: "Dream",
        body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod architecto, nam voluptas iusto assumenda, ipsa officiis repellat earum aut minus ipsum delectus voluptatibus sunt dicta non, corrupti eos itaque. Aspernatur!
        Qui eligendi maxime odio deleniti ullam, nobis repudiandae sapiente quisquam saepe omnis! Dolorum natus incidunt, maxime, optio iure doloribus adipisci, porro dolores nostrum eos exercitationem obcaecati ea voluptas fugit officiis?
        Deserunt accusantium delectus tempora, autem itaque sed impedit vel id saepe velit ullam dicta a, totam, cum minima debitis nostrum neque voluptatem ex voluptate provident dolorum iure corporis quia. Doloribus!`,
        date: new Date(),
        views: 0,
    })
    console.log(confession)
    res.json(confession)
})

//listen for request
app.listen(4000, () => {
    console.log("SERVER CONNTECTED")
})