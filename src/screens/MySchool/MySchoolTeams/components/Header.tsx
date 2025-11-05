import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/mainStyles'

const Header:React.FC = () => {
  return (
    <View style={styles.HeaderContainer}>
            <Text style={styles.HeaderTitle}>MySchool Teams</Text>
            <View style={styles.HeaderBtnContainer}>
              <Text style={styles.HeaderBtnTitle}>Add Team +</Text>
            </View>
          </View>
  )
}

export default Header