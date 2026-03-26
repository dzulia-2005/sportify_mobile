import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/CardsStyles';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const Cards = () => {
  const { t } = useI18n();

  return (
    <View style={styles.CardContainer}>
      <View style={styles.card}>
        <Text style={styles.number}>150+</Text>
        <Text style={styles.label}>{t('Active Tournaments')}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.number}>2k+</Text>
        <Text style={styles.label}>{t('Teams Participating')}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.number}>10k+</Text>
        <Text style={styles.label}>{t('Matches Tracked')}</Text>
      </View>
    </View>
  );
};

export default Cards;
