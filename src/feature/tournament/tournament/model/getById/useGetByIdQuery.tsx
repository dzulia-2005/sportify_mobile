import { useQuery } from "@tanstack/react-query";
import { GetTournamentById } from "../../../../../shared/api/tournament";
import { GetAllTournamentResponse } from "../../../../../shared/api/tournament/index.type";

export const useGetByIdQuery = (Id: string, options?: { enabled?: boolean }) => {
  return useQuery<GetAllTournamentResponse>({
    queryFn: () => GetTournamentById(Id),
    queryKey: ['getTournamentById', Id],
    enabled: options?.enabled ?? !!Id,
  });
};