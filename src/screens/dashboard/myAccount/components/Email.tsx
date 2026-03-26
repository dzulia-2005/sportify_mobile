import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/index.style';
import { MeProp } from '../types/myAccount.type';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const Email: React.FC<MeProp> = ({ Me }) => {
  const { t } = useI18n();

  return (
    <Text style={styles.TextContainer}>
      <Text style={styles.textKey}>{t('Email:')} </Text>
      <Text style={styles.textValue}> {Me?.email} </Text>
    </Text>
  );
};

export default Email;
