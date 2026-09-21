"use client";

import { useMemo, useState } from "react";
import { CoinGrid } from "@/components/coin-grid";
import { EmptyState } from "@/components/empty-state";
import { ErrorState } from "@/components/error-state";
import { MarketControls } from "@/components/market-controls";
import { useCoins } from "@/hooks/use-coins";
import { useDebouncedValue } from "@/hooks/use-debounced-value";
import { filterCoins, sortCoins } from "@/lib/filter-sort";
import type { SortOption } from "@/types";

export default function Home() {
  const { data, isPending, isError, error, isFetching, refetch } = useCoins();
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("rank");
  const debouncedQuery = useDebouncedValue(query);

  const visibleCoins = useMemo(
    () => sortCoins(filterCoins(data ?? [], debouncedQuery), sortOption),
    [data, debouncedQuery, sortOption],
  );

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
      <header className="mb-6 border-b pb-6">
        <h1 className="text-xl font-semibold tracking-tight">Crypto Market</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Top 20 cryptocurrencies by market cap
        </p>
      </header>

      <MarketControls
        query={query}
        onQueryChange={setQuery}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      {isError ? (
        <ErrorState
          message={error.message}
          onRetry={() => refetch()}
          isRetrying={isFetching}
        />
      ) : !isPending && visibleCoins.length === 0 ? (
        <EmptyState query={debouncedQuery} onClear={() => setQuery("")} />
      ) : (
        <CoinGrid coins={visibleCoins} isLoading={isPending} />
      )}
    </main>
  );
}
