import React, { useEffect, useRef } from 'react';
import {
  Animated,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { styles } from '../styles/mainStyles';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../types/index.type';
import { useGetMySchoolQuery } from '../../../../feature/school/mySchool/getSchool/model/useGetMySchoolQuery';
import { useGetTeamBySchoolIdQuery } from '../../../../feature/school/mySchoolTeams/getTeamBySchool/model/useGetTeamBySchoolIdQuery';
import NotFoundText from './NotFoundText';
import TeamCardSkeleton from './mySchoolTeamCardSkeleton';

const TeamCard: React.FC = () => {
  const { data: school } = useGetMySchoolQuery();
  const schoolId = school?.id;
  const { data: TEAMS = [], isLoading } = useGetTeamBySchoolIdQuery(schoolId!);

  const navigation = useNavigation<NavigationProp>();
  const shimmerAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(shimmerAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(shimmerAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    } else {
      shimmerAnimation.stopAnimation();
      shimmerAnimation.setValue(0);
    }
  }, [isLoading, shimmerAnimation]);

  const translateX = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 100],
  });

  const handlePress = (teamId: string) => {
    navigation.navigate('MySchoolTeamDetailScreen', {
      teamId: teamId,
    });
  };

  if (isLoading) {
    return <TeamCardSkeleton />;
  }

  return (
    <>
      <FlatList
        data={TEAMS}
        ListEmptyComponent={NotFoundText}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePress(item.id)}
            style={styles.CardContainer}
          >
            <View style={styles.CardLeftSide}>
              <View style={styles.imageWrapper}>
                {isLoading ? (
                  <View style={styles.skeletonContainer}>
                    <Animated.View
                      style={[styles.shimmer, { transform: [{ translateX }] }]}
                    />
                  </View>
                ) : (
                  <Image
                    source={{
                      uri: item.logoUrl
                        ? item.logoUrl
                        : 'https://upload.wikimedia.org/wikipedia/ka/7/78/FC_Dinamo_Tbilisi_Logo_%28v.3%29.png',
                    }}
                    style={styles.image}
                    resizeMode="contain"
                  />
                )}
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
