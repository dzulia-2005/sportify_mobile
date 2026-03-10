import React from 'react'
import { Text } from 'react-native'
import { styles } from '../styles/index.style'

const Email:React.FC = () => {
  return (
    <Text style={styles.TextContainer}>
        <Text style={styles.textKey}>Email: </Text>
        <Text style={styles.textValue}> dzuliashvilinika016@gmail.com </Text>
    </Text>
  )
}

export default Email