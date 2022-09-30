import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base'
import AppStack from './components/stacks/AppStack'

export default function App() {
  return (
    <NativeBaseProvider>
    {/* <Header /> */}
    {/* <RecipesListContainer /> */}
    <AppStack />
    <StatusBar style='auto' />
  </NativeBaseProvider>
  );
}

