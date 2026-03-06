import { useMutation } from "@tanstack/react-query";
import { checkout } from "../../../../../shared/api/billing";

export const useCheckoutMutation = () => {
  return useMutation({
    mutationFn: checkout,
    mutationKey: ['checkout'],
  });
};
