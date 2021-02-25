import React from "react";

import { Container, BoxNoActiveChallenge, BoxActiveChallenge, Button } from "./styles";

export default function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <Container>
      {hasActiveChallenge ? (
        <BoxActiveChallenge>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="icone bodt" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>

          <footer>
            <Button styleType="failed" type="button">Falhei</Button>
            <Button styleType="succeeded" type="button">Completei</Button>
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
