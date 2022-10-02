import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import Header from './layout/Header';
import Tab from './components/Tab';

// import Movies from './pages/Movies';
import TV from './pages/TV';

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <Tab />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}


