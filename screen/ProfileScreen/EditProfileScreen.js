import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Button, Image, Navbar, Pressable } from 'react-native';
import { Input, CheckBox } from "react-native-elements";
import { RadioButton } from 'react-native-paper';

export default function EditMe() {

    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const [other, setOther] = useState(false);

    const genderMale = () => {
        setMale(true);
        setFemale(false);
        setOther(false);
    }
    const genderFemale = () => {
        setMale(false);
        setFemale(true);
        setOther(false);
    }
    const genderOther = () => {
        setMale(false);
        setFemale(false);
        setOther(true);
    }

    return (
        <View style={styles.container}>

            <View style={{ alignItems: 'center', marginBottom: 25, marginTop: 25, }}>
                <Image
                    source={require("../assets/3135823.png")}
                    style={{ width: 80, height: 80, marginLeft: 20 }}
                />
                <Pressable style={{ marginTop: 25, marginLeft: 20, }} >
                    {/* ใส่ onPress={onPress} ใน Pressable*/}
                    <Text style={{ color: "#176B87", fontSize: 16, }}>เปลี่ยนรูปโปรไฟล์</Text>
                </Pressable>
            </View>

            <View style={styles.name}>
                <Text style={{ color: "#176B87", marginLeft: 10, marginTop: 15 }}>ชื่อ</Text>
                <Input
                    placeholder={"ชื่อ"}
                />
            </View>
            <View style={styles.email}>
                <Text style={{ color: "#176B87", marginLeft: 10, marginTop: 15 }}>อีเมล</Text>
                <Input
                    placeholder={"อีเมล"}
                />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                    title="ชาย"
                    checked={male}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    onPress={genderMale}
                //ดูต่อ นาทีที่ 7:29 ใน https://www.youtube.com/watch?v=g2fgpM7RxCM 
                />
                <CheckBox
                    title="หญิง"
                    checked={female}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    onPress={genderFemale}
                />
                <CheckBox
                    title="ไม่ระบุ"
                    checked={other}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    onPress={genderOther}
                    // style={{backgroundColor:"#FFDBAA"}}
                />
            </View>

            {/* <RadioButton
                    title="ชาย"
                /> */}

            <Pressable style={styles.confirm} >
                    {/* ใส่ onPress={onPress} ใน Pressable*/}
                    <Text>ยืนยัน</Text>
                </Pressable>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundColor: "#F4EEEE",
    },
    confirm: {
        backgroundColor: "#FFDBAA",
        marginTop: 200,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
