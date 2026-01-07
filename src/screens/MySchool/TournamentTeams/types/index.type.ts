import { StackNavigationProp } from '@react-navigation/stack';
import { MySchoolStackParamList } from '../../../../app/navigation/MySchoolStackNavigator/MySchoolStackNavigator.types';

export type AddMatchModalProps = {
  visible: boolean;
  onClose: () => void;
};

export type addTournamentType = {
  name: string;
  startDate: string;
  endDate: string;
  mySchoolId: string;
  matchType: number;
};

export type NavigationProp = StackNavigationProp<MySchoolStackParamList>;
