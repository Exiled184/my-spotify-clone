import { useState } from 'react'
import styled from 'styled-components';
import SearchList from '../../pages/SearchList/SearchList'
import * as artistsAPI from '../../utilities/artists-api'


export default function SearchBar({ setArtists }) {

    const [searchTerm, setSearchTerm] = useState("");


    const searchArtist = async (searchTerm) => {
        const data = await artistsAPI.searchArtist(searchTerm)

        setArtists(data.artists.items)
        console.log(data.artists.items)
    }

    return (
        <Container>
            <div className="SearchBar">
                <form onSubmit={() => searchArtist(searchTerm)}>
                    <input type="text" placeholder='Search Song/Artist' onChange={e => setSearchTerm(e.target.value)} />
                    <button type={"submit"}>Search</button>
                </form>
            </div >
        </Container>
    )
}

const Container = styled.div`
    
`