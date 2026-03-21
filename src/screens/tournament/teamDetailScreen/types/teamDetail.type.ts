import { RouteProp } from '@react-navigation/native';
import { TournamentStackParamList } from '../../../../app/navigation/drawer/drawerNavigator.type';
import { GetTeamResponse } from '../../../../shared/api/team/index.type';

export type RouteType = RouteProp<TournamentStackParamList, 'TeamDetailScreen'>;

export type headerListComponentType = {
  teamData: GetTeamResponse;
};

export type AddPlayerModalProps = {
  visible: boolean;
  onClose: () => void;
  teamId: string;
};
