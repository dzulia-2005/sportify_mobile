import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerNavigationType } from '../../../../app/navigation/DrawerNavigator.type';

export type ChangePasswordType = {
  UserName: string;
  newPassword: string;
};

export type NavigationProp = DrawerNavigationProp<DrawerNavigationType>;
