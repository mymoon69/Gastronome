import React , { useState }  from 'react';
import { StyleSheet, View, Alert ,TouchableHighlight, Text,TextInput} from "react-native";
import { Image } from "react-native-elements";
import { firebase } from "../../database/firebaseDB"
import { AntDesign } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import iconfood from '../../assets/iconfood.jpg';
import {getAuth, createUserWithEmailAndPassword} from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 

const RegisterScreen = ({navigation}) =>{

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [profile] = useState('https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png')

    const goLogin = () => {
      navigation.navigate('Login')
    }

    const onRegister = () => {
      if (password !== confirmPassword) {
          alert("รหัสไม่ตรงกัน")
          return
      }
          createUserWithEmailAndPassword(getAuth(firebase), email, password)
          .then((response) => {
              const uid = response.user.uid
              const data = {
                  id: uid,//ระบบสุ่มไอดี
                  username,
                  email,
                  password,
                  profile,
              };
              setDoc(doc(getFirestore(firebase), "user", uid), data)
                  .then(() => {
                    alert("สมัครเรียบร้อย")
                      //navigation.navigate('Home', {user: data})แก้ไขที่หลัง
                  })
                  .catch((error) => {
                    alert(error)
                  });
          })
          .catch((error) => {
              alert(error)
      });
  }

    return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={iconfood}
          style={{ width: 200, height: 200}}
          containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <Text style={{color:'#3f2406',fontSize:30,fontWeight:600}}>สมัครสมาชิก</Text>
      </View>
      <View style={styles.searchSection}>
        <AntDesign name="user" size={24} color="black" />
        <TextInput
          placeholder={"ชื่อ"}
          onChangeText={(text) => setUsername(text)}
          value={username}
          style={styles.inputContainer}
        />
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
      <View style={styles.searchSection}>
        <AntDesign name="lock" size={24} color="black" />
        <TextInput
          placeholder={"ยืนยันรหัสผ่าน"}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          style={styles.inputContainer}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.button_login} onPress={() => onRegister()}>
            <Text style={styles.buttonTextLogin}>สมัครสมาชิก</Text>
        </TouchableHighlight>
        <Text style={styles.footerText}>เป็นสมาชิกแล้ว <Text onPress={goLogin} style={styles.footerLink}>เข้าสู่ระบบ</Text></Text>
      </View>
    </>
    );
  }

const styles = StyleSheet.create({
  buttonContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4eeee',
    //margin: 1,
  },
  imageContainer:{
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
  button_login:{
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

export default RegisterScreen;