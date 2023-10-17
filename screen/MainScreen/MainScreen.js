import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

import Searchbar from "../../components/SearchInput";
import Buttonlocation from "../../components/Buttonlocation";
import Carousel from "../../components/Carousel";

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Searchbar />
            <Buttonlocation/>
            <Carousel></Carousel>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4EEEE',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    locate: {
        width: 360,
        height: 77,

    }
})

export default MainScreen;