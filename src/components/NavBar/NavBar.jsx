import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import SearchBar from '../SearchBar/SearchBar';

export default function NavBar({ user, setUser, searchKey, setSearchKey, artists, setArtists, tracks, setTracks }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav>
      <Link to="/home">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/artist">Artist</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.display_name}</span>
      &nbsp; | &nbsp;

      <SearchBar
        searchKey={searchKey} setSearchKey={setSearchKey}
        artists={artists} setArtists={setArtists}
        tracks={tracks} setTracks={setTracks} />

      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}