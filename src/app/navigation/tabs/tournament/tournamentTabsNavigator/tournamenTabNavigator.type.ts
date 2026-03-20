import { RouteProp } from '@react-navigation/native';
import { TournamentStackParamList } from '../../../drawer/drawerNavigator.type';

export type TournamentTabNavigatorType = {
  matches: {
    tournamentId: string;
  };
  overView: {
    tournamentId: string;
  };
  teams: {
    tournamentId: string;
  };
  player: {
    tournamentId: string;
  };
  stats: {
    tournamentId: string;
  };
  scores: {
    tournamentId: string;
  };
};

export type TournamentTabsRouteProp = RouteProp<
  TournamentStackParamList,
  'TournamentTabs'
>;
