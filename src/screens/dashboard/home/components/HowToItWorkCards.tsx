import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/HowToItWorkCards';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const HowToItWorkCards = () => {
  const { t } = useI18n();

  return (
    <View style={styles.CardContainer}>
      <View>
        <Text style={styles.header}>{t('How It Works')}</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.circle}>
          <Text style={styles.number}>1</Text>
        </View>
        <Text style={styles.label}>{t('Create Tournament')}</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.circle}>
          <Text style={styles.number}>2</Text>
        </View>
        <Text style={styles.label}>{t('Invite Teams')}</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.circle}>
          <Text style={styles.number}>3</Text>
        </View>
        <Text style={styles.label}>{t('Track Scores')}</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.circle}>
          <Text style={styles.number}>4</Text>
        </View>
        <Text style={styles.label}>{t('Celebrate Winners')}</Text>
      </View>
    </View>
  );
};

export default HowToItWorkCards;
