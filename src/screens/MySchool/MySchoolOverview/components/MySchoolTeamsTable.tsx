import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/TeamsStyles';
import { SchoolProp } from '../types/index.type';
import NotFoundComponent from './notFoundComponent';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../mySchoolTeams/types/index.type';
import MySchoolTeamsSkeleton from './SkeletonTeams';
import EmptyImage from "../../../../shared/assets/images/58-583825_team-icon-png-round-transparent-png.png";

const MySchoolTeams: React.FC<SchoolProp> = ({ school, isLoading }) => {
  const navigation = useNavigation<NavigationProp>();
  const handlePress = (teamId: string) => {
    navigation.navigate('MySchoolTeamDetailScreen', {
      teamId,
    });
  };

  if (isLoading) {
    return <MySchoolTeamsSkeleton />;
  }

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
          <TouchableOpacity onPress={() => handlePress(item.id)}>
            <View style={styles.row}>
              <View style={styles.logoContainer}>
                <Image
                  source={item.logoUrl ? { uri: item.logoUrl } : EmptyImage}
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
