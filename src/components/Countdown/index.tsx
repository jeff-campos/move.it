import React, { useState, useEffect } from "react";

import { PanelCountdown, Container, ButtonCountdown } from "./styles";

export default function Countdown() {
  const [time, updateTime] = useState(25 * 60);
  const [active, updateActive] = useState(false);

  const minute = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minute).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    updateActive(!active);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        updateTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

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
      <ButtonCountdown type="button" onClick={startCountdown} status={active}>
        {`${active ? "Parar" : "Iniciar"} ciclo`}
      </ButtonCountdown>
    </Container>
  );
}
