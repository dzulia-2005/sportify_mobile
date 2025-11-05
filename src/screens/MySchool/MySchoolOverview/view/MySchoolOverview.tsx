import React from 'react'
import {ScrollView} from 'react-native'
import MySchoolTeams from '../components/MySchoolTeamsTable'
import { styles } from '../styles/MainStyle'
import MySchoolInfoContainer from '../components/MySchoolImageContainer'
import MySchoolInfo from '../components/MySchoolInfo'

const MySchoolOverview:React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      
      <MySchoolInfoContainer/>

      <MySchoolInfo/>

      <MySchoolTeams/>

    </ScrollView>
  )
}

export default MySchoolOverview