import React from 'react'
import { Image, TouchableOpacity,Text,View } from 'react-native'
import { styles } from '../styles/index.style'
import { GetAllTournamentResponse } from '../../../tournament/matches/types/match.type'
import { useNavigation } from '@react-navigation/native'
import { TournamentTabNavigatorType } from '../../../../app/navigation/tabs/tournament/tournamentTabsNavigator/tournamenTabNavigator.type'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

type props = {
  item:GetAllTournamentResponse
}

type TournamentNavigationProp = BottomTabNavigationProp<
  TournamentTabNavigatorType,
  'teams'
>;
const TournamentCard:React.FC<props> = ({item}) => {
  const navigate = useNavigation<TournamentNavigationProp>();

  return (
    <TouchableOpacity 
      style={styles.card} 
      activeOpacity={0.8}
      onPress={()=>navigate.navigate('overView',{tournamentId:item.id})}
    >
      <Image source={{ uri: item.tournamentLogo }} style={styles.image} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.info}>Teams: {item.teams.length}</Text>
        <Text style={styles.info}>Date: {item.startDate} - {item.endDate}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default TournamentCard;