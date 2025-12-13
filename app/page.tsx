"use client";

import React, { useState, useEffect } from "react";

const INITIAL_PLAYERS = "Andre\nDavi\nArthur\nPebinha\nAlessandro\nJoão";
const INITIAL_FACTIONS =
  "Marqueses\nRapinas\nAliança da Floresta\nMalandro\nSenhor das Centenas\nGuardiões de Ferro\nLagartos Cultistas\nCompanhia Ribeirinha";

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function RootSorter() {
  const [playersInput, setPlayersInput] = useState(INITIAL_PLAYERS);
  const [factionsInput, setFactionsInput] = useState(INITIAL_FACTIONS);
  const [results, setResults] = useState<{ player: string; faction: string }[]>(
    []
  );
  const [error, setError] = useState("");
  const [isShuffling, setIsShuffling] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    if (countdown === null) return;

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const playerList = playersInput
        .split("\n")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
      const factionList = factionsInput
        .split("\n")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

      const shuffledPlayers = shuffleArray([...playerList]);
      const shuffledFactions = shuffleArray([...factionList]);

      const newResults = shuffledPlayers.map(
        (player: string, index: number) => ({
          player: player,
          faction: shuffledFactions[index],
        })
      );

      setResults(newResults);
      setIsShuffling(false);
      setCountdown(null);
    }
  }, [countdown, playersInput, factionsInput]);

  const handleShuffle = () => {
    setResults([]);
    setError("");
    setIsShuffling(true);
    setCountdown(3);
  };

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
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "3em",
              color: "#fff",
              marginBottom: "10px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            🎲 Sorteador de Facções de Root
          </h1>
          <p style={{ color: "#a8b2d1", fontSize: "1.1em" }}>
            Insira um nome/facção por linha e descubra seu destino!
          </p>
        </div>

        {/* Inputs Container */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            marginBottom: "30px",
          }}
        >
          {/* Coluna dos Jogadores */}
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
              👥 Jogadores
            </h3>
            <textarea
              value={playersInput}
              onChange={(e) => setPlayersInput(e.target.value)}
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
              placeholder="Andre&#10;Davi&#10;Arthur..."
            />
          </div>

          {/* Coluna das Facções */}
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
                color: "#ff6b9d",
                marginBottom: "16px",
                fontSize: "1.3em",
              }}
            >
              ⚔️ Facções Disponíveis
            </h3>
            <textarea
              value={factionsInput}
              onChange={(e) => setFactionsInput(e.target.value)}
              rows={10}
              style={{
                width: "100%",
                padding: "16px",
                boxSizing: "border-box",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 107, 157, 0.3)",
                borderRadius: "12px",
                color: "#fff",
                fontSize: "1em",
                fontFamily: "inherit",
                resize: "vertical",
              }}
              placeholder="Marqueses&#10;Rapinas&#10;Aliança da Floresta..."
            />
          </div>
        </div>

        {/* Botão de Sortear */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <button
            onClick={handleShuffle}
            disabled={isShuffling}
            style={{
              padding: "18px 48px",
              fontSize: "1.3em",
              fontWeight: "bold",
              background: isShuffling
                ? "linear-gradient(135deg, #888 0%, #666 100%)"
                : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: isShuffling ? "not-allowed" : "pointer",
              boxShadow: "0 8px 24px rgba(102, 126, 234, 0.4)",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "1px",
              opacity: isShuffling ? 0.7 : 1,
            }}
            onMouseOver={(e) => {
              if (!isShuffling) {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(102, 126, 234, 0.6)";
              }
            }}
            onMouseOut={(e) => {
              if (!isShuffling) {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(102, 126, 234, 0.4)";
              }
            }}
          >
            {isShuffling ? "🔄 Sorteando..." : "🎯 Embaralhar e Sortear!"}
          </button>
        </div>

        {/* Contagem Regressiva */}
        {countdown !== null && countdown > 0 && (
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
              Preparando o sorteio...
            </p>
          </div>
        )}

        {/* Exibição de Erros */}
        {error && (
          <div
            style={{
              color: "#ff6b9d",
              fontWeight: "bold",
              border: "2px solid #ff6b9d",
              padding: "16px",
              marginBottom: "30px",
              borderRadius: "12px",
              backgroundColor: "rgba(255, 107, 157, 0.1)",
              textAlign: "center",
            }}
          >
            {error}
          </div>
        )}

        {/* Resultados do Sorteio */}
        {results.length > 0 && !isShuffling && (
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
              🎉 Resultados do Sorteio
            </h2>
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
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.1)";
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
                    {item.faction}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
