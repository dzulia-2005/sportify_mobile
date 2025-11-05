import React from 'react'
import { Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { styles } from '../styles/MainStyles'

const TeamInfoContainer = () => {
  return (
    <View style={styles.TeamInfoMainContainer}>
            <View style={styles.TeamDetailInfo}>
                <Text style={styles.TeamInfoTitle}>U16 Team</Text>
                <Text style={styles.TeamInfoPlayersCount}>Team Players : 1 </Text>
                
                <View style={styles.ButtonsContainer}>

                  <View style={styles.EditBtnContainer}>
                    <Text style={styles.EditBtnTitle}>
                      Edit <Feather name="edit-3" color="#fff" size={20} />
                    </Text>
                  </View>

                  <View style={styles.DeleteBtnContainer}>
                    <Text style={styles.EditBtnTitle}>
                      Delete <AntDesign name="delete" color="#fff" size={20} />
                    </Text>
                  </View>

                </View>
            </View>
        </View>
  )
}

export default TeamInfoContainer