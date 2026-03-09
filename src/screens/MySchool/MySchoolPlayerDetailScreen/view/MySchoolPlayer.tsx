import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/header';
import { styles } from '../styles/index.styles';
import PlayerStat from '../components/playerStat';
import { useGetByIdQuery } from '../../../../feature/school/mySchoolPlayer/getById/model/useGetByIdQuery';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MySchoolStackParamList } from '../../../../app/navigation/mySchoolStackNavigator/mySchoolStackNavigator.types';

type PlayerDetailProp = RouteProp<
  MySchoolStackParamList,
  'MySchoolPlayerDetailTeam'
>;

const MySchoolPlayer = () => {
  const route = useRoute<PlayerDetailProp>();
  const { playerId } = route.params;
  const { data: Player, isLoading } = useGetByIdQuery(playerId);

  return (
    <ScrollView style={styles.container}>
      <Header Player={Player} isLoading={isLoading} />
      <PlayerStat Player={Player} />
    </ScrollView>
  );
};

export default MySchoolPlayer;
