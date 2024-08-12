import { useState, useEffect } from 'react'

import { Routes, Route, Navigate } from 'react-router-dom';
// import { getUser, getSpotifyToken } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';

import ArtistPage from '../ArtistPage/ArtistPage';
import css from './HomePage'


import styled from 'styled-components'

import SideBar from '../../pages/SideBar/SideBar';
import SearchBar from '../../components/SearchBar/SearchBar'
import MusicControls from '../MusicControls/MusicControls';
import SearchList from '../SearchList/SearchList';





export default function HomePage() {

  // let token = window.localStorage.getItem("token")
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  return (
    <Container>
      <div className="spotify-body">
        <SideBar />
        <div className="body" >
          <SearchBar setArtists={setArtists} setTracks={setTracks} />
          <SearchList artists={artists} tracks={tracks} />
        </div>
      </div>
      <div className="spotify-footer">
        <MusicControls />
      </div>

    </Container>

  )


}


const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .spotify-body {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
    .body {
      height: 100%;
      width: 100%;
      overflow: auto;
      /* &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
        &-thumb {
          background-color: rgba(255, 255, 255, 0.6);
        }
      } */
    }
  }
`;



// export default function HomePage() {
//     const [user, setUser] = useState();
//     const [searchKey, setSearchKey] = useState("");
//     const [artists, setArtists] = useState([]);
//     const [tracks, setTracks] = useState([]);
//     const [user, setUser] = useState(usersAPI.loginSpotifyUser(hash));

//     return (
//         <main className="App">

//             {user ?
//                 <>
//                     <NavBar
//                         user={user} setUser={setUser} />

//                     <Routes>
//                         {/* Route components in here */}
//                         <Route index path="/" element={<Navigate to={"/home"} />} />
//                         <Route path="/home" element={<HomePage />} />
//                         <Route path="/artist" element={<ArtistPage />} />
//                     </Routes>
//                 </>
//                 :
//                 <AuthPage user={user} setUser={setUser} />
//             }
//         </main >
//     );
// }