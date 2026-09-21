import { Button } from "@/components/ui/button";

export function EmptyState({
  query,
  onClear,
}: {
  query: string;
  onClear: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed px-6 py-16 text-center">
      <p className="font-medium">No coin matches &ldquo;{query}&rdquo;</p>
      <p className="text-sm text-muted-foreground">
        Try a different name or symbol.
      </p>
      <Button variant="outline" onClick={onClear}>
        Clear search
      </Button>
    </div>
  );
}
