import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/overview.styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardContainer = () => {
  return (
    <View style={styles.headerCardContainer}>
    
                <View style={styles.headerCard}>
                  <View style={styles.headerCardTitleContainer}>
                    <Icon name='earth' size={17} color='#7c828f'/>
                    <Text style={styles.headerCardText}>Status</Text>
                  </View>
                  <View style={styles.headerCardBottomContainer}>
                    <Text style={styles.headerCardBottomContainerInnerText}>hello</Text>
                  </View>
                </View>
    
                <View style={styles.headerCard}>
                   <View style={styles.headerCardTitleContainer}>
                    <Icon name='account-multiple-outline' size={17} color='#7c828f'/>
                    <Text style={styles.headerCardText}>Teams</Text>
                  </View>
                  <View style={styles.headerCardBottomContainer}>
                    <Text style={styles.headerCardBottomContainerInnerText}>hello</Text>
                  </View>
                </View>
    
                <View style={styles.headerCard}>
                  <View style={styles.headerCardTitleContainer}>
                    <Icon name='map-marker' size={17} color='#7c828f'/>
                    <Text style={styles.headerCardText}>location</Text>
                  </View>
                  <View style={styles.headerCardBottomContainer}>
                    <Text style={styles.headerCardBottomContainerInnerText}>hello</Text>
                  </View>
                </View>
    
              </View>
  )
}

export default CardContainer