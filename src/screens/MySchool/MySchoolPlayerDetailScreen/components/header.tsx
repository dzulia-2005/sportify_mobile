import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { styles } from '../styles/index.styles';
import { HeaderProp } from '../types/index.type';
import EditMySchoolPlayerModal from './editPlayerModal';

const Header: React.FC<HeaderProp> = ({ Player, isLoading }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const imageSource = Player?.profilePictureUrl
    ? { uri: Player.profilePictureUrl }
    : require('../../../../shared/assets/images/icon-7797704_640.png');

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
            toValue: 0,
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
    <View style={styles.avatarContainer}>
      {isLoading ? (
        <View style={styles.skeletonContainer}>
          <Animated.View
            style={[styles.shimmer, { transform: [{ translateX }] }]}
          />
        </View>
      ) : (
        <Image source={imageSource} style={styles.avatar} />
      )}
      <Text style={styles.name}>
        {Player?.firstName} {Player?.lastName}
      </Text>
      <Text style={styles.position}>{Player?.position}</Text>
      <Text style={styles.team}>{Player?.teamName}</Text>
      <View style={styles.actionRow}>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => setIsOpenModal(true)}
        >
          <Text style={styles.actionText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteBtn}>
          <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
      </View>

      {isOpenModal && (
        <EditMySchoolPlayerModal
          visible={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          Player={Player}
        />
      )}
    </View>
  );
};

export default Header;
