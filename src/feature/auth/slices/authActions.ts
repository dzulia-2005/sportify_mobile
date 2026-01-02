import AsyncStorage from '@react-native-async-storage/async-storage';
import { appDispatch } from '../../../app/store/store';
import { logOut, setTokens } from './authSlice';

export const saveTokens =
  (accessToken: string, refreshToken: string) =>
  async (dispatch: appDispatch) => {
    try {
      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);
      dispatch(setTokens({ accessToken, refreshToken }));
    } catch (error) {
      console.error('failed to save tokens', error);
    }
  };

export const logout = () => async (dispatch: appDispatch) => {
  try {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    dispatch(logOut());
  } catch (error) {
    console.error('failed to logout', error);
  }
};
