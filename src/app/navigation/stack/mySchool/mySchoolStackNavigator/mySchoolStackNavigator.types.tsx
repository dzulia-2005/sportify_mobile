import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from './mySchoolStackNavigatorIcons';
import { useCallback } from 'react';

export type MySchoolStackParamList = {
  ChangePasswordScreen: undefined;
  MySchoolTabs: undefined;
  MySchoolTeamDetailScreen: {
    teamId: string;
  };
  MySchoolPlayerDetailTeam: {
    playerId: string;
  };
  MySchoolTournamentTeamsDetailScreen: {
    tournamentId: string;
  };
  MySchoolTournamentMatches: {
    tournamentId: string;
  };
  MySchoolTournamentScores: {
    tournamentId: string;
  };
  MySchoolTeamsDetailScreen: {
    tournamentId: string;
  };
};

export const HeaderLeft = () => {
  const navigation = useNavigation();
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return <ArrowLeft onPress={handleGoBack} />;
};
