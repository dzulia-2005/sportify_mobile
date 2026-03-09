import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatPackagePeriod } from '../utils/formatPackagePeriod';

type FormatPeriodProp = {
  startUtc: string | undefined;
  endUtc: string | undefined;
  planName: string | undefined;
};

const FormatPeriod: React.FC<FormatPeriodProp> = ({
  startUtc,
  endUtc,
  planName,
}) => {
  if (!startUtc || !endUtc) {
    return (
      <View style={styles.inactiveContainer}>
        <Text style={styles.inactiveText}>You do not have an active package.</Text>
      </View>
    );
  }

  const { startText, endText, isExpired, leftLabel } = formatPackagePeriod(
    startUtc,
    endUtc,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.planName}>{planName ?? 'Subscription'}</Text>

      <View style={styles.statusRow}>
        <View
          style={[
            styles.dot,
            { backgroundColor: isExpired ? '#f87171' : '#4ade80' },
          ]}
        />

        <Text style={styles.statusText}>
          {isExpired ? 'The package has expired.' : 'The package is active.'}
        </Text>

        {!isExpired && leftLabel ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{leftLabel}</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.infoWrapper}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Activated: </Text>
          <Text style={styles.value}>{startText}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Expires: </Text>
          <Text style={styles.value}>{endText}</Text>
        </View>
      </View>
    </View>
  );
};

export default FormatPeriod;

const styles = StyleSheet.create({
  inactiveContainer: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  inactiveText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
  container: {
    alignSelf: 'flex-start',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  planName: {
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '700',
    color: '#86efac',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    marginRight: 8,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  badge: {
    marginLeft: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
  },
  infoWrapper: {
    marginTop: 8,
    gap: 4,
  },
  infoRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  label: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.5)',
  },
  value: {
    fontSize: 12,
    color: '#ffffff',
  },
});