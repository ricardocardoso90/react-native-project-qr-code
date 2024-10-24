import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Ler QRCode' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
});
