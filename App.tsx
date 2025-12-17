/**
 * @format
 */

import { StatusBar, useColorScheme, } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import AppNavigator from './src/app/navigation/AppNavigator';
import QueryProvider from './src/app/providers/QueryProvider';

enableScreens();


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <QueryProvider>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppNavigator/>
      </SafeAreaProvider>
    </QueryProvider>
  );
}

export default App;
