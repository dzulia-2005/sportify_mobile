import AsyncStorage from '@react-native-async-storage/async-storage';

export const SignInSuccess = async ({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) => {
  await AsyncStorage.multiSet([
    ["accessToken",accessToken],
    ["refreshToken",refreshToken]
  ]);
};
