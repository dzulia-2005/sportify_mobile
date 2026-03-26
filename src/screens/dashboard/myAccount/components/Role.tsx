import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/index.style';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const Role: React.FC = () => {
  const { t } = useI18n();

  return (
    <Text style={styles.TextContainer}>
      <Text style={styles.textKey}>{t('Role:')} </Text>
      <Text style={styles.textValue}> {t('Tournament Admin')} </Text>
    </Text>
  );
};

export default Role;
