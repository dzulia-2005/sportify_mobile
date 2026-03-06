import { useQuery } from "@tanstack/react-query";
import { GetById } from "../../../../../shared/api/team";

export const useGetById = (Id: string) => {
  return useQuery({
    queryFn: () => GetById(Id),
    queryKey: ['getTeamById', Id],
  });
};