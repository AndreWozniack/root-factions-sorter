// VIEW - Cabeçalho

import React from "react";
import { Translation } from "../models/i18n";

interface HeaderProps {
  t: Translation;
}

export default function Header({ t }: HeaderProps) {
  return (
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
      <h1
        style={{
          fontSize: "3em",
          color: "#fff",
          marginBottom: "10px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        {t.title}
      </h1>
      <p style={{ color: "#a8b2d1", fontSize: "1.1em" }}>{t.subtitle}</p>
    </div>
  );
}
