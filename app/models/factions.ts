// MODEL - Definição de dados e validações

export type FactionId =
  | "marquise"
  | "eyrie"
  | "alliance"
  | "vagabond1"
  | "vagabond2"
  | "cult"
  | "riverfolk"
  | "duchy"
  | "corvid"
  | "lord"
  | "keepers";

export interface Faction {
  id: FactionId;
  reach: number;
}

export const FACTIONS: Faction[] = [
  { id: "marquise", reach: 10 },
  { id: "lord", reach: 9 },
  { id: "keepers", reach: 8 },
  { id: "duchy", reach: 8 },
  { id: "eyrie", reach: 7 },
  { id: "vagabond1", reach: 5 },
  { id: "vagabond2", reach: 2 },
  { id: "riverfolk", reach: 5 },
  { id: "alliance", reach: 3 },
  { id: "corvid", reach: 3 },
  { id: "cult", reach: 2 },
];

export const MIN_REACH_BY_PLAYERS: Record<number, number> = {
  2: 17,
  3: 18,
  4: 21,
  5: 25,
  6: 28,
};

export function calculateTotalReach(factionIds: FactionId[]): number {
  return factionIds.reduce((total, factionId) => {
    const faction = FACTIONS.find((f) => f.id === factionId);
    return total + (faction?.reach || 0);
  }, 0);
}

export function isValidDraw(
  numPlayers: number,
  selectedFactions: FactionId[]
): { valid: boolean; totalReach: number; minReach: number } {
  const totalReach = calculateTotalReach(selectedFactions);
  const minReach = MIN_REACH_BY_PLAYERS[numPlayers] || 0;

  return {
    valid: totalReach >= minReach,
    totalReach,
    minReach,
  };
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
