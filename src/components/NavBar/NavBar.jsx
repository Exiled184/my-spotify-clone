import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import styled from 'styled-components';


export default function NavBar(user, setUser) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <Container>
      <span>Welcome, {user.display_name}</span>
      &nbsp; | &nbsp;
      <Link to="/home">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/artist">Artist</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
      &nbsp; | &nbsp;

    </Container>
  );
}

const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`