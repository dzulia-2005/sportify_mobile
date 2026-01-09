import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from './MySchoolStackNavigatorIcons';
import { useCallback } from 'react';

export type MySchoolStackParamList = {
  MySchoolTabs: undefined;
  MySchoolTeamDetailScreen: {
    teamId: string;
  };
  MySchoolPlayerDetailTeam: {
    playerId: string;
  };
  MySchoolTeamsDetailScreen: undefined;
  MySchoolTournamentMatches: undefined;
  MySchoolTournamentScores: undefined;
};

export const HeaderLeft = () => {
  const navigation = useNavigation();
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return <ArrowLeft onPress={handleGoBack} />;
};
