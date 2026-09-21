import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SORT_OPTIONS, type SortOption } from "@/types";

export function MarketControls({
  query,
  onQueryChange,
  sortOption,
  onSortChange,
}: {
  query: string;
  onQueryChange: (query: string) => void;
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative sm:max-w-xs sm:flex-1">
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

      <Select value={sortOption} onValueChange={onSortChange}>
        <SelectTrigger className="sm:w-56" aria-label="Sort coins">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {SORT_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
