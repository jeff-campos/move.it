import { createContext, useState, ReactNode } from "react";

import challenges from "../challenges.json";

interface ChallengeProviderProps {
  children: ReactNode;
}

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengeContexData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experinceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void
}

export const ChallengeContext = createContext({} as ChallengeContexData);

export function ChallengeProvider({ children }: ChallengeProviderProps) {
  const [level, updateLavel] = useState(1);
  const [currentExperience, updateCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, updateActiveChallenge] = useState(null);

  const experinceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    updateLavel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    updateActiveChallenge(challenge);
  }

  function resetChallenge() {
    updateActiveChallenge(null)
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        activeChallenge,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        resetChallenge,
        experinceToNextLevel
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}
