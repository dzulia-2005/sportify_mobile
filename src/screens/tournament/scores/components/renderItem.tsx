import React from 'react'
import { styles } from '../styles/scores.style'
import { Text, View } from 'react-native'
import { Prop } from '../types/score.type'



const RenderItem:React.FC<Prop> = ({
    index,
    item
}) => {
  return (
    <View style={styles.row}>
          <Text style={styles.cell}>{index + 1}</Text>
          <Text style={[styles.cell, styles.team]}>{item.teamName}</Text>
          <Text style={styles.cell}>{item.gamePlayer}</Text>
          <Text style={styles.cell}>{item.wins}</Text>
          <Text style={styles.cell}>{item.draws}</Text>
          <Text style={styles.cell}>{item.losses}</Text>
          <Text style={[styles.cell, styles.points]}>{item.points}</Text>
        </View>
  )
}

export default RenderItem