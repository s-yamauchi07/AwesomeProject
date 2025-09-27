import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { StaticScreenProps } from '@react-navigation/native';

type ProfileProps = StaticScreenProps<{
  name: string;
}>

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