// VIEW - Seletor de idioma com bandeiras

import React, { useState } from "react";
import { Language, languageFlags, languageNames } from "../models/i18n";

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export default function LanguageSelector({
  currentLanguage,
  onLanguageChange,
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languages: Language[] = ["pt-BR", "en-US", "es-ES"];

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: "10px 16px",
          fontSize: "1.2em",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "12px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backdropFilter: "blur(10px)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
        }}
      >
        <span style={{ fontSize: "1.3em" }}>
          {languageFlags[currentLanguage]}
        </span>
        <span style={{ fontSize: "0.85em" }}>
          {languageNames[currentLanguage]}
        </span>
        <span style={{ fontSize: "0.7em", marginLeft: "4px" }}>▼</span>
      </button>

      {isOpen && (
        <>
          {/* Overlay para fechar ao clicar fora */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
            }}
          />

          {/* Dropdown menu */}
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: 0,
              backgroundColor: "rgba(26, 26, 46, 0.98)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "12px",
              overflow: "hidden",
              minWidth: "180px",
              zIndex: 1000,
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  onLanguageChange(lang);
                  setIsOpen(false);
                }}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  backgroundColor:
                    lang === currentLanguage
                      ? "rgba(100, 255, 218, 0.15)"
                      : "transparent",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "1em",
                  transition: "all 0.2s ease",
                  textAlign: "left",
                }}
                onMouseOver={(e) => {
                  if (lang !== currentLanguage) {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.1)";
                  }
                }}
                onMouseOut={(e) => {
                  if (lang !== currentLanguage) {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                <span style={{ fontSize: "1.5em" }}>{languageFlags[lang]}</span>
                <span style={{ flex: 1 }}>{languageNames[lang]}</span>
                {lang === currentLanguage && (
                  <span style={{ color: "#64ffda", fontSize: "1.2em" }}>✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
