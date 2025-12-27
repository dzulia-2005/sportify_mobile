import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../styles/mainStyles'

const RenderItem = ({item}:{item:any}) => {
  return (
     <View style={styles.row}>
          <View style={styles.imageContainer}>
            <Image source={require("../../../../shared/assets/images/icon-7797704_640.png")} style={styles.image} />
          </View>
          <Text style={[styles.cell, { flex: 2 }]}>{item.name}</Text>
          <Text style={[styles.cell, { flex: 1 }]}>{item.position}</Text>
          <Text style={[styles.cell, { flex: 1, color: '#00aaff' }]}>{item.goals}</Text>
          <Text style={[styles.cell, { flex: 1 }]}>{item.team}</Text>
        </View>
  )
}

export default RenderItem