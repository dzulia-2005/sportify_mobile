import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/mainStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { MySchoolStackParamList } from '../../../../app/navigation/MySchoolStackNavigator/MySchoolStackNavigator.types';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = StackNavigationProp<MySchoolStackParamList>;

const RenderItem = ({ item }: { item: any }) => {
  const navigation = useNavigation<NavigationProp>();
  const handlePress = () => {
    navigation.navigate('MySchoolPlayerDetailTeam');
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.row}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../../shared/assets/images/icon-7797704_640.png')}
          style={styles.image}
        />
      </View>
      <Text style={[styles.cell, { flex: 2 }]}>{item.name}</Text>
      <Text style={[styles.cell, { flex: 1 }]}>{item.position}</Text>
      <Text style={[styles.cell, { flex: 1, color: '#00aaff' }]}>
        {item.goals}
      </Text>
      <Text style={[styles.cell, { flex: 1 }]}>{item.team}</Text>
    </TouchableOpacity>
  );
};

export default RenderItem;
