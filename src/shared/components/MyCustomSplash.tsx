import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const MyCustomSplash: React.FC = () => {
  return (
    <View style={style.splashContainer}>
      <Image
        source={require('../assets/images/sportzoneLogo.png')}
        style={style.Logo}
      />
      <Text style={style.logoText}>Sportify</Text>
    </View>
  );
};

export default MyCustomSplash;

const style = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03152d',
  },
  Logo: {
    width: 280,
    height: 280,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginTop: 12,
  },
});
