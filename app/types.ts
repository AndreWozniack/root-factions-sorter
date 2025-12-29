export interface Faction {
  name: string;
  reach: number;
}

export const FACTIONS: Faction[] = [
  { name: "Marqueses", reach: 10 },
  { name: "Senhor das Centenas", reach: 9 },
  { name: "Guardiões de Ferro", reach: 8 },
  { name: "Ducado Subterrâneo", reach: 8 },
  { name: "Dinastia das Rapinas", reach: 7 },
  { name: "Malandro (1º)", reach: 5 },
  { name: "Malandro (2º)", reach: 2 },
  { name: "Companhia Ribeirinha", reach: 5 },
  { name: "Aliança da Floresta", reach: 3 },
  { name: "Conspiração Corvídea", reach: 3 },
  { name: "Lagartos Cultistas", reach: 2 },
];

export const MIN_REACH_BY_PLAYERS: Record<number, number> = {
  2: 17,
  3: 18,
  4: 21,
  5: 25,
  6: 28,
};

export function calculateTotalReach(factionNames: string[]): number {
  return factionNames.reduce((total, factionName) => {
    const faction = FACTIONS.find(
      (f) => f.name.toLowerCase() === factionName.toLowerCase()
    );
    return total + (faction?.reach || 0);
  }, 0);
}

export function isValidDraw(
  numPlayers: number,
  selectedFactions: string[]
): { valid: boolean; totalReach: number; minReach: number } {
  const totalReach = calculateTotalReach(selectedFactions);
  const minReach = MIN_REACH_BY_PLAYERS[numPlayers] || 0;

  return {
    valid: totalReach >= minReach,
    totalReach,
    minReach,
  };
}
