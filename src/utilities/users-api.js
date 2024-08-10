// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
import { getSpotifyToken } from './users-service';
import axios from 'axios'

const BASE_URL = '/api/users';


export async function loginSpotifyUser(hash){
  const token = getSpotifyToken(hash)
  const {data} = await axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`
    },
  })
  return data ? data: null;
}