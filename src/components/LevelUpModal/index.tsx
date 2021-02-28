import React, { useContext } from "react";
import { ChallengeContext } from "src/context/challengesContext";

import { Wrapper, Container } from "./styles";

export default function LevelUpModal() {
  const { level, isLevelUpModalOpen, closeLevelUpModal } = useContext(ChallengeContext);

  return (
    <Wrapper isOpen={isLevelUpModalOpen}>
      <Container>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </Container>
    </Wrapper>
  );
}
