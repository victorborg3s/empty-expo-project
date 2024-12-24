import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text>Olá!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Escolha uma cor de fundo ou ajuste conforme necessário
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200, // Ajuste conforme necessário
    height: 200, // Ajuste conforme necessário
    resizeMode: 'contain',
  },
});
