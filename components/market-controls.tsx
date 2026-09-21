import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function MarketControls({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (query: string) => void;
}) {
  return (
    <div className="mb-6">
      <div className="relative sm:max-w-xs">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search by name or symbol"
          aria-label="Search coins"
          className="pl-9"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onQueryChange("")}
            aria-label="Clear search"
            className="absolute right-1 top-1/2 size-7 -translate-y-1/2"
          >
            <X className="size-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
