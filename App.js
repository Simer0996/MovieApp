import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import Header from './layout/Header';
import Tab from './components/Tab';

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <Tab />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}


