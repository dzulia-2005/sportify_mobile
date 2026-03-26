import React from 'react';
import { Image, TouchableOpacity, Text, View, Animated } from 'react-native';
import { styles } from '../styles/index.style';
import { useNavigation } from '@react-navigation/native';
import { props, TournamentNavigationProp } from '../types/index.type';
import Img from '../../../../shared/assets/images/img.png';
import { formatDate } from '../../../../shared/utils/formatDate';
import { useShimmerAnimation } from '../../../../shared/hooks/useShimmerAnimation';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const TournamentCard: React.FC<props> = ({ item, isLoading }) => {
  const navigation = useNavigation<TournamentNavigationProp>();
  const { t } = useI18n();
  const { translateX } = useShimmerAnimation(isLoading);
  const imageSource = item.tournamentLogo ? { uri: item.tournamentLogo } : Img;

  const handlePress = () => {
    if (isLoading) return;

    navigation.navigate('Tournament', {
      screen: 'TournamentTabs',
      params: {
        tournamentId: item.id,
      },
    } as any);
  };

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={handlePress}
    >
      <View>
        {isLoading ? (
          <View style={styles.skeletonImageContainer}>
            <Animated.View
              style={[
                styles.shimmer,
                {
                  transform: [{ translateX }],
                },
              ]}
            />
          </View>
        ) : (
          <Image source={imageSource} style={styles.image} resizeMode="cover" />
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.info}>
          {t('Teams:')} {item.teams.length}
        </Text>
        <Text style={styles.info}>
          {t('Date:')} {formatDate(item.startDate)} - {formatDate(item.endDate)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TournamentCard;
