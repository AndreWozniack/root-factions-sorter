// VIEW - Seletor de facções

import React from "react";
import { FACTIONS, type FactionId } from "../models/factions";
import { Translation } from "../models/i18n";

interface FactionSelectorProps {
  selectedFactions: FactionId[];
  onToggle: (factionId: FactionId) => void;
  onSelectAll: () => void;
  onDeselectAll: () => void;
  t: Translation;
}

export default function FactionSelector({
  selectedFactions,
  onToggle,
  onSelectAll,
  onDeselectAll,
  t,
}: FactionSelectorProps) {
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h3
          style={{
            color: "#ff6b9d",
            fontSize: "1.3em",
            margin: 0,
          }}
        >
          {t.factionsAvailable}
        </h3>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={onSelectAll}
            style={{
              padding: "6px 12px",
              fontSize: "0.85em",
              backgroundColor: "rgba(100, 255, 218, 0.2)",
              color: "#64ffda",
              border: "1px solid #64ffda",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {t.selectAll}
          </button>
          <button
            onClick={onDeselectAll}
            style={{
              padding: "6px 12px",
              fontSize: "0.85em",
              backgroundColor: "rgba(255, 107, 157, 0.2)",
              color: "#ff6b9d",
              border: "1px solid #ff6b9d",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {t.selectNone}
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          maxHeight: "400px",
          overflowY: "auto",
          padding: "4px",
        }}
      >
        {FACTIONS.map((faction) => {
          const isSelected = selectedFactions.includes(faction.id);
          return (
            <label
              key={faction.id}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                backgroundColor: isSelected
                  ? "rgba(255, 107, 157, 0.15)"
                  : "rgba(255, 255, 255, 0.05)",
                borderRadius: "8px",
                border: `1px solid ${
                  isSelected
                    ? "rgba(255, 107, 157, 0.4)"
                    : "rgba(255, 255, 255, 0.1)"
                }`,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = isSelected
                  ? "rgba(255, 107, 157, 0.25)"
                  : "rgba(255, 255, 255, 0.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = isSelected
                  ? "rgba(255, 107, 157, 0.15)"
                  : "rgba(255, 255, 255, 0.05)";
              }}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggle(faction.id)}
                style={{
                  marginRight: "12px",
                  width: "18px",
                  height: "18px",
                  cursor: "pointer",
                  accentColor: "#ff6b9d",
                }}
              />
              <span
                style={{
                  flex: 1,
                  color: "#fff",
                  fontSize: "1em",
                }}
              >
                {t.factionNames[faction.id]}
              </span>
              <span
                style={{
                  color: "#64ffda",
                  fontWeight: "bold",
                  fontSize: "0.95em",
                  backgroundColor: "rgba(100, 255, 218, 0.1)",
                  padding: "4px 10px",
                  borderRadius: "6px",
                }}
              >
                {faction.reach}
              </span>
            </label>
          );
        })}
      </div>
      <div
        style={{
          marginTop: "12px",
          color: "#a8b2d1",
          fontSize: "0.9em",
          textAlign: "center",
        }}
      >
        {selectedFactions.length} {t.factionsSelected}
      </div>
    </div>
  );
}
