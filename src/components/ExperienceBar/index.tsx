import { useContext } from "react";
import { ChallengeContext } from "src/context/challengesContext";
import { Container, CurrentExperience } from "./styles";

const ExperienceBar = () => {
  const { currentExperience, experinceToNextLevel } = useContext(
    ChallengeContext
  );

  const porcentToNextLevel = Math.round(currentExperience * 100) / experinceToNextLevel;

  return (
    <Container>
      <span>0 XP</span>
      <div>
        <div style={{ width: `${porcentToNextLevel}%` }} />
        <CurrentExperience style={{ left: `${porcentToNextLevel}%` }}>
          {currentExperience} XP
        </CurrentExperience>
      </div>
      <span>{experinceToNextLevel} XP</span>
    </Container>
  );
};

export default ExperienceBar;
