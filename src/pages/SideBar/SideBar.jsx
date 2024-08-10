import styled from "styled-components"

import NavBar from "../../components/NavBar/NavBar"



export default function SideBar() {

    return (
        <Container>
            <div className="navigation">
                <div className="logo">
                    <img
                        src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png"
                        alt="Spotify"
                    />
                </div>
                <NavBar />
            </div>
        </Container >
    )
}


const Container = styled.div`
    background: black;
    color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    width:100%;
    .navigation{
        display:flex;
        flex-direction: column;
    }
    .logo{
        text-align: center;
        margin: 1 rem 0;
        img {
            max-inline-size: 80%;
            block-size: auto;
        }
    }
`