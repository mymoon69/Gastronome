import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Navbar, Pressable } from 'react-native';
import { Input, Image } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const ReviewHistory = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'colum', marginTop: 20 }}>
                <View style={styles.review}>
                    <Text style={{ fontSize: 20, }}>เขียนรีวิวให้ บ้านคุณพิสมัย</Text>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,

                        }}
                    />
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <AntDesign name="star" size={24} color="orange" />
                        <AntDesign name="star" size={24} color="orange" />
                        <AntDesign name="star" size={24} color="orange" />
                        <AntDesign name="star" size={24} color="orange" />
                        <AntDesign name="staro" size={24} color="orange" />
                        <View style={styles.date}>
                            <Text style={{ marginLeft: 145, }}>16 มิ.ย.66</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 10, }}>
                        <Text style={{ width: 320, marginBottom: 30 }}>ร้านนี้อยู่ปากซอยลาดกระบัง 14 ( อยู่ตรงทางยูเทิร์น ) เป็นร้านขนาดกลาง ๆ มีที่นั่งทานพอสมควร ไม่แน่ใจว่าถ้าขับรถมาต้องไปจอดตรงไหน และ ร้านนี้ไม่มีบริการโอน มีแต่เงินสดเท่านั้น อาหารอร่อยมากเลย อารมณ์เหมือนกินกับข้าวที่แม่ทำ</Text>
                    </View>
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

                </View>
                <View style={styles.review}>
                    <Text style={{ fontSize: 20, }}>เขียนรีวิวให้ บ้านคุณพิสมัย</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <AntDesign name="star" size={24} color="orange" />
                        <AntDesign name="star" size={24} color="orange" />
                        <AntDesign name="star" size={24} color="orange" />
                        <AntDesign name="star" size={24} color="orange" />
                        <AntDesign name="staro" size={24} color="orange" />
                        <View style={styles.date}>
                            <Text style={{ marginLeft: 145, }}>16 มิ.ย.66</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 10, }}>
                        <Text style={{ width: 320, marginBottom: 30 }}>ร้านนี้อยู่ปากซอยลาดกระบัง 14 ( อยู่ตรงทางยูเทิร์น ) เป็นร้านขนาดกลาง ๆ มีที่นั่งทานพอสมควร ไม่แน่ใจว่าถ้าขับรถมาต้องไปจอดตรงไหน และ ร้านนี้ไม่มีบริการโอน มีแต่เงินสดเท่านั้น อาหารอร่อยมากเลย อารมณ์เหมือนกินกับข้าวที่แม่ทำ</Text>
                    </View>
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

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 35,
        backgroundColor: "#F4EEEE",
    },
    review: {
        height: 330,
        width: 370,
        borderRadius: 10,
        padding: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white',
        margin: 10,
    },
});

export default ReviewHistory;