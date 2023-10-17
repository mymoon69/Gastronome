import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

const Searchbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <View style={styles.search} pointerEvents="none">
                    <EvilIcons name="search" size={35} color="black" />
                </View>
                <TextInput style={styles.field} placeholder="ค้นหา"/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 20
    },
    search: {
        position: 'absolute',
        top: 1,
        left: 7,
        zIndex: 1
    },
    field: {
        backgroundColor: '#D9D9D9',
        paddingLeft: 50,
        paddingRight: 50,
        paddingVertical: 5,
        borderRadius: 50,
        height: 40,
        flex: 1
    },
    inner: {
        flexDirection: 'row'
    }
});

export default Searchbar;