import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableHighlight, Text, TextInput, Alert } from "react-native";
import { Image } from "react-native-elements";
import { firebase } from "../../database/firebaseDB"
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import iconfood from '../../assets/iconfood.jpg';
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
// import { useNavigation } from '@react-navigation/core'


const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const navigation = useNavigation()

  const goRegister = () => {
    navigation.navigate('Register');
  }

  const onLogin = () => {
    signInWithEmailAndPassword(getAuth(firebase), email, password)
      .then((response) => {
        const uid = response.user.uid

        getDoc(doc(getFirestore(firebase), "user", uid))
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("ไม่มีบัญชีนี้อยู่ในระบบ")
              return;
            }
            alert("ยินดีต้อนรับ");
            const user = firestoreDocument.data()
            navigation.navigate('Home')
          })
          .catch(error => {
            // alert(error)
            alert("dont has this email")
          });
      })
      .catch(error => {
        // alert(error)
        alert("dont has this email")
      })
  }

  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={iconfood}
          style={{ width: 200, height: 200 }}
          containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <Text style={{ color: '#3f2406', fontSize: 30, fontWeight: 600 }}>เข้าสู่ระบบ</Text>
      </View>
      <View style={styles.searchSection}>
        <Fontisto name="email" size={24} color="black" />
        <TextInput
          placeholder={"อีเมล"}
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.inputContainer}
        />
      </View>
      <View style={styles.searchSection}>
        <AntDesign name="lock" size={24} color="black" />
        <TextInput
          placeholder={"รหัสผ่าน"}
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.inputContainer}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.button_login} onPress={() => onLogin()}>
          <Text style={styles.buttonTextLogin}>เข้าสู่ระบบ</Text>
        </TouchableHighlight>
        <Text style={styles.footerText}>ยังไม่เป็นสมาชิกหรอ? <Text onPress={goRegister} style={styles.footerLink}>สมัครสมาชิก</Text></Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4eeee',
    //margin: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4eeee',
    //margin: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#d9d9d9',
    borderColor: '#d9d9d9',
    height: 50,
    width: 350,
    borderWidth: 1,
    borderRadius: 5,
    margin: 1,
  },
  searchSection: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4eeee',
    //margin: 1,
    //padding:10,
    //marginTop:20,
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
  buttonTextLogin: {
    color: '#f4eeee',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 16,
    color: '#3f2406'
  },
  footerLink: {
    color: "#93adc6",
    fontWeight: "bold",
    fontSize: 16
  },
})

export default LoginScreen;