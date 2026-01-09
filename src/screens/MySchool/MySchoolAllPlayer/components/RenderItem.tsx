import React, { useEffect, useRef } from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/mainStyles';
import { useNavigation } from '@react-navigation/native';
import { MySchoolPlayersResponse } from '../../../../shared/api/mySchoolPlayer/index.type';
import { NavigationProp } from '../types/index.type';

const RenderItem = ({
  item,
  isLoading,
}: {
  item: MySchoolPlayersResponse;
  isLoading: boolean;
}) => {
  const navigation = useNavigation<NavigationProp>();
  const handlePress = () => {
    navigation.navigate('MySchoolPlayerDetailTeam', {
      playerId: item.id,
    });
  };

  const imageSource = item.profilePictureUrl
    ? { uri: item.profilePictureUrl }
    : require('../../../../shared/assets/images/icon-7797704_640.png');

  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(shimmerAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(shimmerAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    } else {
      shimmerAnim.stopAnimation();
      shimmerAnim.setValue(0);
    }
  }, [isLoading, shimmerAnim]);

  const translateX = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 100],
  });

  return (
    <TouchableOpacity onPress={handlePress} style={styles.row}>
      <View style={styles.imageContainer}>
        {isLoading ? (
          <View style={styles.skeletonContainer}>
            <Animated.View
              style={[styles.shimmer, { transform: [{ translateX }] }]}
            />
          </View>
        ) : (
          <Image source={imageSource} style={styles.image} />
        )}
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
