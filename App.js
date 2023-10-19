import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Kodchasan_400Regular } from '@expo-google-fonts/kodchasan';

import MyNavigator from './navigations/MainNavigation';
import DetailSceen from './screen/MainScreen/DetailScreen';

export default function App() {
  let [fontsLoaded] = useFonts({
    Kodchasan_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return <DetailSceen/>
  // <MyNavigator/>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Kodchasan_400Regular'
  },
});
