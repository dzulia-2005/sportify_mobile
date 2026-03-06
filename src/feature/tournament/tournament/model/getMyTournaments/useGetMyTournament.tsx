import { useQuery } from "@tanstack/react-query";
import { MyTournament } from "../../../../../shared/api/tournament";

export const useGetMyTournament = (opts?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: ['my-tournaments'],
    queryFn: () => MyTournament(),
    enabled: opts?.enabled ?? true,
  });
};