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

confessionSchema.index({ category: "text", body: "text" });

module.exports = mongoose.model("confessions_collection", confessionSchema)