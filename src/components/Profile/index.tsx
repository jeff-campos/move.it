import React from 'react';

import { Container, Details } from './styles';

export default function Profile() {
  return (
    <Container>
      <img src="http://github.com/jeff-campos.png" alt="Jeff Campos"/>
      <Details>
        <strong>Jeff campos</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1</p>
      </Details>

    </Container>
  )
}