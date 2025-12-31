import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;
