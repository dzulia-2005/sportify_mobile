import React from 'react';
import { View, Animated } from 'react-native';
import { styles } from '../styles/skeleton.styles';

type Props = {
  translateX: Animated.AnimatedInterpolation<string | number>;
};

const OverviewSkeleton: React.FC<Props> = ({ translateX }) => {
  return (
    <View style={styles.overviewContainer}>
      <View style={styles.header}>

        {/* Image Skeleton */}
        <View style={styles.skeletonImageContainer}>
          <Animated.View
            style={[
              styles.shimmer,
              { transform: [{ translateX }] },
            ]}
          />
        </View>

        {/* Cards Skeleton */}
        <View style={styles.headerCardContainer}>
          {[1, 2, 3].map((_, index) => (
            <View key={index} style={styles.headerCard}>
              <View style={styles.skeletonTextSmall}>
                <Animated.View
                  style={[
                    styles.shimmer,
                    { transform: [{ translateX }] },
                  ]}
                />
              </View>

              <View style={styles.skeletonTextLarge}>
                <Animated.View
                  style={[
                    styles.shimmer,
                    { transform: [{ translateX }] },
                  ]}
                />
              </View>
            </View>
          ))}
        </View>

        {/* Timeline Skeleton */}
        <View style={styles.tournamentTimeLineContainer}>
          <View style={styles.skeletonTextMedium}>
            <Animated.View
              style={[
                styles.shimmer,
                { transform: [{ translateX }] },
              ]}
            />
          </View>

          <View style={styles.timeRangeContainer}>
            {[1, 2].map((_, index) => (
              <View key={index}>
                <View style={styles.skeletonTextSmall}>
                  <Animated.View
                    style={[
                      styles.shimmer,
                      { transform: [{ translateX }] },
                    ]}
                  />
                </View>

                <View style={styles.skeletonTextSmall}>
                  <Animated.View
                    style={[
                      styles.shimmer,
                      { transform: [{ translateX }] },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>

      </View>
    </View>
  );
};

export default OverviewSkeleton;