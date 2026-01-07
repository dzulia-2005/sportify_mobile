import { StackNavigationProp } from '@react-navigation/stack';
import { MySchoolStackParamList } from '../../../../app/navigation/MySchoolStackNavigator/MySchoolStackNavigator.types';

export type AddTeamModalProps = {
  visible: boolean;
  onClose: () => void;
};

export type AddTeamType = {
  Name: string;
  MySchoolId: string;
  LogoFile: {
    uri: string;
  };
};

export type NavigationProp = StackNavigationProp<
  MySchoolStackParamList,
  'MySchoolTabs'
>;
