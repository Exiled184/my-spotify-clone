import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from "axios"
// import sendRequest from "../../utilities/send-request";
import * as playlistAPI from "../../utilities/playlists.api"

export default function Playlist() {
    // state
    const [playlists, setPlaylists] = useState(null);
    const [createForm, setCreateForm] = useState({
        title: ""
    })

    // useEffects
    useEffect(() => {
        fetchPlaylists()
    }, [])

    // functions
    const fetchPlaylists = async () => {
        const res = await axios.get("https:localhost:3000/playlists")
        // const res = await axios.get("https://my-spotify-clone.onrender.com/playlists")
        setPlaylists(res.data.playlists)
        console.log(res)
    }
    // const fetchPlaylists = async () => {
    //     // const fetchedPlaylist = await sendRequest('/api/playlists', 'GET');
    //     try {
    //         const res = await playlistAPI.fetchPlaylists();
    //         setPlaylists(res);
    //     } catch (error) {
    //         console.error("error, no playlists", error)
    //     }
    // }

    const updateCreateFormField = (e) => {
        const { name, value } = e.target
        setCreateForm({
            ...createForm,
            [name]: value,
        })
        console.log({ name })
    }

    const createPlaylist = async (e) => {
        e.preventDefault();
        const res = await axios.post("https:localhost:3000/playlists", createForm)
        // const res = await axios.post("https://my-spotify-clone.onrender.com/playlists", createForm)
        console.log(res)
    }



    return (
        <Container>
            <div>
                <h2>Create Playlist</h2>
                <form onSubmit={createPlaylist}>
                    <input
                        onChange={updateCreateFormField}
                        value={createForm.title}
                        name="title" />


                    <button type="submit">Create Playlist</button>
                </form>

            </div>


            {
                playlists && playlists.map((playlist) => {
                    return (
                        <div key={playlist._id}>
                            <h3>{playlist.title}</h3>
                        </div>
                    )

                })
            }
        </Container >
    )
}

const Container = styled.div`
    
`