import { useQuery } from "@tanstack/react-query";
import { GetAllStages } from "../../../../../shared/api/stage";

export const useGetAllStageQuery = (tournamentId: string) => {
  return useQuery({
    queryFn: () => GetAllStages(tournamentId),
    queryKey: ['getallstages'],
  });
};
