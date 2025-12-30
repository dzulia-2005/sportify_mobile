import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { styles } from '../styles/mainStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MySchoolStackParamList } from '../../../../app/navigation/MySchoolStackNavigator/MySchoolStackNavigator.types';

type NavigationProp = StackNavigationProp<MySchoolStackParamList>;

const TeamCard: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MySchoolTournamentScores')}
      style={styles.CardContainer}
    >
      <View style={styles.CardLeftSide}>
        <Text style={styles.TeamTitle}>My Tournaments</Text>
      </View>

      <View>
        <EvilIcons name="external-link" color="#fff" size={30} />
      </View>
    </TouchableOpacity>
  );
};

export default TeamCard;
