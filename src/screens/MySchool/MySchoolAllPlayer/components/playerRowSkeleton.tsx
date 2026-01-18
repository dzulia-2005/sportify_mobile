import React, { useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const PlayerRowSkeleton = () => {
  const translateX = useRef(new Animated.Value(-width)).current;

  return (
    <View style={styles.row}>
      {/* Avatar */}
      <View style={styles.imageContainer}>
        <View style={styles.avatarSkeleton}>
          <Animated.View
            style={[styles.shimmer, { transform: [{ translateX }] }]}
          />
        </View>
      </View>

      {/* Name */}
      <View style={[styles.textSkeleton, { flex: 2 }]}>
        <Animated.View
          style={[styles.shimmer, { transform: [{ translateX }] }]}
        />
      </View>

      {/* Position */}
      <View style={[styles.textSkeleton, { flex: 1 }]}>
        <Animated.View
          style={[styles.shimmer, { transform: [{ translateX }] }]}
        />
      </View>

      {/* Goals */}
      <View style={[styles.textSkeleton, { flex: 1 }]}>
        <Animated.View
          style={[styles.shimmer, { transform: [{ translateX }] }]}
        />
      </View>

      {/* Team */}
      <View style={[styles.textSkeleton, { flex: 1 }]}>
        <Animated.View
          style={[styles.shimmer, { transform: [{ translateX }] }]}
        />
      </View>
    </View>
  );
};

export default PlayerRowSkeleton;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0e1630',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1a2444',
  },

  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },

  avatarSkeleton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#121d3a',
    overflow: 'hidden',
  },

  textSkeleton: {
    height: 14,
    borderRadius: 4,
    backgroundColor: '#121d3a',
    marginHorizontal: 6,
    overflow: 'hidden',
  },

  shimmer: {
    width: '40%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
});
