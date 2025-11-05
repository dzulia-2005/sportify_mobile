import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/mainStyles'

const RenderHeader = () => {
  return (
    <View style={styles.header}>
          <Text style={[styles.headerText, { flex: 1 }]}>Image</Text>
          <Text style={[styles.headerText, { flex: 2 }]}>Name</Text>
          <Text style={[styles.headerText, { flex: 1 }]}>Position</Text>
          <Text style={[styles.headerText, { flex: 1 }]}>Goals</Text>
          <Text style={[styles.headerText, { flex: 1 }]}>Team</Text>
        </View>
  )
}

export default RenderHeader