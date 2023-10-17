import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, Navbar, Pressable } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', marginBottom: 25, marginTop: 25, }}>
                <Image
                    source={require("../assets/3135823.png")}
                    style={{ width: 80, height: 80, marginLeft: 20 }}
                />

                <View style={{ marginTop: 25, marginLeft: 20, }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Manee memsew</Text>
                </View>

            </View>

            <Pressable style={styles.aboutMe} >
                {/* ใส่ onPress={onPress} ใน Pressable*/}
                <Text style={{ marginLeft: 25, }}>ประวัติการรีวิว</Text>
                <Text style={{ marginLeft: 185, }}> {'>'} </Text>
            </Pressable>

            <Pressable style={styles.aboutMe} >
                {/* ใส่ onPress={onPress} ใน Pressable*/}
                <Text style={{ marginLeft: 25, }}>แก้ไขข้อมูลส่วนตัว</Text>
                <Text style={{ marginLeft: 165, }}> {'>'} </Text>
            </Pressable>

            <Pressable style={styles.aboutMe} >
                {/* ใส่ onPress={onPress} ใน Pressable*/}
                <Text style={{ marginLeft: 25, }}>เปลี่ยนรหัสผ่าน</Text>
                <Text style={{ marginLeft: 185, }}> {'>'} </Text>
            </Pressable>


            <Pressable style={styles.buttonLogout} >
                {/* ใส่ onPress={onPress} ใน Pressable*/}
                <Text style={{ color: "red", }}>ออกจากระบบ</Text>
            </Pressable>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundColor: "#F4EEEE",
    },
    aboutMe: {
        backgroundColor: "#FFDBAA",
        marginBottom: 25,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonLogout: {
        backgroundColor: "#FFDBAA",
        marginTop: 300,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Profile;