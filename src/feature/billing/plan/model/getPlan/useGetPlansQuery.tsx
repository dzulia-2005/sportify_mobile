import { useQuery } from "@tanstack/react-query";
import { getPlan } from "../../../../../shared/api/plan";

export const useGetPlansQuery = () => {
  return useQuery({
    queryFn: getPlan,
    queryKey: ['getPlans'],
  });
};
