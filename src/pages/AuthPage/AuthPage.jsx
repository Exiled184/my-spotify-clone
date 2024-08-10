import { useEffect } from 'react';
import * as usersAPI from '../../utilities/users-api';
import styled from 'styled-components';


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

    <Container className="App">
      {!user ?
        <>
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Black.png" alt="Spotify Logo" />
          <a className="button" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            Login to Spotify
          </a>
        </>
        :
        <button onClick={logout}>Logout</button>}

    </Container>

  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
  .button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;