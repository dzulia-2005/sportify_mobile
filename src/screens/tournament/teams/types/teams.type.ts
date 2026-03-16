import { RouteProp } from "@react-navigation/native";
import { GetTeamResponse } from "../../../../shared/api/team/index.type"
import { TournamentTabNavigatorType } from "../../../../app/navigation/tabs/tournament/tournamentTabsNavigator/tournamenTabNavigator.type";

export type Prop = {
  item:GetTeamResponse;
  isLoading:boolean;
}

export type TeamsRouteProp = RouteProp<TournamentTabNavigatorType, 'teams'>;


export type AddTeamModalProps = {
  visible: boolean;
  onClose: () => void;
  tournamentId:string
};

export type HeaderProp = {
  tournamentId:string
}