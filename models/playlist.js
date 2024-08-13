const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    title: String,

})

const Playlist = mongoose.model("Playlist",playlistSchema)

module.exports = Playlist;