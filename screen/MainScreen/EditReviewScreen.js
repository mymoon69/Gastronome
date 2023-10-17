import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Navbar, Pressable } from 'react-native';
import { Input, Image } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function EditReview() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'colum', marginTop: 20 }}>
                <View style={styles.review}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Image
                            source={require("../assets/original-1593006369515.jpg")}
                            style={{ width: 150, height: 100, marginLeft: 10, }}
                        />
                        <Image
                            source={require("../assets/Variety-fruits-vegetables.webp")}
                            style={{ width: 150, height: 100, marginLeft: 10, }}
                        />
                    </View>
                    <View style={{ alignItems: 'center', }}>
                        <Text style={{ flexDirection: 'row', }}>เปลี่ยนรูป</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', backgroundColor: "#D9D9D9", width: 125, borderRadius: 10, }}>
                            <AntDesign name="star" size={24} color="orange" />
                            <AntDesign name="star" size={24} color="orange" />
                            <AntDesign name="star" size={24} color="orange" />
                            <AntDesign name="star" size={24} color="orange" />
                            <AntDesign name="staro" size={24} color="orange" />
                        </View>
                        <View style={styles.date}>
                            <Text style={{ marginLeft: 145, }}>16 มิ.ย.66</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 10, }}>
                        <Input style={{ width: 320, backgroundColor: "#D9D9D9",borderRadius: 10,}}></Input>
                    </View>


                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 35,
        backgroundColor: "#F4EEEE",
    },
    review: {
        height: 530,
        width: 370,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',
        margin: 10,
    },
});
