import React, { useContext } from "react";
import { ChallengeContext } from "src/context/challengesContext";

import {
  Container,
  BoxNoActiveChallenge,
  BoxActiveChallenge,
  Button,
} from "./styles";

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);

  return (
    <Container>
      {activeChallenge ? (
        <BoxActiveChallenge>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="icone" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <Button styleType="failed" type="button" onClick={resetChallenge}>
              Falhei
            </Button>
            <Button styleType="succeeded" type="button" onClick={completeChallenge}>
              Completei
            </Button>
          </footer>
        </BoxActiveChallenge>
      ) : (
        <BoxNoActiveChallenge>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </BoxNoActiveChallenge>
      )}
    </Container>
  );
}
