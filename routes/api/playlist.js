const express = require('express')
const playlistController = require('../../controllers/api/playlistController')
const router = express.Router()


// Routing  for playlist

router.get('/', playlistController.fetchPlaylists )

router.post('/', playlistController.createPlaylist)

router.get('/:id', playlistController.fetchPlaylist)

router.put('/:id', playlistController.updatePlaylist)

router.delete('/:id', playlistController.deletePlaylist)

module.exports = router;