import { RouteProp } from '@react-navigation/native';
import { TournamentTabNavigatorType } from '../../../../app/navigation/tabs/tournament/tournamentTabsNavigator/tournamenTabNavigator.type';
import { GetAllTournamentResponse } from '../../../../shared/api/tournament/index.type';


export type Prop = {
  tournament?:GetAllTournamentResponse;
}

export type overViewProp = {
  route:RouteProp<TournamentTabNavigatorType,'overView'>
}