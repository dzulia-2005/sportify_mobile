import React from 'react'
import { Image, Text, View } from 'react-native'
import imageSource from "../../../../shared/assets/images/icon-7797704_640.png"
import { styles } from '../styles/player.style'

const PlayerCard = () => {
  return (
    <View style={styles.cardTeams}>
              <View style={styles.rightSide}>
                <Image 
                  style={styles.image} 
                  resizeMode="cover" 
                  source={imageSource} 
                />
                <View>
                  <Text style={{color:'#fff',fontWeight:'bold'}}>name</Text>
                  <Text style={{color:'#fff',fontWeight:'bold'}}>members: 0</Text>
                </View>
              </View>
            </View>
  )
}

export default PlayerCard