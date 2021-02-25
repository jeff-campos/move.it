import React, {useContext} from "react";
import { ChallengeContext } from "src/context/challengesContext";
import { Container } from "./styles";

export default function CompletedChanllenges() {

  const {challengesCompleted} = useContext(ChallengeContext);

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
}
