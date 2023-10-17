import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Navbar, Pressable } from 'react-native';
import { Input, Image } from "react-native-elements";

const Categories = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', }}>
                <View style={styles.category}>
                    <Image
                        source={require("../../assets/3135823.png")}
                        style={{ width: 80, height: 80, }}
                    />
                    <Text style={{ color: '#3F2305', fontSize: 18, marginTop: 5 }}>อาหารตามสั่ง</Text>
                </View>
                <View style={styles.category}>
                    <Image
                        source={require("../../assets/3135823.png")}
                        style={{ width: 80, height: 80, }}
                    />
                    <Text style={{ color: '#3F2305', fontSize: 18, marginTop: 5 }}>อาหารตามสั่ง</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
                <View style={styles.category}>
                    <Image
                        source={require("../../assets/3135823.png")}
                        style={{ width: 80, height: 80, }}
                    />
                    <Text style={{ color: '#3F2305', fontSize: 18, marginTop: 5 }}>อาหารตามสั่ง</Text>
                </View>
                <View style={styles.category}>
                    <Image
                        source={require("../../assets/3135823.png")}
                        style={{ width: 80, height: 80, }}
                    />
                    <Text style={{ color: '#3F2305', fontSize: 18, marginTop: 5 }}>อาหารตามสั่ง</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundColor: "#F4EEEE",
        alignItems: 'center',
    },
    category: {
        height: 165,
        width: 165,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#96C291',
        margin: 10,
    },
});

export default Categories;