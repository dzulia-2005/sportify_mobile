import { NavigatorScreenParams } from '@react-navigation/native';
import { TournamentTabNavigatorType } from '../tabs/tournament/tournamentTabsNavigator/tournamenTabNavigator.type';

export type TournamentStackParamList = {
  TournamentTabs: NavigatorScreenParams<TournamentTabNavigatorType> & {
    tournamentId: string;
  };
  TeamDetailScreen: {
    teamId: string;
  };
  PlayerDetailScreen: {
    playerId: string;
    teamId: string;
  };
};

export type DrawerNavigationType = {
  navigate(arg0: string): unknown;
  Home: undefined;
  AboutUs: undefined;
  Pricing: undefined;
  Login: undefined;
  Register: undefined;
  MyAccount: undefined;
  MySchool: undefined;
  ChangePasswordScreen: undefined;
  forgotPassword: undefined;
  resetPassword: undefined;
  Tournament: NavigatorScreenParams<TournamentStackParamList>;
  MyTournaments: undefined;
};
