import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StageHeaderProps {
  title: string;
  color: 'yellow' | 'purple' | 'blue' | 'orange';
  count: number;
}

const StageHeader: React.FC<StageHeaderProps> = ({ title, color, count }) => {
  const colorStyles = {
    yellow: styles.yellowHeader,
    purple: styles.purpleHeader,
    blue: styles.blueHeader,
    orange: styles.orangeHeader,
  };

  return (
    <View style={[styles.stageHeader, colorStyles[color]]}>
      <Text style={styles.stageTrophy}>🏆</Text>
      <Text style={styles.stageTitle}>{title}</Text>
      <Text style={styles.stageCount}>({count} მატჩი)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderLeftWidth: 4,
    paddingLeft: 12,
    marginBottom: 16,
  },
  yellowHeader: {
    borderLeftColor: '#fbbf24',
  },
  purpleHeader: {
    borderLeftColor: '#a855f7',
  },
  blueHeader: {
    borderLeftColor: '#3b82f6',
  },
  orangeHeader: {
    borderLeftColor: '#fb923c',
  },
  stageTrophy: {
    fontSize: 18,
  },
  stageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fbbf24',
  },
  stageCount: {
    fontSize: 12,
    color: '#fff9',
  },
});

export default StageHeader;
