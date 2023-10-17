import React from "react";
import { SafeAreaView, FlatList, Text, View, Image, StatusBar, StyleSheet, TouchableOpacity } from "react-native";

const Carousel = ({ list }) => {
    console.log(list)
    return (
        <TouchableOpacity style={{ marginLeft: 10, marginRight: 10 }}>
            <View style={styles.card}>
                <View style={styles.imageBox}>
                    <Image source={{ uri: list.picture }} style={styles.image} />

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <View style={styles.maintext}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 10 }}>ตามสั่งคุณพิสมัย</Text>
                        <Text style={{ fontSize: 11, color: 'gray', marginLeft: 10 }}>อาหารตามสั่ง</Text>
                    </View>
                    <Text style={{ fontSize: 12, height: 15, width: 40, alignItems: 'center' }}>10 รีวิว</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    card: {
        width: 150,
        height: 165,
        backgroundColor: "#fff",
        borderRadius: 5
    },
    imageBox: {
        width: 150,
        height: 113,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        overflow: "hidden"
    },
    image: {
        width: 150,
        height: 113,
        resizeMode: "cover"
    }
});

export default Carousel;