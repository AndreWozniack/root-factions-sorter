// VIEW - Contagem regressiva

import React from "react";
import { Translation } from "../models/i18n";

interface CountdownProps {
  countdown: number;
  t: Translation;
}

export default function Countdown({ countdown, t }: CountdownProps) {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "40px",
      }}
    >
      <div
        key={countdown}
        style={{
          fontSize: "8em",
          fontWeight: "bold",
          color: "#64ffda",
          textShadow: "0 0 40px rgba(100, 255, 218, 0.8)",
          animation: "scaleIn 1s ease-out",
        }}
      >
        {countdown}
      </div>
      <p
        style={{
          color: "#a8b2d1",
          fontSize: "1.5em",
          marginTop: "20px",
        }}
      >
        {t.preparingDraw}
      </p>
    </div>
  );
}
