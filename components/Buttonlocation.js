import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Fontisto } from '@expo/vector-icons';

const Buttonlocation = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <View style={styles.icon}>
                    <Fontisto name="shopping-store" size={24} color="black" />
                    <Text style={styles.buttonText}>ร้านอาหารใกล้คุณ</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        // flexDirection: "row",
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 1,
        backgroundColor: 'white',
    },
    icon:{
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
    },
    buttonText: {
        textAlign: 'center'
    }
});

export default Buttonlocation;