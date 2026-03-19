import React from 'react'
import { Text } from 'react-native'
import { styles } from '../styles/index.style'
import { MeProp } from '../types/myAccount.type'

const FullName:React.FC<MeProp> = ({
   Me
}) => {
  return (
     <Text style={styles.TextContainer}>
        <Text style={styles.textKey}>FullName: </Text>
        <Text style={styles.textValue}> {Me?.userName} </Text>
     </Text>
  )
}

export default FullName