var express = require('express')
const playlistController = require('../controllers/playlistController')
var router = express.Router()


// Routing  for playlist

router.get('/playlists', playlistController.fetchPlaylists )

router.get('playlists/:id', playlistController.fetchPlaylist)

router.post('/playlists', playlistController.createPlaylist)

router.put('/playlists/:id', playlistController.updatePlaylist)

router.delete('/playliss/:id', playlistController.deletePlaylist)

module.exports = router;