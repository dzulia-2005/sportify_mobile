import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/mainStyles'

const Header:React.FC = () => {
  return (
         <View style={styles.HeaderContainer}>
            <Text style={styles.HeaderTitle}>Tournaments Teams
            </Text>
          </View>
  )
}

export default Header