import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from '../styles/TableStyles';

const MyTeamTable = () => {
  const players = [
    {
      id: '1',
      name: 'Nikoloz Dzuliashvili',
      position: 'Forward',
      goals: 5,
      matches: 10,
      yellow: 1,
      red: 0,
    },
    {
      id: '2',
      name: 'Gabo Gabridze',
      position: 'Goalkeeper',
      goals: 0,
      matches: 8,
      yellow: 0,
      red: 1,
    },
    {
      id: '3',
      name: 'Luka Makharadze',
      position: 'Midfielder',
      goals: 2,
      matches: 9,
      yellow: 2,
      red: 0,
    },
  ];

  return (
    <View style={styles.outerContainer}>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={[styles.headerText, { width: 80 }]}>Image</Text>
            <Text style={[styles.headerText, { width: 150 }]}>Name</Text>
            <Text style={[styles.headerText, { width: 100 }]}>Position</Text>
            <Text style={[styles.headerText, { width: 80 }]}>Goals</Text>
            <Text style={[styles.headerText, { width: 90 }]}>Matches</Text>
            <Text style={[styles.headerText, { width: 80 }]}>🟨</Text>
            <Text style={[styles.headerText, { width: 80 }]}>🟥</Text>
          </View>

          <ScrollView style={{ maxHeight: 400 }}>
            {players.map((item) => (
              <View key={item.id} style={styles.row}>
                <View style={[styles.imageContainer, { width: 80 }]}>
                  <Image
                    source={require('../../../../assets/images/icon-7797704_640.png')}
                    style={styles.image}
                  />
                </View>
                <Text style={[styles.cell, { width: 150 }]}>{item.name}</Text>
                <Text style={[styles.cell, { width: 100 }]}>{item.position}</Text>
                <Text style={[styles.cell, { width: 80, color: '#00aaff' }]}>{item.goals}</Text>
                <Text style={[styles.cell, { width: 90 }]}>{item.matches}</Text>
                <Text style={[styles.cell, { width: 80, color: '#ffcc00' }]}>{item.yellow}</Text>
                <Text style={[styles.cell, { width: 80, color: '#ff4444' }]}>{item.red}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyTeamTable;
