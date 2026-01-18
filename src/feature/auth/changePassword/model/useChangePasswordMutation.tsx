import { useMutation } from '@tanstack/react-query';
import { ChangePassword } from '../../../../shared/api/auth';

export const useChangePasswordMutation = () => {
  return useMutation({
    mutationKey: ['change-password'],
    mutationFn: ChangePassword,
  });
};
