import { useState } from 'react'
import styled from 'styled-components';
import * as artistsAPI from '../../utilities/artists-api'


export default function SearchBar({ setArtists, setTracks }) {

    const [searchTerm, setSearchTerm] = useState("");


    const search = async (searchTerm) => {
        const data = await artistsAPI.searchArtist(searchTerm)
        const trackData = await artistsAPI.searchTrack(searchTerm)
        setArtists(data.artists.items)
        console.log(data.artists.items)
        setTracks(trackData.tracks.items)
        console.log(trackData.tracks.items)
    }



    return (
        <Container>
            <div className="SearchBar">
                <form onSubmit={() => search(searchTerm)}>
                    <input type="text" placeholder='Search Song/Artist' onChange={e => setSearchTerm(e.target.value)} />
                    <button type={"submit"}>Search</button>
                </form>
            </div >
        </Container>
    )
}

const Container = styled.div`
    
`