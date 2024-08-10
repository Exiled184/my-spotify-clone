import { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import SearchList from '../../pages/SearchList/SearchList'

export default function SearchBar() {
    let token = window.localStorage.getItem("token")
    // const [search, setSearch] = useState([]);

    const [artists, setArtists] = useState([]);
    // const [tracks, setTracks] = useState([]);


    // get request using search to get the Artist ID

    // const searchAll = async (e) => {
    //     const { data } = await axios.get("https://api.spotify.com/v1/search", {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         },
    //         params: {
    //             q: search,
    //             type: "artist"
    //         },
    //         params: {
    //             q: search,
    //             type: "track"
    //         }
    //     })
    //     setSearch(data)
    //     console.log(data)
    // }

    const searchArtist = async (e) => {
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: artists,
                type: "artist",
            },
        })
        setArtists(data.artists.items)
        console.log(data.artists.items)
    }

    // const searchTrack = async (e) => {
    //     const { data } = await axios.get("https://api.spotify.com/v1/search", {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         },
    //         params: {
    //             q: search,
    //             type: "track",
    //         },
    //     })
    //     setTracks(data.tracks.items)
    //     console.log(data.tracks.items)
    // }

    // const searchAll = (e) => {
    //     e.preventDefault();
    //     searchArtist();
    //     searchTrack();
    // }


    return (
        <Container>
            <div className="SearchBar">
                <form onSubmit={searchArtist}>
                    <input type="text" placeholder='Search Song/Artist' onChange={e => setArtists(e.target.value)} />
                    <button type={"submit"}>Search</button>
                </form>
            </div >
            <SearchList artist={artists} setArtists={setArtists} />
        </Container>
    )
}

const Container = styled.div`
    
`