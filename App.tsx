/**
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import QueryProvider from './src/app/providers/QueryProvider';
import { store } from './src/app/store/store';
import { Provider } from 'react-redux';
import { Provider as AntProvider } from '@ant-design/react-native';
import Toast from 'react-native-toast-message';
import NavigationWrapper from './src/app/navigation/NavigationWrapper';
import { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import MyCustomSplash from './src/shared/components/MyCustomSplash';

enableScreens();

function App() {
  const [isReady, setIsReady] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const init = async () => {
      await new Promise<void>(resolve => setTimeout(resolve, 2000));
      SplashScreen.hide();
      setIsReady(true);
    };

    init();
  }, []);

  if (!isReady) {
    return <MyCustomSplash />;
  }

  return (
    <AntProvider>
      <Provider store={store}>
        <QueryProvider>
          <SafeAreaProvider>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <NavigationWrapper />
          </SafeAreaProvider>
        </QueryProvider>
      </Provider>
      <Toast />
    </AntProvider>
  );
}

export default App;
