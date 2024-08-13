import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from "axios"


export default function Playlist() {
    const [playlists, setPlaylists] = useState(null);

    // useEffect(() => {
    //     fetchPlaylists()
    // }, [])

    const fetchPlaylists = async () => {

        const res = await axios.get("https:localhost:3000/playlists")
        // const res = await axios.get("https://my-spotify-clone.onrender.com/playlists")
        setPlaylists(res.data.playlists)
        console.log(res)
    }
    return (
        <Container>
            <h2>fair dinkum</h2>
            {/* {playlists && playlists.map(playlist => {
                return (
                    <div key={playlist._id}>
                        <h3>{playlist.title}</h3>
                    </div>
                )

            })} */}
        </Container>
    )
}

const Container = styled.div`
    
`