import React from 'react'
import { Text } from 'react-native'
import { styles } from '../styles/index.style'

const FullName = () => {
  return (
     <Text style={styles.TextContainer}>
        <Text style={styles.textKey}>FullName: </Text>
        <Text style={styles.textValue}> Nikoloz </Text>
     </Text>
  )
}

export default FullName