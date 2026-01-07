import { RouteProp } from '@react-navigation/native';
import { Root2 } from '../../../../shared/api/mySchoolTeams/index.type';
import { MySchoolStackParamList } from '../../../../app/navigation/MySchoolStackNavigator/MySchoolStackNavigator.types';

export type AddPlayerType = {
  firstName: string;
  lastName: string;
  position: string;
  parentFirstName: string;
  parentLastName: string;
  parentPhoneNumber: string;
  ProfilePictureFile: {
    uri: string;
  };
  teamId: string;
  MySchoolId: string;
  UserId: string;
};

export type AddMatchModalProps = {
  visible: boolean;
  onClose: () => void;
};

export type TeamDetailProp = {
  TeamDetail: Root2 | undefined;
  isLoading: boolean;
};

export type TeamDetailRouteProp = RouteProp<
  MySchoolStackParamList,
  'MySchoolTeamDetailScreen'
>;
