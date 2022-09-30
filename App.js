import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import Header from './layout/Header';

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}

