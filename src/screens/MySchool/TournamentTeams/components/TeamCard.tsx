import React from 'react'
import { Text, View } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { styles } from '../styles/mainStyles'

const TeamCard:React.FC = () => {
  return (
    <View style={styles.CardContainer}>
              <View style={styles.CardLeftSide}>
                <Text style={styles.TeamTitle}>My Tournaments</Text>
              </View>
    
              <View>
                <EvilIcons name="external-link" color="#fff" size={30}/>
              </View>
    
            </View>
  )
}

export default TeamCard