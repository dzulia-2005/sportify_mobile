import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert, Linking } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import GoogleIcon from '../../../../shared/components/googleIcon';
import { BASE_URL } from '@env';
import { getParam } from '../utils/getParam';

type Props = {
  onGoogleSuccess: (tokens: { accessToken: string; refreshToken: string }) => Promise<void>;
};

const GoogleButton: React.FC<Props> = ({ onGoogleSuccess }) => {
  const authUrl = `${BASE_URL}/auth/mobile/google`;
  const redirectUrl = 'sportify://oauth-success';


  const parseRedirect = (url: string) => {
    if (!url.startsWith(redirectUrl)) return null;

    const error = getParam(url, 'error');
    if (error) {
      Alert.alert('Error', error);
      return null;
    }

    const accessToken = getParam(url, 'token');
    const refreshToken = getParam(url, 'refreshToken');

    if (!accessToken || !refreshToken) {
      Alert.alert('Error', 'Google login failed');
      return null;
    }

    return { accessToken, refreshToken };
  };

  const handleGoogleLogin = async () => {
    try {
      const isAvailable = await InAppBrowser.isAvailable();

      if (isAvailable) {
        const result = await InAppBrowser.openAuth(authUrl, redirectUrl, {
          showTitle: true,
          enableUrlBarHiding: true,
          enableDefaultShare: false,
          ephemeralWebSession: false,
        });

        console.log('GOOGLE AUTH RESULT:', result);

        if (result.type === 'success' && result.url) {
          const tokens = parseRedirect(result.url);
          if (tokens) {
            await onGoogleSuccess(tokens);
          }
        }
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