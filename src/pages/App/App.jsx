import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser, getSpotifyToken } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import ArtistPage from '../ArtistPage/ArtistPage';
import './App.css';


function App() {
  const [user, setUser] = useState();
  // const [user, setUser] = useState(usersAPI.loginSpotifyUser(hash));
  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route index path="/" element={<Navigate to={"/artist"} />} />
            <Route path="/artist" element={<ArtistPage />} />
          </Routes>
        </>
        :
        <AuthPage user={user} setUser={setUser} />
      }
    </main>
  );
}

export default App;
