import type { Coin, SortOption } from "@/types";

export function filterCoins(coins: Coin[], query: string) {
  const term = query.trim().toLowerCase();
  if (!term) return coins;

  return coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(term) ||
      coin.symbol.toLowerCase().includes(term),
  );
}

function compareChange(a: Coin, b: Coin, direction: 1 | -1) {
  const aChange = a.price_change_percentage_24h;
  const bChange = b.price_change_percentage_24h;

  if (aChange === null) return 1;
  if (bChange === null) return -1;

  return (aChange - bChange) * direction;
}

export function sortCoins(coins: Coin[], option: SortOption) {
  const sorted = [...coins];

  switch (option) {
    case "price-desc":
      return sorted.sort((a, b) => b.current_price - a.current_price);
    case "price-asc":
      return sorted.sort((a, b) => a.current_price - b.current_price);
    case "change-desc":
      return sorted.sort((a, b) => compareChange(a, b, -1));
    case "change-asc":
      return sorted.sort((a, b) => compareChange(a, b, 1));
    case "rank":
    default:
      return sorted.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
  }
}
