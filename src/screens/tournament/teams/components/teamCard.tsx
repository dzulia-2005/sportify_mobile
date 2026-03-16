import React from 'react'
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles/teams.styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import image from "../../../../shared/assets/images/58-583825_team-icon-png-round-transparent-png.png";
import { Prop } from '../types/teams.type';
import { useShimmerAnimation } from '../../../../shared/hooks/useShimmerAnimation';

const TeamCard:React.FC<Prop> = ({
  item,
  isLoading
}) => {

  const {translateX} = useShimmerAnimation(isLoading);
  const imageSource = item.logoUrl ? {uri:item.logoUrl} : image;

  return (
  <View style={styles.cardTeams}>
                  <View style={styles.rightSide}>
                    <View>
                      {isLoading ? (
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
                          source={imageSource}
                          style={styles.image}
                          resizeMode="cover"
                        />
                      )}
                    </View>
                    <View>
                      <Text style={{color:'#fff',fontWeight:'bold'}}>{item.name}</Text>
                      <Text style={{color:'#fff',fontWeight:'bold'}}>{item.players.length}</Text>
                    </View>
                  </View>
    
                  <View>
                    <View style={styles.btnContainer}>
                      <TouchableOpacity>
                        <Icon name='pencil-circle-outline' size={30} color='#4968e4'/>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Icon name='delete-circle' size={30} color='#be3636'/>
                      </TouchableOpacity>
                    </View>
                  </View>
              </View>
  )
}

export default TeamCard