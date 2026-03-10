import React from 'react';
import { View } from 'react-native';
import MySchoolTeams from '../components/MySchoolTeamsTable';
import { styles } from '../styles/MainStyle';
import MySchoolInfoContainer from '../components/MySchoolImageContainer';
import MySchoolInfo from '../components/MySchoolInfo';
import { useGetMySchoolQuery } from '../../../../feature/school/mySchool/getSchool/model/useGetMySchoolQuery';

const MySchoolOverview: React.FC = () => {
  const { data: school, refetch, isLoading } = useGetMySchoolQuery();

  return (
    <View style={styles.container}>
      <MySchoolInfoContainer
        school={school}
        refetch={refetch}
        isLoading={isLoading}
      />
      <MySchoolInfo 
        school={school} 
        refetch={refetch} 
        isLoading={isLoading} 
      />
      <MySchoolTeams 
        school={school} 
        refetch={refetch} 
        isLoading={isLoading} 
      />
    </View>
  );
};

export default MySchoolOverview;
