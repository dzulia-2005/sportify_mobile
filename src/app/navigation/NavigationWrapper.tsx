import React from 'react';
import AppNavigator from './appNavigator';
import { NavigationContainer } from '@react-navigation/native';

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
