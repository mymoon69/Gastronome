import React from "react";
import { SafeAreaView, FlatList, Text, View, Image, StatusBar, StyleSheet, TouchableOpacity } from "react-native";

const Carousel = ({ list }) => {
    return (
        <FlatList
            data={list}
            horizontal
            keyExtractor={i => i.id}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity style={{ marginLeft: 15, marginRight: index === list.length - 1 ? 15 : 0 }}>
                        <View style={styles.card}>
                            <View style={styles.imageBox}>
                                <Image source={item.image} style={styles.image} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                                <View style={styles.maintext}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 10 }}>ต้มยำกุ้ง</Text>
                                    <Text style={{ fontSize: 11, color: 'gray', marginLeft: 10 }}>120 บาท</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                )
            }}>
        </FlatList>);
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