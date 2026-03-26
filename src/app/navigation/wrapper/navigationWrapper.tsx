import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../AppNavigator';

const linking = {
  prefixes: ['sportify://'],
  config: {
    screens: {
      resetPassword: 'reset-password',
    },
  },
};

const NavigationWrapper = () => {
  return (
    <NavigationContainer linking={linking}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default NavigationWrapper;
