import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles/teams.styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import imageSource from "../../../../shared/assets/images/58-583825_team-icon-png-round-transparent-png.png";
import { GetTeamResponse } from '../../../../shared/api/team/index.type';

type Prop = {
  item:GetTeamResponse
}

const TeamCard:React.FC<Prop> = ({item}) => {
  return (
  <View style={styles.cardTeams}>
                  <View style={styles.rightSide}>
                    <Image 
                      style={styles.image} 
                      resizeMode="cover" 
                      source={imageSource} 
                    />
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