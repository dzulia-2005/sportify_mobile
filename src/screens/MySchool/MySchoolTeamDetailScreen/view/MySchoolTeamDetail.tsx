import React from 'react'
import { ScrollView } from 'react-native'
import MyTeamTable from '../components/MyTeamTable'
import { styles } from '../styles/MainStyles'
import ImgContainer from '../components/ImgContainer'
import TeamInfoContainer from '../components/TeamInfoContainer'
import TeamTableHeader from '../components/TeamTableHeader'

const MySchoolTeamDetail = () => {
  return (
    <ScrollView style={styles.container}>
        <ImgContainer/>

        <TeamInfoContainer/>

        <TeamTableHeader/>

        <MyTeamTable/>

    </ScrollView>
  )
}

export default MySchoolTeamDetail