import React, { useEffect, useRef } from 'react';
import { View, Text, Image, ScrollView, Animated } from 'react-native';
import { styles } from '../styles/TableStyles';
import { TeamDetailProp } from '../types/index.type';

const MyTeamTable: React.FC<TeamDetailProp> = ({ TeamDetail, isLoading }) => {
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

  const imageSource = (image: string) =>
    TeamDetail?.logoUrl
      ? { uri: image }
      : require('../../../../shared/assets/images/icon-7797704_640.png');

  return (
    <View style={styles.outerContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={[styles.headerText, { width: 80 }]}>Image</Text>
            <Text style={[styles.headerText, { width: 150 }]}>Name</Text>
            <Text style={[styles.headerText, { width: 100 }]}>Position</Text>
            <Text style={[styles.headerText, { width: 80 }]}>Goals</Text>
            <Text style={[styles.headerText, { width: 90 }]}>Matches</Text>
            <Text style={[styles.headerText, { width: 80 }]}>🟨</Text>
            <Text style={[styles.headerText, { width: 80 }]}>🟥</Text>
          </View>

          <ScrollView style={{ maxHeight: 400 }}>
            {TeamDetail?.players.map(item => (
              <View key={item.id} style={styles.row}>
                <View style={[styles.imageContainer, { width: 80 }]}>
                  {isLoading ? (
                    <View style={styles.skeletonContainer}>
                      <Animated.View
                        style={[
                          styles.shimmer,
                          { transform: [{ translateX }] },
                        ]}
                      />
                    </View>
                  ) : (
                    <Image
                      source={imageSource(item.profilePictureUrl)}
                      style={styles.image}
                    />
                  )}
                </View>
                <Text style={[styles.cell, { width: 150 }]}>
                  {item.firstName}
                </Text>
                <Text style={[styles.cell, { width: 100 }]}>
                  {item.position}
                </Text>
                <Text style={[styles.cell, { width: 80, color: '#00aaff' }]}>
                  {item.goals}
                </Text>
                <Text style={[styles.cell, { width: 90 }]}>
                  {item.matchesPlayed}
                </Text>
                <Text style={[styles.cell, { width: 80, color: '#ffcc00' }]}>
                  {item.yellowCards}
                </Text>
                <Text style={[styles.cell, { width: 80, color: '#ff4444' }]}>
                  {item.redCards}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyTeamTable;
