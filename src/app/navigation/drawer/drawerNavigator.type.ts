import { NavigatorScreenParams } from "@react-navigation/native";

export type TournamentStackParamList = {
  TournamentTabs: {
    tournamentId: string;
  };
};

export type DrawerNavigationType = {
  navigate(arg0: string): unknown;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  MyAccount: undefined;
  MySchool: undefined;
  ChangePasswordScreen: undefined;
  forgotPassword:undefined;
  resetPassword:undefined;
  Tournament:NavigatorScreenParams<TournamentStackParamList>;
  MyTournaments:undefined;
};
