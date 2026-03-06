import { useMutation } from "@tanstack/react-query";
import { ResetPassword } from "../../../../shared/api/auth";

export const useResetPasswordMutation = () => {
  return useMutation({
    mutationFn: ResetPassword,
    mutationKey: ['reset-password'],
  });
};