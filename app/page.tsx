// MAIN PAGE - Orquestração dos componentes (MVC)

"use client";

import React, { useEffect } from "react";
import { useSorter } from "./hooks/useSorter";
import { useLanguage } from "./hooks/useLanguage";
import {
  Header,
  FactionReference,
  PlayerInput,
  FactionSelector,
  ShuffleButton,
  Countdown,
  Results,
  LanguageSelector,
} from "./components";

export default function RootSorter() {
  const {
    playersInput,
    selectedFactions,
    results,
    isShuffling,
    countdown,
    reachInfo,
    setPlayersInput,
    toggleFaction,
    selectAllFactions,
    deselectAllFactions,
    handleShuffle,
  } = useSorter();

  const { language, setLanguage, t } = useLanguage();

  // Animações CSS
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.id = "custom-animations";
    styleSheet.textContent = `
      @keyframes scaleIn {
        0% { transform: scale(0); opacity: 0; }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); opacity: 1; }
      }
      @keyframes fadeInUp {
        from { 
          opacity: 0; 
          transform: translateY(20px); 
        }
        to { 
          opacity: 1; 
          transform: translateY(0); 
        }
      }
    `;

    if (!document.getElementById("custom-animations")) {
      document.head.appendChild(styleSheet);
    }

    return () => {
      const existing = document.getElementById("custom-animations");
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Seletor de Idioma */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "30px",
          }}
        >
          <LanguageSelector
            currentLanguage={language}
            onLanguageChange={setLanguage}
          />
        </div>

        <div style={{ marginBottom: "40px" }}>
          <Header t={t} />
        </div>

        {/* Countdown e Resultados no topo */}
        {countdown !== null && countdown > 0 && (
          <div style={{ marginBottom: "40px" }}>
            <Countdown countdown={countdown} t={t} />
          </div>
        )}

        {results.length > 0 && !isShuffling && (
          <div style={{ marginBottom: "40px" }}>
            <Results results={results} reachInfo={reachInfo} t={t} />
          </div>
        )}

        {/* Inputs Container */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            marginBottom: "40px",
          }}
        >
          <PlayerInput value={playersInput} onChange={setPlayersInput} t={t} />

          <FactionSelector
            selectedFactions={selectedFactions}
            onToggle={toggleFaction}
            onSelectAll={selectAllFactions}
            onDeselectAll={deselectAllFactions}
            t={t}
          />
        </div>

        <div style={{ marginBottom: "40px" }}>
          <ShuffleButton
            isShuffling={isShuffling}
            onClick={handleShuffle}
            t={t}
          />
        </div>

        <FactionReference t={t} />
      </div>
    </div>
  );
}
