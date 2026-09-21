import Image from "next/image";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Card, CardAction, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPercent, formatPrice } from "@/lib/format";
import type { Coin } from "@/types";

export function CoinCard({ coin }: { coin: Coin }) {
  const change = coin.price_change_percentage_24h;
  const isUp = change !== null && change >= 0;

  return (
    <Card>
      <CardHeader className="items-center gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src={coin.image}
            alt=""
            width={36}
            height={36}
            className="size-9 shrink-0 rounded-full"
          />
          <div className="min-w-0">
            <p className="truncate font-medium">{coin.name}</p>
            <p className="text-xs font-medium uppercase text-muted-foreground">
              {coin.symbol}
            </p>
          </div>
        </div>
        <CardAction className="font-mono text-xs text-muted-foreground">
          #{coin.market_cap_rank}
        </CardAction>
      </CardHeader>

      <CardContent className="text-right">
        <p className="font-mono text-2xl font-semibold tabular-nums">
          {formatPrice(coin.current_price)}
        </p>
        <p
          className={`mt-1 inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 font-mono text-sm font-medium tabular-nums ${
            change === null
              ? "text-muted-foreground"
              : isUp
                ? "bg-up-surface text-up"
                : "bg-down-surface text-down"
          }`}
        >
          {change !== null &&
            (isUp ? (
              <ArrowUp className="size-3.5" aria-hidden />
            ) : (
              <ArrowDown className="size-3.5" aria-hidden />
            ))}
          {formatPercent(change)}
        </p>
      </CardContent>
    </Card>
  );
}

export function CoinCardSkeleton() {
  return (
    <Card>
      <CardHeader className="items-center gap-3">
        <div className="flex items-center gap-3">
          <Skeleton className="size-9 rounded-full" />
          <div className="space-y-1.5">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-10" />
          </div>
        </div>
        <CardAction>
          <Skeleton className="h-3 w-6" />
        </CardAction>
      </CardHeader>

      <CardContent className="flex flex-col items-end gap-2">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-6 w-20" />
      </CardContent>
    </Card>
  );
}
