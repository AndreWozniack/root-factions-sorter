// VIEW - Exibição dos resultados

import React from "react";
import { SorterResult, ReachInfo } from "../hooks/useSorter";
import { Translation } from "../models/i18n";

interface ResultsProps {
  results: SorterResult[];
  reachInfo: ReachInfo | null;
  t: Translation;
}

export default function Results({ results, reachInfo, t }: ResultsProps) {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: "16px",
        padding: "32px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <h2
        style={{
          color: "#64ffda",
          marginBottom: "24px",
          fontSize: "2em",
          textAlign: "center",
        }}
      >
        {t.resultsTitle}
      </h2>

      {/* Informação de Alcance */}
      {reachInfo && (
        <div
          style={{
            marginBottom: "24px",
            padding: "20px",
            borderRadius: "12px",
            backgroundColor: reachInfo.valid
              ? "rgba(100, 255, 218, 0.1)"
              : "rgba(255, 107, 157, 0.1)",
            border: `2px solid ${reachInfo.valid ? "#64ffda" : "#ff6b9d"}`,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              color: reachInfo.valid ? "#64ffda" : "#ff6b9d",
              marginBottom: "8px",
            }}
          >
            {reachInfo.valid ? t.validDraw : t.invalidDraw}
          </div>
          <div style={{ color: "#a8b2d1", fontSize: "1.1em" }}>
            <strong>{t.totalReach}:</strong> {reachInfo.totalReach} |{" "}
            <strong>{t.minRecommended}:</strong> {reachInfo.minReach}
          </div>
          {!reachInfo.valid && (
            <div
              style={{
                color: "#ff6b9d",
                fontSize: "0.95em",
                marginTop: "8px",
              }}
            >
              {t.invalidDrawMessage.replace(
                "{count}",
                results.length.toString()
              )}
            </div>
          )}
        </div>
      )}

      {/* Lista de Resultados */}
      <div style={{ display: "grid", gap: "12px" }}>
        {results.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "20px 24px",
              background:
                index % 2 === 0
                  ? "linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)"
                  : "linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%)",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.3s ease",
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateX(8px)";
              e.currentTarget.style.borderColor = "#64ffda";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: "1.2em",
                fontWeight: "600",
              }}
            >
              {item.player}
            </span>
            <span
              style={{
                color: "#ff6b9d",
                fontSize: "1.2em",
                fontWeight: "bold",
              }}
            >
              {t.factionNames[item.factionId]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
