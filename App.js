import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import Header from './src/layout/Header';
import Tab from './src/components/Tab';

// import Movies from './pages/Movies';
import TV from './src/pages/TV';

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <Tab />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}


