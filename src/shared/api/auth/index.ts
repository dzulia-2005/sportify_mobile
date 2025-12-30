import { httpClient } from '..';
import { Auth_Endpoints } from './index.enum';
import type {
  LoginPayload,
  LoginResponse,
  MeResponse,
  RefreshPayload,
  RegisterPayload,
  RegisterResponse,
} from './index.type';

export const Register = (
  payload: RegisterPayload,
): Promise<RegisterResponse> => {
  return httpClient
    .post<RegisterResponse>(Auth_Endpoints.REGISTER, payload)
    .then(res => res.data);
};

export const Login = (payload: LoginPayload): Promise<LoginResponse> => {
  return httpClient
    .post<LoginResponse>(Auth_Endpoints.LOGIN, payload)
    .then(res => res.data);
};

export const Refresh = ({ payload }: RefreshPayload) => {
  return httpClient.post(Auth_Endpoints.REFRESH, payload).then(res => res.data);
};

export const Me = () => {
  return httpClient.get<MeResponse>(Auth_Endpoints.ME).then(res => res.data);
};

export const LogOut = () => {
  return httpClient.post(Auth_Endpoints.LOGOUT);
};
