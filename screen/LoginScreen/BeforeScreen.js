import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import EnjoyEatingImage from '../../assets/enjoyeating.jpg';
import PeopleEat from '../../assets/peopleeat.jpg';
// import { useNavigation } from '@react-navigation/native';

const BeforeScreen = ({navigation}) => {
  // const navigation = useNavigation();

  return (

    <View style={styles.container}>
      <Image style={{ marginTop: 30 }} source={EnjoyEatingImage} />
      <Image style={{ height: 200, width: 200, marginBottom: 50 }} source={PeopleEat} />

      <TouchableHighlight style={styles.button_login} onPress={() => navigation.navigate('Login')} underlayColor="#f4eeee">
        <Text style={styles.buttonTextLogin}>เข้าสู่ระบบ</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.button_register} onPress={() => navigation.navigate('Register')} underlayColor="#3f2406">
        <Text style={styles.buttonTextRegister}>สมัครสมาชิก</Text>
      </TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4eeee',
  },
  button_login: {
    height: 50,
    width: 300,
    backgroundColor: '#3f2406',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
  },
  button_register: {
    height: 50,
    width: 300,
    backgroundColor: '#f4eeee',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
    borderColor: '#3f2406',
    borderWidth: 2,
  },
  buttonTextLogin: {
    color: '#f4eeee',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTextRegister: {
    color: '#3f2406',
    fontSize: 18,
    fontWeight: 'bold',
  }

})

export default BeforeScreen;
