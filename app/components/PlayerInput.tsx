// VIEW - Input de jogadores

import React from "react";
import { Translation } from "../models/i18n";

interface PlayerInputProps {
  value: string;
  onChange: (value: string) => void;
  t: Translation;
}

export default function PlayerInput({ value, onChange, t }: PlayerInputProps) {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: "16px",
        padding: "24px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <h3
        style={{
          color: "#64ffda",
          marginBottom: "16px",
          fontSize: "1.3em",
        }}
      >
        {t.playersLabel}
      </h3>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={10}
        style={{
          width: "100%",
          padding: "16px",
          boxSizing: "border-box",
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(100, 255, 218, 0.3)",
          borderRadius: "12px",
          color: "#fff",
          fontSize: "1em",
          fontFamily: "inherit",
          resize: "vertical",
        }}
        placeholder={t.playersPlaceholder}
      />
    </div>
  );
}
