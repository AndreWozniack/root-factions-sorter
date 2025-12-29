// VIEW - Botão de sortear

import React from "react";
import { Translation } from "../models/i18n";

interface ShuffleButtonProps {
  isShuffling: boolean;
  onClick: () => void;
  t: Translation;
}

export default function ShuffleButton({
  isShuffling,
  onClick,
  t,
}: ShuffleButtonProps) {
  return (
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
      <button
        onClick={onClick}
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
        {isShuffling ? t.shuffling : t.shuffleButton}
      </button>
    </div>
  );
}
