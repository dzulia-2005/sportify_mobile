import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles/teams.styles'

const Header:React.FC = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>Tournament Name</Text>
        <TouchableOpacity style={styles.addTeamBtn}>
          <Text style={styles.btnText}>+ Add Team</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Header