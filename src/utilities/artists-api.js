import axios from "axios"

export async function searchArtist(artist) {
const { data } = await axios.get("https://api.spotify.com/v1/search", {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    params: {
        q: artist,
        type: "artist",
    },
})
    return data
}

export async function searchTrack(track) {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        params: {
            q: track,
            type: "track",
        },
    })
        return data
    }
