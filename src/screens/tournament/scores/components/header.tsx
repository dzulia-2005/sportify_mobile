import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/scores.style'

const Header:React.FC = () => {
  return (
    <View style={[styles.row, styles.header]}>
            <Text style={styles.headerCell}>#</Text>
            <Text style={[styles.headerCell, styles.team]}>Team</Text>
            <Text style={styles.headerCell}>GP</Text>
            <Text style={styles.headerCell}>W</Text>
            <Text style={styles.headerCell}>D</Text>
            <Text style={styles.headerCell}>L</Text>
            <Text style={styles.headerCell}>Pts</Text>
          </View>
  )
}

export default Header