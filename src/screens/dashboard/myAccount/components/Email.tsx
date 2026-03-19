import React from 'react'
import { Text } from 'react-native'
import { styles } from '../styles/index.style'
import { MeProp } from '../types/myAccount.type'


const Email:React.FC<MeProp> = ({
  Me
}) => {
  return (
    <Text style={styles.TextContainer}>
        <Text style={styles.textKey}>Email: </Text>
        <Text style={styles.textValue}> {Me?.email} </Text>
    </Text>
  )
}

export default Email