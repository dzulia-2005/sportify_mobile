import React from 'react'
import { Text } from 'react-native'
import { styles } from '../styles/index.style'

const Subscription:React.FC = () => {
  return (
    <Text style={styles.TextContainer}>
                    <Text style={styles.textKey}>Subscription Active: </Text>
                    <Text style={styles.textValue}> Active ✅ </Text>
                </Text>
  )
}

export default Subscription