import { DrawerNavigationProp } from "@react-navigation/drawer";
import { GetAllTournamentResponse } from "../../../tournament/matches/types/match.type"
import { DrawerNavigationType } from "../../../../app/navigation/drawer/drawerNavigator.type";

export type props = {
  item:GetAllTournamentResponse,
  isLoading:boolean
};

export type TournamentNavigationProp = DrawerNavigationProp<
  DrawerNavigationType,
  'MyTournaments'
>;