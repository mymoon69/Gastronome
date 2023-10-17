import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MyNavigator from './navigations/MainNavigation';
import Detail from './screen/MainScreen/DetailScreen'

export default function App() {
  return <Detail/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
