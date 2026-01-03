import { useAppSelector } from '../../app/store/hooks/hook';

export const useAuth = () => {
  const { accessToken } = useAppSelector(state => state.auth);
  const isLoggedIn = !!accessToken;
  return { isLoggedIn, accessToken };
};
