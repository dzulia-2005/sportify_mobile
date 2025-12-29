import React from 'react';
import { View } from 'react-native';
import MySchoolTeams from '../components/MySchoolTeamsTable';
import { styles } from '../styles/MainStyle';
import MySchoolInfoContainer from '../components/MySchoolImageContainer';
import MySchoolInfo from '../components/MySchoolInfo';

const MySchoolOverview: React.FC = () => {
  return (
    <View style={styles.container}>
      <MySchoolInfoContainer />
      <MySchoolInfo />
      <MySchoolTeams />
    </View>
  );
};

export default MySchoolOverview;
