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
  // useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './core/common/components/Home'
import { Profile } from './core/common/components/Profile'

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      options: { title: 'Home' },
    },
    Profile: {
      screen: Profile,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </SafeAreaProvider>
  );
}

// function AppContent() {
//   // const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <>
//       {/* <View style={[
//         styles.container,
//         {
//           paddingTop: safeAreaInsets.top,
//           paddingBottom: safeAreaInsets.bottom,
//           paddingRight: safeAreaInsets.right,
//           paddingLeft: safeAreaInsets.left,
//         }
//       ]}> */}
//         <Navigation />
//       {/* </View> */}
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   headerTitle: {
//     padding: 24,
//     fontSize: 24,
//     textAlign: 'center'
//   }
// });

export default App;
