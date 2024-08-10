import { useState, useEffect } from 'react';
// import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import LoginForm from '../../components/LoginForm/LoginForm';
import * as usersAPI from '../../utilities/users-api';


export default function AuthPage({ user, setUser }) {
  const CLIENT_ID = "2ab70426920c4ddb8c114b0979645c3b";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";


  useEffect(function () {
    async function loginSpotify() {
      const hash = window.location.hash
      if (hash) {
        const profile = await usersAPI.loginSpotifyUser(hash)
        setUser(profile)
      }
    }
    loginSpotify();
  }, []);


  const logout = () => {
    window.localStorage.removeItem("token")
  }

  return (

    <div className="App">
      <header className="App-header">
        <h1>Spotify</h1>

        {!user ?
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            Login to Spotify
          </a>
          :
          <button onClick={logout}>Logout</button>}

      </header>
    </div>

  );
}

