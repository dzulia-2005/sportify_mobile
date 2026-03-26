import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/aboutUs.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const Header: React.FC = () => {
  const { t } = useI18n();

  return (
    <View style={styles.header}>
      <Icon name="soccer" size={48} color="#2563EB" />
      <Text style={styles.title}>Sportify</Text>
      <Text style={styles.subtitle}>
        {t('Your all-in-one sports management platform')}
      </Text>
    </View>
  );
};

export default Header;
