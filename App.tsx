/**
 * @format
 */

import React, { useEffect, useState } from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import QueryProvider from './src/app/providers/QueryProvider';
import { store } from './src/app/store/store';
import { Provider } from 'react-redux';
import { Provider as AntProvider } from '@ant-design/react-native';
import Toast from 'react-native-toast-message';
import NavigationWrapper from './src/app/navigation/wrapper/navigationWrapper';
import SplashScreen from 'react-native-splash-screen';
import MyCustomSplash from './src/shared/components/MyCustomSplash';
import { I18nProvider } from './src/shared/lib/i18n/I18nProvider';

enableScreens();

const APP_BG = '#02224A';

function App() {
  const [isReady, setIsReady] = useState<boolean>(false);

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
    <View style={styles.root}>
      <AntProvider>
        <I18nProvider>
          <Provider store={store}>
            <QueryProvider>
              <SafeAreaProvider>
                <StatusBar
                  translucent={false}
                  backgroundColor={APP_BG}
                  barStyle="light-content"
                />
                <View style={styles.root}>
                  <NavigationWrapper />
                </View>
              </SafeAreaProvider>
            </QueryProvider>
          </Provider>
        </I18nProvider>
        <Toast />
      </AntProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: APP_BG,
  },
});

export default App;
