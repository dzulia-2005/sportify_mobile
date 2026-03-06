import { useQuery } from "@tanstack/react-query";
import { subscription } from "../../../../../shared/api/billing";

export const useSubscriptionQuery = () => {
  return useQuery({
    queryFn: subscription,
    queryKey: ['subscription'],
  });
};
