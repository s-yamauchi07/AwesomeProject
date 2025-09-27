import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();

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