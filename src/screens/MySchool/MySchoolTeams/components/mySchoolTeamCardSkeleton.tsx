import React, { useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const TeamCardSkeleton = () => {
  const translateX = useRef(new Animated.Value(-width)).current;

  return (
    <View style={styles.card}>
      <View style={styles.left}>
        {/* Image skeleton */}
        <View style={styles.imageWrapper}>
          <Animated.View
            style={[styles.shimmer, { transform: [{ translateX }] }]}
          />
        </View>

        {/* Text skeleton */}
        <View style={styles.textSkeleton}>
          <Animated.View
            style={[styles.shimmer, { transform: [{ translateX }] }]}
          />
        </View>
      </View>

      {/* Icon skeleton */}
      <View style={styles.iconSkeleton} />
    </View>
  );
};

export default TeamCardSkeleton;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#112244',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#08162c',
    overflow: 'hidden',
    marginRight: 12,
  },

  textSkeleton: {
    width: 140,
    height: 16,
    borderRadius: 4,
    backgroundColor: '#08162c',
    overflow: 'hidden',
  },

  iconSkeleton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#08162c',
  },

  shimmer: {
    width: '40%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
});
