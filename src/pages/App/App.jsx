import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { getUser, getSpotifyToken } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage'
import styled from 'styled-components';


function App() {
  const [user, setUser] = useState();
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  // const [user, setUser] = useState(usersAPI.loginSpotifyUser(hash));
  return (
    <main className="App">

      {user ?


        <HomePage />
        :
        <AuthPage user={user} setUser={setUser} />

      }
    </main >
  );
}

export default App;


