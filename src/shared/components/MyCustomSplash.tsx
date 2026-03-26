import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const MyCustomSplash: React.FC = () => {
  return (
    <View style={style.splashContainer}>
      <Image
        source={require('../assets/images/sportifyLogo.png')}
        style={style.Logo}
      />
    </View>
  );
};

export default MyCustomSplash;

const style = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#011942',
  },
  Logo: {
    width: 280,
    height: 280,
  },
});
