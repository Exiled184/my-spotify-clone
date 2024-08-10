import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import SearchBar from '../SearchBar/SearchBar';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav>
      <Link to="/artist">Artist</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.display_name}</span>
      &nbsp; | &nbsp;

      <SearchBar />
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}