/**
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import AppNavigator from './src/app/navigation/AppNavigator';
import QueryProvider from './src/app/providers/QueryProvider';
import { store } from './src/app/store/store';
import { Provider } from 'react-redux';
import { Provider as AntProvider } from '@ant-design/react-native';
import Toast from 'react-native-toast-message';

enableScreens();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AntProvider>
      <Provider store={store}>
        <QueryProvider>
          <SafeAreaProvider>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <AppNavigator />
          </SafeAreaProvider>
        </QueryProvider>
      </Provider>
      <Toast />
    </AntProvider>
  );
}

export default App;
