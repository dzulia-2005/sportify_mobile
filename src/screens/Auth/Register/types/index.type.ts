import { DrawerNavigationProp } from '@react-navigation/drawer';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerNavigationType } from '../../../../app/navigation/drawerNavigator.type';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;


export type NavigationProps = DrawerNavigationProp<DrawerNavigationType>;
export type RegisterType = {
  userName: string;
  password: string;
  email: string;
};