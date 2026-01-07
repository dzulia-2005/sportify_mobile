import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/TeamsStyles';
import { SchoolProp } from '../types/index.type';
import NotFoundComponent from './notFoundComponent';

const MySchoolTeams: React.FC<SchoolProp> = ({ school }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My School Teams</Text>
      </View>
      <FlatList
        data={school?.teams}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.table}
        ListEmptyComponent={NotFoundComponent}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log(item.name);
            }}
          >
            <View style={styles.row}>
              <View style={styles.logoContainer}>
                <Image
                  source={{ uri: item.logoUrl }}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MySchoolTeams;
