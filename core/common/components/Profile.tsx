import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { RootStackParamList } from '../types/RootStackParamList';

type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>

export const Profile = ({route}: ProfileProps) => {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Text>This is {name}'s profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen'
  }
})