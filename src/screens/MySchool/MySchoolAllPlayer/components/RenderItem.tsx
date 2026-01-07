import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/mainStyles';
import { useNavigation } from '@react-navigation/native';
import { MySchoolPlayersResponse } from '../../../../shared/api/mySchoolPlayer/index.type';
import { NavigationProp } from '../types/index.type';

const RenderItem = ({ item }: { item: MySchoolPlayersResponse }) => {
  const navigation = useNavigation<NavigationProp>();
  const handlePress = () => {
    navigation.navigate('MySchoolPlayerDetailTeam');
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.row}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: item.profilePictureUrl
              ? item.profilePictureUrl
              : '../../../../shared/assets/images/icon-7797704_640.png',
          }}
          style={styles.image}
        />
      </View>
      <Text style={[styles.cell, { flex: 2 }]}>{item.firstName}</Text>
      <Text style={[styles.cell, { flex: 1 }]}>{item.position}</Text>
      <Text style={[styles.cell, { flex: 1, color: '#00aaff' }]}>
        {item.goals}
      </Text>
      <Text style={[styles.cell, { flex: 1 }]}>{item.teamName}</Text>
    </TouchableOpacity>
  );
};

export default RenderItem;
