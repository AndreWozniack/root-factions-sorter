// VIEW - Tabela de referência das facções

import React from "react";
import { FACTIONS } from "../models/factions";
import { Translation } from "../models/i18n";

interface FactionReferenceProps {
  t: Translation;
}

export default function FactionReference({ t }: FactionReferenceProps) {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: "16px",
        padding: "24px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        marginBottom: "30px",
      }}
    >
      <h3
        style={{
          color: "#ffd700",
          marginBottom: "16px",
          fontSize: "1.3em",
          textAlign: "center",
        }}
      >
        {t.factionReference}
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        {FACTIONS.map((faction) => (
          <div
            key={faction.id}
            style={{
              padding: "10px 16px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <span style={{ color: "#fff", fontSize: "0.95em" }}>
              {t.factionNames[faction.id]}
            </span>
            <span
              style={{
                color: "#64ffda",
                fontWeight: "bold",
                fontSize: "1em",
              }}
            >
              {faction.reach}
            </span>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", color: "#a8b2d1", fontSize: "0.9em" }}>
        <strong>{t.minReachByPlayers}:</strong> 2 {t.players}: 17+ | 3{" "}
        {t.players}: 18+ | 4 {t.players}: 21+ | 5 {t.players}: 25+ | 6{" "}
        {t.players}: 28+
      </div>
    </div>
  );
}
