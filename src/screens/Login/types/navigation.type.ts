import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home:undefined;
  Login:undefined;
  Register:undefined;
}

export type NavigationProp = NativeStackNavigationProp<RootStackParamList,'Register'>;
