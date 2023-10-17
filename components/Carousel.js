import React from "react";
import { SafeAreaView, FlatList, Text, View, Platform, StatusBar, StyleSheet} from "react-native";

const Carousel = () => {
    return(
        <SafeAreaView >
            <Text>App</Text>
        </SafeAreaView>
    );
};

const styles =StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
});

export default Carousel;