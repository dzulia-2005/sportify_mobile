import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/overview.styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GetAllTournamentResponse } from '../../../../shared/api/tournament/index.type';

type Prop = {
  tournament?:GetAllTournamentResponse;
}

const CardContainer:React.FC<Prop> = ({tournament}) => {

  return (
    <View style={styles.headerCardContainer}>
    
                <View style={styles.headerCard}>
                  <View style={styles.headerCardTitleContainer}>
                    <Icon name='earth' size={17} color='#7c828f'/>
                    <Text style={styles.headerCardText}>Status</Text>
                  </View>
                  <View style={styles.headerCardBottomContainer}>
                    <Text style={styles.headerCardBottomContainerInnerText}>{tournament?.isPublic === true ? "Public" : "Private"}</Text>
                  </View>
                </View>
    
                <View style={styles.headerCard}>
                   <View style={styles.headerCardTitleContainer}>
                    <Icon name='account-multiple-outline' size={17} color='#7c828f'/>
                    <Text style={styles.headerCardText}>Teams</Text>
                  </View>
                  <View style={styles.headerCardBottomContainer}>
                    <Text style={styles.headerCardBottomContainerInnerText}>{tournament?.name}</Text>
                  </View>
                </View>
    
                <View style={styles.headerCard}>
                  <View style={styles.headerCardTitleContainer}>
                    <Icon name='map-marker' size={17} color='#7c828f'/>
                    <Text style={styles.headerCardText}>location</Text>
                  </View>
                  <View style={styles.headerCardBottomContainer}>
                    <Text style={styles.headerCardBottomContainerInnerText}>{tournament?.location}</Text>
                  </View>
                </View>
    
              </View>
  )
}

export default CardContainer