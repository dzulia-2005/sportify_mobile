import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { styles } from '../styles/mainStyles';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../types/index.type';
import { useGetMySchoolQuery } from '../../../../feature/mySchool/getSchool/model/useGetMySchoolQuery';
import { useGetTeamBySchoolIdQuery } from '../../../../feature/mySchoolTeams/getTeamBySchool/model/useGetTeamBySchoolIdQuery';
import NotFoundText from './NotFoundText';

const TeamCard: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('MySchoolTeamDetailScreen');
  };

  const { data: school } = useGetMySchoolQuery();
  const schoolId = school?.id;
  const { data: TEAMS = [] } = useGetTeamBySchoolIdQuery(schoolId!);

  return (
    <>
      <FlatList
        data={TEAMS}
        ListEmptyComponent={NotFoundText}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handlePress} style={styles.CardContainer}>
            <View style={styles.CardLeftSide}>
              <View style={styles.imageWrapper}>
                <Image
                  source={{
                    uri: item.logoUrl
                      ? item.logoUrl
                      : 'https://upload.wikimedia.org/wikipedia/ka/7/78/FC_Dinamo_Tbilisi_Logo_%28v.3%29.png',
                  }}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.TeamTitle}>{item.name}</Text>
            </View>

            <View>
              <EvilIcons name="external-link" color="#fff" size={30} />
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default TeamCard;
