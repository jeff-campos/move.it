import React, {useContext} from "react";
import { ChallengeContext } from "src/context/challengesContext";

import { Container, Details } from "./styles";

export default function Profile() {
  const {level} = useContext(ChallengeContext)
  return (
    <Container>
      <img src="http://github.com/jeff-campos.png" alt="Jeff Campos" />
      <Details>
        <strong>Jeff campos</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </Details>
    </Container>
  );
}
