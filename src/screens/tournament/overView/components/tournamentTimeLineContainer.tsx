import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/overview.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const TournamentTimeLineContainer:React.FC = () => {
  return (
    <View style={styles.tournamentTimeLineContainer}>
                  <View style={styles.timeLineTextContainer}>
                    <Icon name='clock-fast' size={20} color='#fff'/>
                    <Text style={styles.timeLineText}>Tournament TimeLine</Text>
                  </View>
                  <View style={styles.timeRangeContainer}>
                    <View>
                      <Text style={styles.timeRangeText}>Start Date</Text>
                      <Text style={styles.timeRangeText}>01/02/2025</Text>
                    </View>
                    <View>
                      <Text style={styles.timeRangeText}>End Date</Text>
                      <Text style={styles.timeRangeText}>01/02/2025</Text>
                    </View>
                  </View>
                </View>
  )
}

export default TournamentTimeLineContainer