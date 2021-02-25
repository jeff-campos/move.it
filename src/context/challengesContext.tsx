import { createContext, useState, ReactNode, useEffect } from "react";

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
  timesTheCounterHasUpdate: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

export const ChallengeContext = createContext({} as ChallengeContexData);

export function ChallengeProvider({ children }: ChallengeProviderProps) {
  const [level, updateLavel] = useState(1);
  const [currentExperience, updateCurrentExperience] = useState(0);
  const [challengesCompleted, updateChallengesCompleted] = useState(0);
  const [activeChallenge, updateActiveChallenge] = useState(null);
  const [timesTheCounterHasUpdate, updateTimesTheCounterHasUpdated] = useState(
    0
  );

  const experinceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    updateLavel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    updateActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {

      new Notification("Novo desafio :D", {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
  }

  function resetChallenge() {
    updateActiveChallenge(null);
    updateTimesTheCounterHasUpdated(timesTheCounterHasUpdate + 1);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;
    let finalExperince = currentExperience + amount;

    if (finalExperince >= experinceToNextLevel) {
      finalExperince = finalExperince - experinceToNextLevel;
      levelUp();
    }

    updateCurrentExperience(finalExperince);
    updateActiveChallenge(null);
    updateChallengesCompleted(challengesCompleted + 1);
    updateTimesTheCounterHasUpdated(timesTheCounterHasUpdate + 1);
  }

  useEffect(() => {
    Notification.requestPermission();
  }, []);

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
        experinceToNextLevel,
        completeChallenge,
        timesTheCounterHasUpdate,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}
