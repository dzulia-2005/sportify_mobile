import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerNavigationType } from '../../../../app/navigation/DrawerNavigator.type';

export type NavigationProp = DrawerNavigationProp<
  DrawerNavigationType,
  'Login'
>;

export type LoginType = {
  userName: string;
  password: string;
};
