"use client";

import { CoinGrid } from "@/components/coin-grid";
import { useCoins } from "@/hooks/use-coins";

export default function Home() {
  const { data, isPending } = useCoins();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
      <header className="mb-8 border-b pb-6">
        <h1 className="text-xl font-semibold tracking-tight">Crypto Market</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Top 20 cryptocurrencies by market cap
        </p>
      </header>

      <CoinGrid coins={data ?? []} isLoading={isPending} />
    </main>
  );
}
