// MODEL - Internacionalização (i18n)

import type { FactionId } from "./factions";

export type Language = "pt-BR" | "en-US" | "es-ES";

export interface Translation {
  // Header
  title: string;
  subtitle: string;

  // Faction Reference
  factionReference: string;
  minReachByPlayers: string;
  players: string;

  // Player Input
  playersLabel: string;
  playersPlaceholder: string;

  // Faction Selector
  factionsAvailable: string;
  selectAll: string;
  selectNone: string;
  factionsSelected: string;

  // Shuffle Button
  shuffleButton: string;
  shuffling: string;

  // Countdown
  preparingDraw: string;

  // Results
  resultsTitle: string;
  validDraw: string;
  invalidDraw: string;
  totalReach: string;
  minRecommended: string;
  invalidDrawMessage: string;

  // Faction Names
  factionNames: Record<FactionId, string>;
}

export const translations: Record<Language, Translation> = {
  "pt-BR": {
    // Header
    title: "🎲 Sorteador de Facções de Root",
    subtitle: "Insira um nome por linha e sorteie!",

    // Faction Reference
    factionReference: "📊 Referência de Alcance das Facções",
    minReachByPlayers: "Alcance mínimo por jogadores",
    players: "jogadores",

    // Player Input
    playersLabel: "👥 Jogadores",
    playersPlaceholder: "Player1\nPlayer2\nPlayer3...",

    // Faction Selector
    factionsAvailable: "⚔️ Facções Disponíveis",
    selectAll: "Todas",
    selectNone: "Nenhuma",
    factionsSelected: "facção(ões) selecionada(s)",

    // Shuffle Button
    shuffleButton: "🎯 Sortear!",
    shuffling: "🔄 Sorteando...",

    // Countdown
    preparingDraw: "Preparando o sorteio...",

    // Results
    resultsTitle: "🎉 Resultados do Sorteio",
    validDraw: "✅ Sorteio Válido!",
    invalidDraw: "⚠️ Sorteio Inválido",
    totalReach: "Alcance Total",
    minRecommended: "Mínimo Recomendado",
    invalidDrawMessage:
      "O alcance das facções selecionadas é menor que o recomendado para {count} jogadores. Considere adicionar facções com maior alcance ou fazer um novo sorteio.",

    // Faction Names
    factionNames: {
      marquise: "Marqueses",
      eyrie: "Dinastia das Rapinas",
      alliance: "Aliança da Floresta",
      vagabond1: "Malandro (1º)",
      vagabond2: "Malandro (2º)",
      cult: "Lagartos Cultistas",
      riverfolk: "Companhia Ribeirinha",
      duchy: "Ducado Subterrâneo",
      corvid: "Conspiração Corvídea",
      lord: "Senhor das Centenas",
      keepers: "Guardiões de Ferro",
    },
  },

  "en-US": {
    // Header
    title: "🎲 Root Faction Sorter",
    subtitle: "Enter one name per line and draw your fate!",

    // Faction Reference
    factionReference: "📊 Faction Reach Reference",
    minReachByPlayers: "Minimum reach per players",
    players: "players",

    // Player Input
    playersLabel: "👥 Players",
    playersPlaceholder: "Player1\nPlayer2\nPlayer3...",

    // Faction Selector
    factionsAvailable: "⚔️ Available Factions",
    selectAll: "All",
    selectNone: "None",
    factionsSelected: "faction(s) selected",

    // Shuffle Button
    shuffleButton: "🎯 Draw!",
    shuffling: "🔄 Shuffling...",

    // Countdown
    preparingDraw: "Preparing the draw...",

    // Results
    resultsTitle: "🎉 Draw Results",
    validDraw: "✅ Valid Draw!",
    invalidDraw: "⚠️ Invalid Draw",
    totalReach: "Total Reach",
    minRecommended: "Minimum Recommended",
    invalidDrawMessage:
      "The reach of the selected factions is less than recommended for {count} players. Consider adding factions with higher reach or drawing again.",

    // Faction Names
    factionNames: {
      marquise: "Marquise de Cat",
      eyrie: "Eyrie Dynasties",
      alliance: "Woodland Alliance",
      vagabond1: "Vagabond (1st)",
      vagabond2: "Vagabond (2nd)",
      cult: "Lizard Cult",
      riverfolk: "Riverfolk Company",
      duchy: "Underground Duchy",
      corvid: "Corvid Conspiracy",
      lord: "Lord of the Hundreds",
      keepers: "Keepers in Iron",
    },
  },

  "es-ES": {
    // Header
    title: "🎲 Sorteo de Facciones de Root",
    subtitle: "¡Ingresa un nombre por línea y sortea!",

    // Faction Reference
    factionReference: "📊 Referencia de Alcance de Facciones",
    minReachByPlayers: "Alcance mínimo por jugadores",
    players: "jugadores",

    // Player Input
    playersLabel: "👥 Jugadores",
    playersPlaceholder: "Jugador1\nJugador2\nJugador3...",

    // Faction Selector
    factionsAvailable: "⚔️ Facciones Disponibles",
    selectAll: "Todas",
    selectNone: "Ninguna",
    factionsSelected: "facción(es) seleccionada(s)",

    // Faction Names
    factionNames: {
      marquise: "El Marquesado",
      eyrie: "El Nido de Águilas",
      alliance: "La Alianza Woodland",
      vagabond1: "El Vagabundo (1º)",
      vagabond2: "El Vagabundo (2º)",
      cult: "El Culto Reptiliano",
      riverfolk: "Los Ribereños",
      duchy: "El Ducado Subterráneo",
      corvid: "La Conspiración Córvida",
      lord: "El Señor de las Centenas",
      keepers: "Los Guardianes de Hierro",
    },
    // Shuffle Button
    shuffleButton: "🎯 ¡Sortear!",
    shuffling: "🔄 Sorteando...",

    // Countdown
    preparingDraw: "Preparando el sorteo...",

    // Results
    resultsTitle: "🎉 Resultados del Sorteo",
    validDraw: "✅ Sorteo Válido!",
    invalidDraw: "⚠️ Sorteo Inválido",
    totalReach: "Alcance Total",
    minRecommended: "Mínimo Recomendado",
    invalidDrawMessage:
      "El alcance de las facciones seleccionadas es menor que el recomendado para {count} jugadores. Considera agregar facciones con mayor alcance o hacer un nuevo sorteo.",
  },
};

export const languageNames: Record<Language, string> = {
  "pt-BR": "Português",
  "en-US": "English",
  "es-ES": "Español",
};

export const languageFlags: Record<Language, string> = {
  "pt-BR": "🇧🇷",
  "en-US": "🇺🇸",
  "es-ES": "🇪🇸",
};

export function getTranslation(language: Language): Translation {
  return translations[language];
}
