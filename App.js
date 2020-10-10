import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, LogBox, StyleSheet, Text, View } from 'react-native';
import logo from './assets/American Logo.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={logo}/>
      {/* <Text>Open up App.js to start working!!</Text> */}
      <Button title ="Let's Go!" color="#e01e26" border="#135393"/>
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
  tinyLogo: {
    height: 300,
    width: 300
  }
});
