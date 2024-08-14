import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from "axios"
// import sendRequest from "../../utilities/send-request";
// import * as playlistAPI from "../../utilities/playlists.api"

export default function Playlist() {
    // state
    const [playlists, setPlaylists] = useState(null);
    const [createForm, setCreateForm] = useState({
        title: "",
    })
    const [updateForm, setUpdateForm] = useState({
        _id: null,
        title: "",
    })

    // useEffects
    useEffect(() => {
        fetchPlaylists()
    }, [])

    // functions
    const fetchPlaylists = async () => {
        const res = await axios.get("http://localhost:3000/api/playlists")
        // const res = await axios.get("https://my-spotify-clone.onrender.com/api/playlists")
        setPlaylists(res.data.playlists)
    }


    const updateCreateFormField = (e) => {
        const { name, value } = e.target

        setCreateForm({
            ...createForm,
            [name]: value,
        })
    }

    const createPlaylist = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:3000/api/playlists", createForm)
        // const res = await axios.post("https://my-spotify-clone.onrender.com/api/playlists", createForm)
        setPlaylists([...playlists, res.data.playlist])
        setCreateForm({ title: "" })
    }

    const deletePlaylist = async (_id) => {
        const res = await axios.delete(`http://localhost:3000/api/playlists/${_id}`)
        // const res = await axios.delete(`https://my-spotify-clone.onrender.com/api/playlists/${_id}`)
        const newPlaylist = [...playlists].filter((playlist) => {
            return playlist._id !== _id;
        });
        setPlaylists(newPlaylist)
    }

    const handleUpdateFieldChange = (e) => {
        const { value, name } = e.target

        setUpdateForm({
            ...updateForm,
            [name]: value
        })
    }

    const toggleUpdate = (playlist) => {
        setUpdateForm({ title: playlist.title, _id: playlist._id })

    }

    const updatePlaylist = async (e) => {
        e.preventDefault();

        const { title } = updateForm;
        const res = await axios.put(`http://localhost:3000/api/playlists/${updateForm._id}`, { title });
        // const res = await axios.put(`https://my-spotify-clone.onrender.com/api/playlists/${updateForm._id}`, { title });
        const newPlaylists = [...playlists];
        const playlistIndex = playlists.findIndex((playlist) => {
            return playlist._id === updateForm._id;
        })
        console.log(res.data.playlist)
        newPlaylists[playlistIndex] = res.data.playlist;
        setPlaylists(newPlaylists);

        setUpdateForm({
            _id: null,
            title: "",
        })
    }
    return (
        <Container>
            {!updateForm._id && (

                <div>
                    <h2>Create Playlist</h2>
                    <form
                        onSubmit={createPlaylist}>
                        <input
                            onChange={updateCreateFormField}
                            value={createForm.title}
                            name="title" />
                        <button
                            type="submit">Create Playlist</button>
                    </form>
                </div>
            )}


            {updateForm._id && (
                <div>
                    <h2>Update playlist</h2>
                    <form onSubmit={updatePlaylist}>
                        <input
                            onChange={handleUpdateFieldChange}
                            name="title"
                            value={updateForm.title}
                        />
                        <button type="submit">Update Playlist</button>
                    </form>
                </div>
            )
            }

            <div className="playlist">
                <h2>Playlists:</h2>
                {
                    playlists && playlists.map((playlist) => {
                        return (
                            <div key={playlist._id}>
                                <h3>{playlist.title}</h3>
                                <button onClick={() => deletePlaylist(playlist._id)}>
                                    Delete Playlist</button>
                                <button onClick={() => toggleUpdate(playlist)}>
                                    Update Playlist </button>
                            </div>
                        )

                    })
                }
            </div>
        </Container >
    )
}

const Container = styled.div`
color: white;
    .playlist{
        /* display: flex;
        flex-direction: column; */
    }
`