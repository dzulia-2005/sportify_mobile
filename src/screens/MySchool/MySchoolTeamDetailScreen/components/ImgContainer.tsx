import React, { useEffect, useRef } from 'react';
import { Animated, Image, View } from 'react-native';
import { styles } from '../styles/MainStyles';
import { TeamDetailProp } from '../types/index.type';
import LogoImg from '../../../../shared/assets/images/58-583825_team-icon-png-round-transparent-png.png';

const ImgContainer: React.FC<TeamDetailProp> = ({ TeamDetail, isLoading }) => {
  const imageSource = TeamDetail?.logoUrl
    ? { uri: TeamDetail.logoUrl }
    : LogoImg;
  const shimmerAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(shimmerAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(shimmerAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    } else {
      shimmerAnimation.setValue(0);
      shimmerAnimation.stopAnimation();
    }
  }, [isLoading, shimmerAnimation]);

  const translateX = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 100],
  });

  return (
    <View style={styles.ImgMainContainer}>
      <View style={styles.ImgContainer}>
        {isLoading ? (
          <View style={styles.skeletonContainer}>
            <Animated.View
              style={[styles.shimmer, { transform: [{ translateX }] }]}
            />
          </View>
        ) : (
          <Image style={styles.Img} source={imageSource} resizeMode="cover" />
        )}
      </View>
    </View>
  );
};

export default ImgContainer;
