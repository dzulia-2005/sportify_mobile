import React, { useEffect, useRef } from 'react';
import { Animated, Image, View } from 'react-native';
import { styles } from '../styles/MainStyle';
import { SchoolProp } from '../types/index.type';

const MySchoolImageContainer: React.FC<SchoolProp> = ({
  school,
  isLoading,
}) => {
  const imageSource = school?.logoUrl
    ? { uri: school.logoUrl }
    : require('../../../../shared/assets/images/58-583825_team-icon-png-round-transparent-png.png');

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
    <View style={styles.ImageMainContainer}>
      <View style={styles.ImageContainer}>
        {isLoading ? (
          <View style={styles.skeletonContainer}>
            <Animated.View
              style={[styles.shimmer, { transform: [{ translateX }] }]}
            />
          </View>
        ) : (
          <Image style={styles.image} resizeMode="cover" source={imageSource} />
        )}
      </View>
    </View>
  );
};

export default MySchoolImageContainer;
