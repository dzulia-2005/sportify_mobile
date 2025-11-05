import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from '../styles/TeamsStyles';

const teams = [
  {
    id: '1',
    name: 'Dinamo Tbilisi',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/38/FC_Dinamo_Tbilisi_logo.png',
  },
  {
    id: '2',
    name: 'Saburtalo FC',
    logo: 'https://upload.wikimedia.org/wikipedia/ka/6/67/%E1%83%A1%E1%83%99_%E1%83%A1%E1%83%90%E1%83%91%E1%83%A3%E1%83%A0%E1%83%97%E1%83%90%E1%83%9A%E1%83%9D%E1%83%A1_%E1%83%9A%E1%83%9D%E1%83%92%E1%83%9D.png',
  },
  {
    id: '3',
    name: 'Locomotive Tbilisi',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Locomotive_logo.png',
  },
];

const MySchoolTeams = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ჩემი სკოლის გუნდები</Text>
      </View>
      <FlatList
        data={teams}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.table}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.logoContainer}>
              <Image source={{ uri: item.logo }} style={styles.logo} resizeMode="contain" />
            </View>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};



export default MySchoolTeams;
