import { useMutation } from '@tanstack/react-query';
import { Login } from '../../../../shared/api/auth';
import {
  LoginPayload,
  LoginResponse,
} from '../../../../shared/api/auth/index.type';

export const useLoginMutation = () => {
  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: Login,
    mutationKey: ['login'],
  });
};
