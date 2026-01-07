import { RouteProp } from '@react-navigation/native';
import { Root2 } from '../../../../shared/api/mySchoolTeams/index.type';
import { MySchoolStackParamList } from '../../../../app/navigation/MySchoolStackNavigator/MySchoolStackNavigator.types';

export type AddPlayerType = {
  FirstName: string;
  LastName: string;
  Position: string;
  ParentFirstName: string;
  ParentLastName: string;
  ParentPhoneNumber: string;
  ProfilePictureFile: {
    uri: string;
  };
  MySchoolId: string;
  UserId: string;
  TeamId: string;
};

export type AddMatchModalProps = {
  visible: boolean;
  onClose: () => void;
  teamId: string;
};

export type TeamDetailProp = {
  TeamDetail: Root2 | undefined;
  isLoading: boolean;
  teamId: string;
};

export type TeamDetailRouteProp = RouteProp<
  MySchoolStackParamList,
  'MySchoolTeamDetailScreen'
>;
