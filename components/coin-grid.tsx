import { CoinCard, CoinCardSkeleton } from "@/components/coin-card";
import type { Coin } from "@/types";

const SKELETON_COUNT = 8;

export function CoinGrid({
  coins,
  isLoading,
}: {
  coins: Coin[];
  isLoading: boolean;
}) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {isLoading
        ? Array.from({ length: SKELETON_COUNT }, (_, index) => (
            <li key={index}>
              <CoinCardSkeleton />
            </li>
          ))
        : coins.map((coin) => (
            <li key={coin.id}>
              <CoinCard coin={coin} />
            </li>
          ))}
    </ul>
  );
}
