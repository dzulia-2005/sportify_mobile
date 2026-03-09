import { useNavigation } from '@react-navigation/native';
import { useRefreshMutation } from '../../feature/auth/refresh/model/useRefreshMutation';
import { useEffect } from 'react';
import { httpClient } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SignInSuccess } from '../../screens/auth/Login/utils/signInSuccess';
import { NavigationProp } from '../../screens/auth/login/types/login.type';
import Toast from 'react-native-toast-message';

const showErrorToast = (title: string, message: string) => {
  Toast.show({
    type: 'error',
    text1: title,
    text2: message,
    position: 'top',
    visibilityTime: 4000,
  });
};

export const useHttpInterceptor = () => {
  const navigation = useNavigation<NavigationProp>();
  const { mutate: HandleRefresh } = useRefreshMutation();

  useEffect(() => {
    const interceptor = httpClient.interceptors.response.use(
      res => res,
      async (err: any) => {
        const status = err.response?.status;

        if (status === 401) {
          const accessToken = (await AsyncStorage.getItem('accessToken')) ?? '';
          const refreshToken =
            (await AsyncStorage.getItem('refreshToken')) ?? '';

          if (refreshToken) {
            return new Promise((resolve, reject) => {
              HandleRefresh(
                { payload: { accessToken, refreshToken } },
                {
                  onSuccess: (res: {
                    accessToken: string;
                    refreshToken: string;
                  }) => {
                    SignInSuccess({
                      accessToken: res.accessToken,
                      refreshToken: res.refreshToken,
                    });

                    err.config.headers.Authorization = `Bearer ${res.accessToken}`;
                    resolve(httpClient(err.config));
                  },
                  onError: async (refreshErr: any) => {
                    await AsyncStorage.removeItem('accessToken');
                    await AsyncStorage.removeItem('refreshToken');
                    showErrorToast('Session Expired', 'Please log in again');
                    navigation.navigate('Login');
                    reject(refreshErr);
                  },
                },
              );
            });
          }
        }

        switch (status) {
          case 403:
            console.warn('⚠️ Access forbidden:', err.config?.url);
            showErrorToast(
              'Access Denied',
              'You do not have permission to access this resource',
            );
            break;

          case 404:
            console.warn('⚠️ Resource not found:', err.config?.url);
            showErrorToast(
              'Not Found',
              'The requested information could not be found',
            );
            break;

          case 422:
            const validationMessage =
              err.response?.data?.message || 'Invalid data provided';
            showErrorToast('Validation Error', validationMessage);
            break;

          default:
            if (status >= 500) {
              console.error('Server error:', err.response?.data);
              showErrorToast(
                'Server Error',
                'A server error occurred. Please try again later',
              );
            } else {
              const errorMessage =
                err.response?.data?.message || 'An unexpected error occurred';
              showErrorToast('Error', errorMessage);
            }
        }

        return Promise.reject(err);
      },
    );

    return () => {
      httpClient.interceptors.response.eject(interceptor);
    };
  }, [HandleRefresh, navigation]);
};
