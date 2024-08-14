import sendRequest from "./send-request";

const BASE_URL ='/api/playlists';

export function fetchPlaylists(){  
    return sendRequest(BASE_URL,'GET')
}