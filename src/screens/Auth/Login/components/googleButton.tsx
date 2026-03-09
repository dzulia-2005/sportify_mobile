import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert, Linking } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import GoogleIcon from '../../../../shared/components/googleIcon';
import { BASE_URL } from '@env';

const GoogleButton: React.FC = () => {
  const authUrl = `${BASE_URL}/auth/mobile/google`;
  const redirectUrl = 'sportify://oauth-success';

  const handleGoogleLogin = async () => {
    try {
      const isAvailable = await InAppBrowser.isAvailable();

      if (isAvailable) {
        await InAppBrowser.openAuth(authUrl, redirectUrl, {
          showTitle: true,
          enableUrlBarHiding: true,
          enableDefaultShare: false,
          ephemeralWebSession: false,
        });
      } else {
        await Linking.openURL(authUrl);
      }
    } catch (error) {
      console.log('Google login error:', error);
      Alert.alert('Error', 'Google login could not be started.');
    }
  };

  return (
    <TouchableOpacity
      style={styles.googleButtonContainer}
      onPress={handleGoogleLogin}
      activeOpacity={0.85}
    >
      <GoogleIcon />
      <Text style={styles.googleButtonText}>Login with Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  googleButtonContainer: {
    backgroundColor: '#d1d5dc',
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  googleButtonText: {
    fontWeight: 'bold',
    color: '#364153',
  },
});