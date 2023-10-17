import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Navbar, Pressable } from 'react-native';
import { Input, Image } from "react-native-elements";

const ChangePassword = () => {
    return (
        <View style={styles.container}>
                <View style={styles.current}>
                    <Text style={{color: "#176B87", marginLeft: 10, marginTop:25}}>รหัสผ่านปัจจุบัน</Text>
                    <Input
                        placeholder={"รหัสผ่านปัจจุบัน"}
                    />
                </View>
                <View style={styles.new}>
                    <Text style={{color: "#176B87", marginLeft: 10, marginTop:15}}>รหัสผ่านใหม่</Text>
                    <Input
                        placeholder={"รหัสผ่านใหม่"}
                    />
                </View>
                <View style={styles.confirm}>
                    <Text style={{color: "#176B87", marginLeft: 10, marginTop:15}}>ยืนยันรหัสผ่านใหม่</Text>
                    <Input
                        placeholder={"ยืนยันรหัสผ่านใหม่"}
                    />
                </View>


                <Pressable style={styles.buttonSave} >
                    {/* ใส่ onPress={onPress} ใน Pressable*/}
                    <Text>บันทึก</Text>
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
    buttonSave: {
        backgroundColor: "#FFDBAA",
        marginTop: 300,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ChangePassword;