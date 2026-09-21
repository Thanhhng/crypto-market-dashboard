import { CoinCard } from "@/components/coin-card";
import type { Coin } from "@/types";

export function CoinGrid({ coins }: { coins: Coin[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {coins.map((coin) => (
        <li key={coin.id}>
          <CoinCard coin={coin} />
        </li>
      ))}
    </ul>
  );
}
