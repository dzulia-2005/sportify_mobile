import React from 'react';
import { ScrollView } from 'react-native';
import MyTeamTable from '../components/MyTeamTable';
import { styles } from '../styles/MainStyles';
import ImgContainer from '../components/ImgContainer';
import TeamInfoContainer from '../components/TeamInfoContainer';
import TeamTableHeader from '../components/TeamTableHeader';
import { useGetByIdQuery } from '../../../../feature/school/mySchoolTeams/getById/model/useGetByIdQuery';
import { useRoute } from '@react-navigation/native';
import { TeamDetailRouteProp } from '../types/index.type';

const MySchoolTeamDetail = () => {
  const route = useRoute<TeamDetailRouteProp>();
  const { teamId } = route.params;
  const { data: TeamDetail, isLoading } = useGetByIdQuery(teamId!);
  return (
    <ScrollView style={styles.container}>
      <ImgContainer
        TeamDetail={TeamDetail}
        isLoading={isLoading}
        teamId={teamId}
      />
      <TeamInfoContainer
        TeamDetail={TeamDetail}
        isLoading={isLoading}
        teamId={teamId}
      />
      <TeamTableHeader
        TeamDetail={TeamDetail}
        isLoading={isLoading}
        teamId={teamId}
      />
      <MyTeamTable
        TeamDetail={TeamDetail}
        isLoading={isLoading}
        teamId={teamId}
      />
    </ScrollView>
  );
};

export default MySchoolTeamDetail;
