import type { Coin } from "@/types";

const MARKETS_URL = "https://api.coingecko.com/api/v3/coins/markets";

function errorMessage(status: number) {
  if (status === 429) return "Too many requests to CoinGecko. Wait a moment and try again.";
  if (status >= 500) return "CoinGecko is unavailable right now. Try again in a moment.";
  return `CoinGecko returned ${status}.`;
}

export async function fetchCoins(signal?: AbortSignal): Promise<Coin[]> {
  const params = new URLSearchParams({
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: "20",
    page: "1",
    sparkline: "false",
  });

  const response = await fetch(`${MARKETS_URL}?${params}`, { signal });

  if (!response.ok) {
    throw new Error(errorMessage(response.status));
  }

  return response.json();
}
