import { RouteProp } from '@react-navigation/native';
import { MySchoolStackParamList } from '../../../../app/navigation/MySchoolStackNavigator/MySchoolStackNavigator.types';

export type Team = {
  id: string;
  tournamentId: string;
  name: string;
  logoUrl: string;
  matchType: number;
};

export type RenderTeamProps = {
  item: Team;
  isLoading: boolean;
  id: string;
  refetch: () => void;
};

export type AddTeamModalProps = {
  visible: boolean;
  onClose: () => void;
  currId: string | null;
};

export type EditTeamModalProps = {
  visible: boolean;
  onClose: () => void;
  id: string;
};

export type AddTeamType = {
  Name: string;
  LogoFile: {
    uri: string;
  };
};

export type TournamentTeamsProp = RouteProp<
  MySchoolStackParamList,
  'MySchoolTournamentTeamsDetailScreen'
>;
