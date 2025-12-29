// CONTROLLER - Lógica de negócio do sorteio

"use client";

import { useState, useEffect } from "react";
import {
  FACTIONS,
  isValidDraw,
  shuffleArray,
  type FactionId,
} from "../models/factions";

export interface SorterResult {
  player: string;
  factionId: FactionId;
}

export interface ReachInfo {
  valid: boolean;
  totalReach: number;
  minReach: number;
}

export function useSorter() {
  const [playersInput, setPlayersInput] = useState("");
  const [selectedFactions, setSelectedFactions] = useState<FactionId[]>(
    FACTIONS.map((f) => f.id)
  );
  const [results, setResults] = useState<SorterResult[]>([]);
  const [error, setError] = useState("");
  const [isShuffling, setIsShuffling] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [reachInfo, setReachInfo] = useState<ReachInfo | null>(null);

  // Funções de manipulação de facções
  const toggleFaction = (factionId: FactionId) => {
    setSelectedFactions((prev) =>
      prev.includes(factionId)
        ? prev.filter((f) => f !== factionId)
        : [...prev, factionId]
    );
  };

  const selectAllFactions = () => {
    setSelectedFactions(FACTIONS.map((f) => f.id));
  };

  const deselectAllFactions = () => {
    setSelectedFactions([]);
  };

  // Lógica do countdown
  useEffect(() => {
    if (countdown === null || countdown === 0) return;

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  // Executar sorteio quando countdown chega a 0
  useEffect(() => {
    if (countdown === null || countdown !== 0) return;

    // Executar sorteio
    const playerList = playersInput
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    const factionList = selectedFactions;

    const shuffledPlayers = shuffleArray(playerList);
    const shuffledFactions = shuffleArray(factionList);

    const newResults: SorterResult[] = shuffledPlayers.map((player, index) => ({
      player: player,
      factionId: shuffledFactions[index],
    }));

    // Validar alcance
    const numPlayers = playerList.length;
    const drawnFactions = newResults.map((r) => r.factionId);
    const validation = isValidDraw(numPlayers, drawnFactions);

    // Atualizar estados após o sorteio usando queueMicrotask para evitar cascading renders
    queueMicrotask(() => {
      setReachInfo(validation);
      setResults(newResults);
      setIsShuffling(false);
      setCountdown(null);
    });
  }, [countdown, playersInput, selectedFactions]);

  // Iniciar sorteio
  const handleShuffle = () => {
    setResults([]);
    setError("");
    setReachInfo(null);
    setIsShuffling(true);
    setCountdown(3);
  };

  return {
    // Estados
    playersInput,
    selectedFactions,
    results,
    error,
    isShuffling,
    countdown,
    reachInfo,
    // Funções
    setPlayersInput,
    toggleFaction,
    selectAllFactions,
    deselectAllFactions,
    handleShuffle,
  };
}
