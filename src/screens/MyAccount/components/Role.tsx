import React from 'react'
import { Text } from 'react-native'
import { styles } from '../styles/index.style'

const Role:React.FC = () => {
  return (
    <Text style={styles.TextContainer}>
                    <Text style={styles.textKey}>Role:  </Text>
                    <Text style={styles.textValue}> Tournament Admin </Text>
                </Text>
  )
}

export default Role