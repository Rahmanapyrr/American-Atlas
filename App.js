import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('assets/LocationPin.png')}/>
      <Text>Open up App.js to start working!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f63a3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
