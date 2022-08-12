const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const confessionSchema = new Schema(
    {
        category: String,
        body: String,
        date: Date,
        views: Number,
    }
)

module.exports = mongoose.model("confessions", confessionSchema)