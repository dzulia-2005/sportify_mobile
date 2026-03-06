export type LoginPayload = {
  userName: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export type RegisterResponse = {
  accessToken: string;
  refreshToken: string;
};

export type RegisterPayload = {
  userName: string;
  email: string;
  password: string;
};

export type MeResponse = {
  id: string;
  userName: string;
  email: string;
  role: string;
};

export type RefreshPayload = {
  payload: {
    accessToken: string;
    refreshToken: string;
  };
};

export type ChangePasswordPayload = {
  UserName: string;
  newPassword: string;
};


export type changePasswordPayload = {
  email: string;
  accessToken: string;
  newPassword: string;
};

export type ForgotPasswordPayload = {
  email: string;
};