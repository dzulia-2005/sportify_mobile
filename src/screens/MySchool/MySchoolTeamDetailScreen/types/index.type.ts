import { RouteProp } from '@react-navigation/native';
import { Root2 } from '../../../../shared/api/mySchoolTeams/index.type';
import { StackNavigationProp } from '@react-navigation/stack';

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
  birthDate: string;
  Nationality: string;
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

type MySchoolStackParamList = {
  MySchoolTabs: undefined;
  MySchoolTeamDetailScreen: { teamId: string };
  MySchoolPlayerDetailTeam: { playerId: string };
  MySchoolTeamsDetailScreen: { teamId: string };
  MySchoolTournamentMatches: { matchId: string };
  MySchoolTournamentScores: undefined;
};

export type TeamDetailScreenProp = StackNavigationProp<
  MySchoolStackParamList,
  'MySchoolTeamDetailScreen'
>;

export type EditSchoolTeamModal = {
  visible: boolean;
  onClose: () => void;
};

export type EditSchoolTeamsType = {
  Name: string;
  LogoFile: {
    uri: string;
  };
};
