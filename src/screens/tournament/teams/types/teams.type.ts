import { RouteProp } from '@react-navigation/native';
import { GetTeamResponse } from '../../../../shared/api/team/index.type';
import { TournamentTabNavigatorType } from '../../../../app/navigation/tabs/tournament/tournamentTabsNavigator/tournamenTabNavigator.type';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TournamentStackParamList } from '../../../../app/navigation/drawer/drawerNavigator.type';

export type Prop = {
  item: GetTeamResponse;
  isLoading: boolean;
};

export type TeamsRouteProp = RouteProp<TournamentTabNavigatorType, 'teams'>;
export type TournamentNavigationProp =
  NativeStackNavigationProp<TournamentStackParamList>;

export type AddTeamModalProps = {
  visible: boolean;
  onClose: () => void;
  tournamentId: string;
};

export type EditTeamModalProps = {
  visible: boolean;
  onClose: () => void;
  tournamentId: string;
  Id: string;
};

export type HeaderProp = {
  tournamentId: string;
};
