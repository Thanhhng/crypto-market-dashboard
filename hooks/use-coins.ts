import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "@/lib/api";

export function useCoins() {
  return useQuery({
    queryKey: ["coins", "usd", 1],
    queryFn: ({ signal }) => fetchCoins(signal),
  });
}
