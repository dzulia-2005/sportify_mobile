import { useQuery } from "@tanstack/react-query";
import { GetPlayerById } from "../../../../../shared/api/player";

export const useGetPlayerIdQuery = (id: string) => {
  return useQuery({
    queryFn: () => GetPlayerById(id),
    queryKey: ['getplayerbyId', id],
  });
};