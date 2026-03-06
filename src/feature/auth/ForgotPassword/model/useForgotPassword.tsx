import { useMutation } from "@tanstack/react-query";
import { ForgotPassword } from "../../../../shared/api/auth";

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationFn: ForgotPassword,
    mutationKey: ['forgot-password'],
  });
};