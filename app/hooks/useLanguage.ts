// CONTROLLER - Gerenciamento de idioma

"use client";

import { useState } from "react";
import { Language, getTranslation, Translation } from "../models/i18n";

const STORAGE_KEY = "root-sorter-language";
const DEFAULT_LANGUAGE: Language = "pt-BR";

// Função para obter o idioma inicial do localStorage
function getInitialLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  
  const stored = localStorage.getItem(STORAGE_KEY) as Language;
  if (stored && (stored === "pt-BR" || stored === "en-US" || stored === "es-ES")) {
    return stored;
  }
  return DEFAULT_LANGUAGE;
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const [t, setT] = useState<Translation>(() => getTranslation(getInitialLanguage()));

  // Mudar idioma
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    setT(getTranslation(newLanguage));
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newLanguage);
    }
  };

  return {
    language,
    setLanguage,
    t,
  };
}
