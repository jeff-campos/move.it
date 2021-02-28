import { createContext, useState, ReactNode, useEffect } from "react";
import Cookies from "js-cookie";

import challenges from "../challenges.json";
import LevelUpModal from "src/components/LevelUpModal";

interface ChallengeProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
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
  isLevelUpModalOpen: boolean;
  closeLevelUpModal: () => void;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

export const ChallengeContext = createContext({} as ChallengeContexData);

export function ChallengeProvider({ children, ...rest }: ChallengeProviderProps) {
  const [level, updateLavel] = useState(rest.level || 1);
  const [currentExperience, updateCurrentExperience] = useState(rest.currentExperience || 0);
  const [challengesCompleted, updateChallengesCompleted] = useState(rest.challengesCompleted || 0);
  const [activeChallenge, updateActiveChallenge] = useState(null);
  const [timesTheCounterHasUpdate, updateTimesTheCounterHasUpdated] = useState(0);
  const [isLevelUpModalOpen, updateIsLevelModalOpen] = useState(false);

  const experinceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    updateLavel(level + 1);
    updateIsLevelModalOpen(true);
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

  function closeLevelUpModal() {
    updateIsLevelModalOpen(false)
  }

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

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
        isLevelUpModalOpen,
        closeLevelUpModal
      }}
    >
      {children}

      <LevelUpModal />
    </ChallengeContext.Provider>
  );
}
