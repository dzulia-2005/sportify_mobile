import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/MainStyle'

const MySchoolInfo = () => {
  return (
    <View style={styles.InfoContainer}>
        <Text style={styles.schoolName}>თბილისის სახელმწიფო სკოლა</Text>
        <Text style={styles.schoolFounded}>დაარსდა: 2008 წელი</Text>
        <View style={styles.AddSchoolBtn}>
            <Text style={styles.AddSchoolBtnTitle}>Create School +</Text>
        </View>
      </View>
  )
}

export default MySchoolInfo