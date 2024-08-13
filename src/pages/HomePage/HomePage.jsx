import { useState, useEffect } from 'react'

import { Routes, Route, Navigate } from 'react-router-dom';
// import { getUser, getSpotifyToken } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import css from './HomePage'


import styled from 'styled-components'

import SideBar from '../../pages/SideBar/SideBar';
import SearchBar from '../../components/SearchBar/SearchBar'
import MusicControls from '../MusicControls/MusicControls';
import SearchList from '../SearchList/SearchList';
import Playlist from '../Playlist/Playlist';


// import { Routes, Route } from 'react-router-dom'


export default function HomePage() {

  // let token = window.localStorage.getItem("token")
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  return (
    <Container>
      <div className="spotify-body">
        <SideBar />
        <div >
          <SearchBar className="spotify-search" setArtists={setArtists} setTracks={setTracks} />
          <Routes >
            <Route path="/" element={<SearchList artists={artists} tracks={tracks} />} />
            <Route path="/playlists" element={<Playlist />} />
          </Routes>
        </div>
      </div>
      <div className="spotify-footer">
        <MusicControls />
      </div>

    </Container >
  )

}


const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .spotify-body{
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
    overflow:auto;
      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
        &-thumb {
          background-color: rgba(255, 255, 255, 0.6); 
        }
      }}
`;

