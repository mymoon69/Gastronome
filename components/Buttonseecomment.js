import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Fontisto } from '@expo/vector-icons';

const Buttonlocation = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{justifyContent: "center", alignItems: "center"}}>
            <View style={styles.button}>
                <View style={styles.icon}>
                    <Text style={styles.buttonText}>ดูความคิดเห็นเพิ่มเติม</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#3F2305',
        borderRadius: 10
    },
    icon:{
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
    },
    buttonText: {
        textAlign: 'center',
        color: "white"
    }
});

export default Buttonlocation;