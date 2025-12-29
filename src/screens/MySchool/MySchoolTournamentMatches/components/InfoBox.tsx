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
    0: 'ფორმატი: წრიული ტურნირი',
    1: 'ფორმატი: ერთჯერადი ელიმინაცია',
    2: 'ფორმატი: ორმხრივი ელიმინაცია',
  };

  return (
    <View style={styles.infoBox}>
      <Text style={styles.infoText}>{types[matchType]}</Text>
      {hasKnockoutStages && (
        <Text style={styles.infoSubtext}>ტურნირს აქვს ფინალური ეტაპები</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: '#0b1830',
    borderWidth: 1,
    borderColor: '#3b82f620',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  infoText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
  },
  infoSubtext: {
    color: '#4ade80',
    fontSize: 12,
  },
});

export default InfoBox;
