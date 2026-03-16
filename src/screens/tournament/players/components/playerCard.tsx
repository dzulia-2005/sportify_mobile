import React from 'react'
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native'
import imageSource from "../../../../shared/assets/images/icon-7797704_640.png"
import { styles } from '../styles/player.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Prop } from '../types/players.type';
import { useShimmerAnimation } from '../../../../shared/hooks/useShimmerAnimation';

const PlayerCard:React.FC<Prop> = ({
  item,
  isLoading
}) => {
  const {translateX} = useShimmerAnimation(isLoading);
  return (
    <TouchableOpacity style={styles.cardTeams}>
      <View style={styles.rightSide}>
        <View>
          {
            isLoading ? (
              <View style={styles.skeletonImageContainer}>
                <Animated.View
                  style={[
                    styles.shimmer,
                    {
                      transform: [{ translateX }],
                    },
                  ]}
                />
              </View>
            ):(
              <Image 
                style={styles.image} 
                resizeMode="cover" 
                source={imageSource} 
              />
            )
          }
        </View>
        <View>
          <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>{item.firstName} {item.lastName}</Text>
          <Text style={{color:'#fff',fontWeight:'bold'}}>{item.position}</Text>
        </View>
      </View>
      <View>
          <Icon name='chevron-right' size={30} color='#9CA3AF'/>
      </View>
    </TouchableOpacity>
  )
}

export default PlayerCard;