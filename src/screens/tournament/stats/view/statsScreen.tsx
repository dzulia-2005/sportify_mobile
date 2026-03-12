import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const scorers = [
  {
    id: 1,
    fullName: 'lazare dzuliashvili',
    shortName: 'nika',
    value: 20,
  },
  {
    id: 2,
    fullName: 'nikoloz dzuliashvili',
    shortName: 'temo',
    value: 1,
  },
];

const bestPlayers = [
  {
    id: 1,
    fullName: 'giorgi beridze',
    shortName: 'gio',
    value: 9.4,
  },
  {
    id: 2,
    fullName: 'nika lomidze',
    shortName: 'nika',
    value: 8.8,
  },
];

const StatsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'topScorers' | 'bestPlayers'>('topScorers');

  const data = activeTab === 'topScorers' ? scorers : bestPlayers;
  const title = activeTab === 'topScorers' ? 'Top Scorers' : 'Best Players';
  const label = activeTab === 'topScorers' ? 'Goal' : 'Assist';

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.content}>
        <View style={styles.tabWrapper}>
          <TouchableOpacity
            activeOpacity={0.85}
            style={[styles.tabButton, activeTab === 'topScorers' && styles.activeTabButton]}
            onPress={() => setActiveTab('topScorers')}
          >
            <Text style={[styles.tabText, activeTab === 'topScorers' && styles.activeTabText]}>
              Top Scorers
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            style={[styles.tabButton, activeTab === 'bestPlayers' && styles.activeTabButton]}
            onPress={() => setActiveTab('bestPlayers')}
          >
            <Text style={[styles.tabText, activeTab === 'bestPlayers' && styles.activeTabText]}>
              Best Players
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{title}</Text>

          {data.map((item, index) => (
            <View key={item.id}>
              <View style={styles.row}>
                <View style={styles.leftSide}>
                  <Text style={styles.fullName}>{item.fullName}</Text>
                  <Text style={styles.shortName}>{item.shortName}</Text>
                </View>

                <Text style={styles.valueText}>
                  {label}: {item.value}
                </Text>
              </View>

              {index !== data.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StatsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#071a2f',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  tabWrapper: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  tabButton: {
    backgroundColor: '#44506a',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  activeTabButton: {
    backgroundColor: '#11b44b',
    borderWidth: 2,
  },
  tabText: {
    color: '#e5e7eb',
    fontSize: 18,
    fontWeight: '700',
  },
  activeTabText: {
    color: '#ffffff',
  },
  card: {
    backgroundColor: '#12284d',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#223a63',
    padding: 18,
  },
  cardTitle: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 72,
  },
  leftSide: {
    flex: 1,
    paddingRight: 12,
  },
  fullName: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
    textTransform: 'lowercase',
  },
  shortName: {
    color: '#a7b4c8',
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'lowercase',
  },
  valueText: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '800',
  },
  divider: {
    height: 1,
    backgroundColor: '#2a4067',
    marginVertical: 8,
  },
});