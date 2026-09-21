import type { Coin } from "@/types";

export function filterCoins(coins: Coin[], query: string) {
  const term = query.trim().toLowerCase();
  if (!term) return coins;

  return coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(term) ||
      coin.symbol.toLowerCase().includes(term),
  );
}
