import { useState } from 'react'
import axios from 'axios';


export default function SearchBar() {
    const [searchKey, setSearchKey] = useState("");
    const [artists, setArtists] = useState([]);
    const [track, setTracks] = useState([]);

    const searchArtist = async (e) => {
        let token = window.localStorage.getItem("token")
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist",
            },
        })
        setArtists(data.artists.items)
        console.log(data.artists.items)
    }

    const searchTrack = async (e) => {
        let token = window.localStorage.getItem("token")
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "track",
            },
        })
        setTracks(data.tracks.items)
        console.log(data.tracks.items)
    }

    const search = (e) => {
        e.preventDefault();
        searchArtist();
        searchTrack();
    }


    return (

        <div className="SearchBar">
            <form onSubmit={search}>
                <input type="text" onChange={e => setSearchKey(e.target.value)} />
                <button type={"submit"}>Search</button>
            </form>
        </div >

    )
}