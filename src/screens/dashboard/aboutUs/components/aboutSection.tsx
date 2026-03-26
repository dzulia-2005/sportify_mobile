import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/aboutUs.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const AboutSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Icon name="information-outline" size={22} color="#2563EB" />
        <Text style={styles.sectionTitle}>{t('About Us')}</Text>
      </View>

      <Text style={styles.text}>
        {t(
          'Sportify is a platform where sports organizations can register their schools and manage them efficiently in one place.',
        )}
      </Text>

      <Text style={styles.text}>
        {t(
          'Our system allows you to manage teams, players, and tournaments with ease, providing a complete solution for sports management.',
        )}
      </Text>

      <Text style={styles.text}>
        {t(
          'If you do not wish to create a school, you can still use Sportify exclusively for tournaments and participate in competitions.',
        )}
      </Text>
    </View>
  );
};

export default AboutSection;
