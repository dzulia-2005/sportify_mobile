import React, { useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const TournamentCardSkeleton = () => {
  const translateX = useRef(new Animated.Value(-width)).current;

  return (
    <View style={styles.card}>
      {/* Left title skeleton */}
      <View style={styles.titleSkeleton}>
        <Animated.View
          style={[styles.shimmer, { transform: [{ translateX }] }]}
        />
      </View>

      {/* Right icons skeleton */}
      <View style={styles.icons}>
        <View style={styles.iconSkeleton}>
          <Animated.View
            style={[styles.shimmer, { transform: [{ translateX }] }]}
          />
        </View>
        <View style={styles.iconSkeleton}>
          <Animated.View
            style={[styles.shimmer, { transform: [{ translateX }] }]}
          />
        </View>
      </View>
    </View>
  );
};

export default TournamentCardSkeleton;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0b1b33',
    width: '100%',
    height: 100,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  titleSkeleton: {
    width: 160,
    height: 18,
    borderRadius: 4,
    backgroundColor: '#132247',
    overflow: 'hidden',
  },

  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  iconSkeleton: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#132247',
    overflow: 'hidden',
  },

  shimmer: {
    width: '40%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
});
