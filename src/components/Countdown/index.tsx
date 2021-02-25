import React, { useState, useEffect, useContext } from "react";
import { ChallengeContext } from "src/context/challengesContext";

import { PanelCountdown, Container, Button } from "./styles";

let initialTime = 0.1 * 60;
let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {
  const { startNewChallenge, timesTheCounterHasUpdate } = useContext(
    ChallengeContext
  );

  const [time, updateTime] = useState(initialTime);
  const [isActive, updateIsActive] = useState(false);
  const [isFinished, updateIsFinished] = useState(false);

  const minute = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minute).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function handleCountdownButton(status: boolean) {
    if (status) {
      updateTime(initialTime);
    } else {
      clearTimeout(countdownTimeout);
    }

    updateIsActive(status);
  }

  function resetCountdown() {
    updateTime(initialTime);
    updateIsActive(false);
    updateIsFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        updateTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      updateIsFinished(true);
      startNewChallenge();
    }
  }, [isActive, time]);

  useEffect(() => {
    if (timesTheCounterHasUpdate > 0) {
      resetCountdown();
    }
  }, [timesTheCounterHasUpdate]);

  return (
    <Container>
      <PanelCountdown>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </PanelCountdown>

      {/** Botão de controle Countdown */}

      <Button
        type="button"
        status={isActive}
        preview={!isFinished}
        onClick={() => handleCountdownButton(!isActive)}
      >
        {`${isActive ? "abandonar" : "iniciar"} ciclo`}
      </Button>

      {/** Botão de finalização */}

      <Button type="button" status disabled preview={isFinished}>
        ciclo encerrado
      </Button>
    </Container>
  );
}
