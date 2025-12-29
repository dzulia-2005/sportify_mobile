import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { styles } from '../styles/mainStyles';
import { useNavigation } from '@react-navigation/native';
import { MySchoolStackParamList } from '../../../../app/navigation/MySchoolStachNavigator/MySchoolStackNavigator.types';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<
  MySchoolStackParamList,
  'MySchoolTabs'
>;

const TeamCard: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('MySchoolTeamDetailScreen');
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.CardContainer}>
      <View style={styles.CardLeftSide}>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/ka/7/78/FC_Dinamo_Tbilisi_Logo_%28v.3%29.png',
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.TeamTitle}>U16</Text>
      </View>

      <View>
        <EvilIcons name="external-link" color="#fff" size={30} />
      </View>
    </TouchableOpacity>
  );
};

export default TeamCard;
