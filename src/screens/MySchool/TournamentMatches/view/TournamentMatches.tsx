import React from 'react'
import { ScrollView, View } from 'react-native'
import Header from '../components/Header'
import { styles } from '../styles/mainStyles'
import TeamCard from '../components/TeamCard'



const TournamentMatches:React.FC = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView 
        contentContainerStyle={styles.CardListContainer}
        showsVerticalScrollIndicator={false}
      >
        <TeamCard/>
      </ScrollView>
    </View>
  )
}


export default TournamentMatches