import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import imageSource from "../../../../shared/assets/images/icon-7797704_640.png"
import { styles } from '../styles/player.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const PlayerCard = () => {
  return (
    <TouchableOpacity style={styles.cardTeams}>
      <View style={styles.rightSide}>
        <Image 
          style={styles.image} 
          resizeMode="cover" 
          source={imageSource} 
        />
        <View>
          <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Nikoloz Dzuliashvili</Text>
          <Text style={{color:'#fff',fontWeight:'bold'}}>GoalKeeper</Text>
        </View>
      </View>
      <View>
          <Icon name='chevron-right' size={30} color='#9CA3AF'/>
      </View>
    </TouchableOpacity>
  )
}

export default PlayerCard;