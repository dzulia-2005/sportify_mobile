import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/stats.style'
import { Prop } from '../types/stat.type'

const Card:React.FC<Prop> = ({
    label,
    isLastIndex,
    item,
    value
}) => {
  return (
    <View key={item.id}>
        <View style={styles.row}>
          <View style={styles.leftSide}>
            <Text style={styles.fullName}>{item.firstName}</Text>
            <Text style={styles.shortName}>{item.lastName}</Text>
          </View>
    
          <Text style={styles.valueText}>
            {label}: {value}
          </Text>
        </View>
        {!isLastIndex && <View style={styles.divider} />}
    </View>
  )
}

export default Card