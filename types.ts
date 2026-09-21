export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number | null;
  market_cap: number;
  market_cap_rank: number;
}

export type SortOption =
  | "rank"
  | "price-desc"
  | "price-asc"
  | "change-desc"
  | "change-asc";

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "rank", label: "Market cap rank" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "change-desc", label: "24h change: high to low" },
  { value: "change-asc", label: "24h change: low to high" },
];
