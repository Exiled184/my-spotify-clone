// Serice modules hold the code that implements
// "business"/application logic
// Service methods often depend upon or use
// methods in the API modules

// Import all named exports
import * as usersAPI from './users-api';

// export async function signUp(userData) {
//   // Delegate the AJAX request to the users-api.js
//   // module.
//   const token = await usersAPI.signUp(userData);
//   localStorage.setItem('token', token);
//   return getUser();
// }

export function getSpotifyToken(hash) {
if (!hash) return
  // check if there is a token needed to log in to Spotify
  let token = window.localStorage.getItem("token")
  // get the token from the hash
  if (!token) {
   token = loginSpotify(hash)
  }
  return token;
}

export function loginSpotify(hash) {
  const token = hash.substring(1).split("&").find(element => element.startsWith("access_token")).split("=")[1]
  localStorage.setItem('token', token);
  return token
}

  // export function getSpotifyUser() {
  //   const token = getSpotifyToken();
  //   // need to send a request to spotify to get my user information
  //   usersAPI.getSpotifyUser()
  // }


export function getToken() {
  // getItem will return null if the key does not exist
  const token = localStorage.getItem('token');
  if (!token) return null;
  // Let's check if token has expired...
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ?
    JSON.parse(atob(token.split('.')[1])).user
    :
    null;
}

export function logOut() {
  localStorage.removeItem('token');
}

// export async function login(credentials) {
//   // Delegate the AJAX request to the users-api.js
//   // module.
//   const token = await usersAPI.login(credentials);
//   localStorage.setItem('token', token);
//   return getUser();
// }

// export function checkToken() {
//   return usersAPI.checkToken()
//     .then(dateStr => new Date(dateStr));
// }