import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Kodchasan_400Regular } from '@expo-google-fonts/kodchasan';

import MyNavigator from './navigations/MainNavigation';
import DetailSceen from './screen/MainScreen/DetailScreen';
import LoginScreen from './screen/LoginScreen/LoginScreen';
import RegisterScreen from './screen/LoginScreen/RegisterScreen';
import Profile from './screen/ProfileScreen/ProfileScreen';
import BeforeScreen from './screen/LoginScreen/BeforeScreen';
import LoginNavigation from './navigations/MainNavigation';

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   Kodchasan_400Regular
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  // return <MyNavigator/>
  // return <Profile/>
  return <LoginNavigation/>
  // return <BeforeScreen/>
  
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
