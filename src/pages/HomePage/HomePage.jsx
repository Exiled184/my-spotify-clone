import { useState, useEffect } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Routes, Route, Navigate } from 'react-router-dom';
// import { getUser, getSpotifyToken } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import ArtistPage from '../ArtistPage/ArtistPage';
import css from './HomePage'
import styled from 'styled-components'




export default function HomePage() {

    return (
        <Container>
            <div className="spotify-body">
                <h1>Sidebar</h1>
                <div className="body" >
                    <NavBar />
                    <h1>Content</h1>
                </div>
            </div>
            <div className="spotify-footer">
                <h1>Footer</h1>
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