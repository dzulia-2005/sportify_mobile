import React from 'react';
import { View, StyleSheet } from 'react-native';

const SkeletonRow = () => {
  return (
    <View style={styles.row}>
      <View style={styles.logoSkeleton} />
      <View style={styles.textSkeleton} />
    </View>
  );
};

const MySchoolTeamsSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleSkeleton} />

      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonRow key={index} />
      ))}
    </View>
  );
};

export default MySchoolTeamsSkeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1b33',
    paddingTop: 40,
    paddingHorizontal: 15,
  },

  titleSkeleton: {
    width: 180,
    height: 24,
    borderRadius: 6,
    backgroundColor: '#112244',
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#112244',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#00c95122',
  },

  logoSkeleton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#08162c',
    marginRight: 15,
  },

  textSkeleton: {
    flex: 1,
    height: 16,
    borderRadius: 4,
    backgroundColor: '#08162c',
  },
});
