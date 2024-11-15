import React, { useState } from 'react';
import { Button, StyleSheet, View, Modal } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title='Ler QRCode' />

      <Modal visible={modalIsVisible}>
        <CameraView />
      </Modal>
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
