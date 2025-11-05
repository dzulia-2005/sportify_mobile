import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from '../styles/MainStyles'
import { Text, View } from 'react-native'


const TeamTableHeader = () => {
  return (
    <View style={styles.playerContainer}>
          <Text style={styles.playerTitle}>Players</Text>
          <View style={styles.AddBtnContainer}>
              <Text style={styles.AddPlayerBtn}> 
                <MaterialCommunityIcons name="plus-circle-outline" color="#fff" size={20} /> Add
              </Text>
          </View>
        </View>
  )
}

export default TeamTableHeader