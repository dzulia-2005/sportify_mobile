import React from 'react';
import { styles } from '../styles/index.style';
import { Text, TouchableOpacity } from 'react-native';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const AddTournamentButton: React.FC = () => {
  const { t } = useI18n();

  return (
    <TouchableOpacity style={styles.AddTournament}>
      <Text style={styles.AddTournamentText}>{t('Add Tournament +')}</Text>
    </TouchableOpacity>
  );
};

export default AddTournamentButton;
