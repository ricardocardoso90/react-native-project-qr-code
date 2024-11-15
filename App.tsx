import React, { useRef, useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, View, Modal, Alert } from 'react-native';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  const qrCodeLock = useRef(false);

  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermission();
      if (!granted) return Alert.alert("Câmara", "Você precisa habilitar o uso da Câmara.");

      setModalIsVisible(true);
      qrCodeLock.current = false;
    } catch (error) {
      console.log(error);
    };
  };

  function handleQRCodeRead(data: string) {
    // console.log(data);
    setModalIsVisible(false);
    Alert.alert("QRCode", data);
  };

  return (
    <View style={styles.container}>
      <Button title='Ler QRCode' onPress={handleOpenCamera} />

      <Modal visible={modalIsVisible} style={{ flex: 1 }}>
        <CameraView
          facing='back'
          style={{ flex: 1 }}
          onBarcodeScanned={({ data }) => {
            if (data && !qrCodeLock.current) {
              qrCodeLock.current = true;

              setTimeout(() => handleQRCodeRead(data), 1000);
            }
          }}
        />

        <View style={styles.footer}>
          <Button title='Cancelar' onPress={() => setModalIsVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  footer: {
    bottom: 32,
    left: 32,
    right: 32,
    position: 'absolute'
  }
});
