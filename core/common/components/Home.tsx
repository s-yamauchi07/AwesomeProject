import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/RootStackParamList';

// NativeStackNavigationProp<ParamList, RouteName>の記述で、どのパスの型指定するか決定できる。
type HomeScreenNavigationProps =
  NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button 
        title = 'Go to Profile'
        onPress={() => 
          navigation.navigate('Profile', {
            name: 'Taro'
          })
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue'
  }
})