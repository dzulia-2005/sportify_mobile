import React from 'react'
import { Image, TouchableOpacity,Text,View } from 'react-native'
import { styles } from '../styles/index.style'

const TournamentCard = ({item}:any) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.info}>გუნდები: {item.teams}</Text>
        <Text style={styles.info}>თარიღი: {item.date}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default TournamentCard