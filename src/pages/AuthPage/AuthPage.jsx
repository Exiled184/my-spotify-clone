import { useState, useEffect } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';


export default function AuthPage({setUser}) {
  const CLIENT_ID = "2ab70426920c4ddb8c114b0979645c3b";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {

    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      token = hash.substring(1).split("&").find(element => element.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token",token)
    }
    setToken(token)
  }, [])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  return (

    <div className="App">
      <header className="App-header">
        <h1>Login</h1>

        {!token ? 
        <a href ={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
          Login to Spotify
        </a>
        : 
        <button onClick={logout}>Logout</button>}
  


      </header>
    </div>

  );
}








// export default function AuthPage({ setUser }) {
//   const [showSignUp, setShowSignUp] = useState(false);
//   return (
//     <main>
//       <h1>AuthPage</h1>
//       <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
//       { showSignUp ?
//           <SignUpForm setUser={setUser} />
//           :
//           <LoginForm setUser={setUser} />
//       }
//     </main>
//   );
// }