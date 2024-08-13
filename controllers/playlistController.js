const Playlist = require('../models/playlist')

const fetchPlaylists = async (req,res) => {
  const playlists = await Playlist.find()
  res.json({playlists : playlists})
}

const fetchPlaylist = async (req,res) => {
    const playlistID = req.params.id;
    const playlist = await Playlist.findById(playlistID)
    res.json({playlist: playlist})
  }

const createPlaylist = async (req,res) => {
    const title = req.body.title;
    const playlist = await Playlist.create({
      title: title
    });
    res.json({playlist: playlist})
  }

const updatePlaylist = async (req, res) => {
    const playlistID = req.body.id;
  
    const title = req.body.title;
  
    await Playlist.findByIdAndUpdate(playlistID, {
      title: title,
    })
    const playlist = await Playlist.find(playlistID)
    res.json({playlist: playlist})
  }

const deletePlaylist = async (req,res) => {
    const playlistID = req.params.id
    await Playlist.deleteOne({id: playlistID})
  
    res.json({succes: "Playlist Deleted"})
  }

  module.exports = {
    fetchPlaylists,
    fetchPlaylist,
    createPlaylist,
    updatePlaylist,
    deletePlaylist
  }