import styled from 'styled-components';
import { useState } from 'react'
import { } from 'react-icons/io5'

export default function PlayerControls() {
    const { stateControl, setStateControl } = { useState }

    return (

        <Container>

            <div className="shuffle">
                shuffle
            </div>
            <div className="previous">
                previous
            </div>
            <div className="play/pause">
                {stateControl ? <hello /> : <hello />}
            </div>
            <div className="forward">
                forward
            </div>
            <div className="repeat">
                repeat
            </div>


        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  svg {
    color: #b3b3b3;
    transition: 0.2s ease-in-out;
    &:hover {
      color: white;
    }
  }
  .state {
    svg {
      color: white;
    }
  }
  .previous,
  .next,
  .state {
    font-size: 2rem;
  }
`;