import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface InfoBoxProps {
  matchType: number;
  hasKnockoutStages?: boolean;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  matchType,
  hasKnockoutStages = false,
}) => {
  const types: Record<number, string> = {
    0: 'Format: (Round Robin)',
    1: 'Format: Single-Elimination Knockout',
    2: 'Format: Double-Leg Knockout (Aggregate Score)',
  };

  return (
    <View style={styles.infoBox}>
      <Text style={styles.formatText}>{types[matchType]}</Text>
      {hasKnockoutStages && (
        <Text style={styles.knockoutText}>The Tournament Has Final Stages</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    marginBottom: 32,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#0b1830',
    borderWidth: 1,
    borderColor: '#3b82f633',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  formatText: {
    fontWeight: '500',
    color: '#ffffffcc',
    fontSize: 14,
  },
  knockoutText: {
    color: '#4ade80',
    fontSize: 14,
    marginTop: 4,
  },
});

export default InfoBox;
