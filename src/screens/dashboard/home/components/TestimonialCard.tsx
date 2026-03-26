import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from '../styles/TestiMonialCardStyles';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const TestimonialCard = () => {
  const { t } = useI18n();

  return (
    <View style={styles.CardContainer}>
      <View style={styles.headerText}>
        <Text style={styles.HeaderFirstText}>{t('What Our Users Say')}</Text>
        <Text style={styles.HeaderSecondText}>{t('Hear from tournament')}</Text>
        <Text style={styles.HeaderSecondText}>
          {t('organizers and players worldwide.')}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.quote}>
          {t('This platform made managing tournaments super easy!')}
        </Text>

        <View style={styles.userContainer}>
          <View style={styles.avatar}>
            <Icon name="user" size={24} color="#9CA3AF" />
          </View>
          <Text style={styles.userName}>John Doe</Text>
        </View>

        <Text style={styles.role}>{t('Organizer')}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.quote}>
          {t('Track team stats effortlessly. Highly recommended!')}
        </Text>
        <View style={styles.userContainer}>
          <View style={styles.avatar}>
            <Icon name="user" size={24} color="#9CA3AF" />
          </View>
          <Text style={styles.userName}>Jane Smith</Text>
        </View>

        <Text style={styles.role}>{t('Organizer')}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.quote}>
          {t('Love the clean interface and live updates!')}
        </Text>

        <View style={styles.userContainer}>
          <View style={styles.avatar}>
            <Icon name="user" size={24} color="#9CA3AF" />
          </View>
          <Text style={styles.userName}>Mike Johnson</Text>
        </View>

        <Text style={styles.role}>{t('Organizer')}</Text>
      </View>
    </View>
  );
};

export default TestimonialCard;
