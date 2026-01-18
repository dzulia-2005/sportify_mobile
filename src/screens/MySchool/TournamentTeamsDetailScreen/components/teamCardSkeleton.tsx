import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const TeamCardSkeleton = () => {
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: width,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: -width,
          duration: 0,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [translateX]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Logo Skeleton */}
        <View style={styles.logoWrapper}>
          <Animated.View
            style={[styles.shimmer, { transform: [{ translateX }] }]}
          />
        </View>

        {/* Action buttons skeleton */}
        <View style={styles.actions}>
          <View style={styles.actionBtn}>
            <Animated.View
              style={[styles.shimmer, { transform: [{ translateX }] }]}
            />
          </View>
          <View style={styles.actionBtn}>
            <Animated.View
              style={[styles.shimmer, { transform: [{ translateX }] }]}
            />
          </View>
        </View>

        {/* Title Skeleton */}
        <View style={styles.titleSkeleton}>
          <Animated.View
            style={[styles.shimmer, { transform: [{ translateX }] }]}
          />
        </View>
      </View>
    </View>
  );
};

export default TeamCardSkeleton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0b1b33',
    paddingVertical: 8,
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
    overflow: 'hidden',
    position: 'relative',
  },
  logoWrapper: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#0f172a',
    alignSelf: 'center',
    marginBottom: 12,
    overflow: 'hidden',
  },
  actions: {
    position: 'absolute',
    top: 12,
    right: 12,
    flexDirection: 'row',
    gap: 8,
  },
  actionBtn: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#0f172a',
    overflow: 'hidden',
  },
  titleSkeleton: {
    width: '70%',
    height: 20,
    borderRadius: 6,
    backgroundColor: '#0f172a',
    alignSelf: 'center',
    marginTop: 8,
    overflow: 'hidden',
  },
  shimmer: {
    width: '40%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
});
