/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './core/common/components/Home'
import { Profile } from './core/common/components/Profile'

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: { backgroundColor: 'tomato' },
  },
  screens: {
    Home: {
      screen: Home,
      options: { 
        title: 'Home',
      },
    },
    Profile: {
      screen: Profile,
      options: {
        title: 'myPage',
        headerBackTitle: '戻る'
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

// ナビゲーションのルートを元に各ルートにどんなparamsが渡されるか型リストを構成する
type RootStackParamList = StaticParamList<typeof RootStack>;

// ReactNavigationを使用する時に、RootStackParamListの型を追加で使用する。
declare global {
    namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
