import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles/HeaderStyles';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const Header: React.FC = () => {
  const navigation = useNavigation();
  const { t } = useI18n();

  const openDrawer = () => {
    navigation.dispatch({
      type: 'OPEN_DRAWER',
    });
  };

  return (
    <ImageBackground
      source={require('../../../../shared/assets/images/mainImage.png')}
      style={styles.header}
      resizeMode="contain"
    >
      <View style={styles.darkOverlay} />

      <View style={styles.overlay}>
        <Text style={styles.headerText}>Sportify</Text>
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <TouchableOpacity onPress={openDrawer}>
            <Icon name="menu" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomTitle}>
          {t('Everything Your Football Club Needs')}
        </Text>
        <Text style={styles.bottomTitle}>{t('In One Place')}</Text>
        <Text style={styles.bottomSubtitle}>
          {t('Register teams for tournaments, manage your squad')}
        </Text>
        <Text style={styles.bottomSubtitle}>
          {t('and follow standings and player statistics with ease')}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Header;
