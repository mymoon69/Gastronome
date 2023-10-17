import React from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";

import Searchbar from "../../components/SearchInput";
import Buttonlocation from "../../components/Buttonlocation";
import Carousel from "../../components/Carousel";
import { PLACES } from "../../data"

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Searchbar />
            <ScrollView>
                <Buttonlocation />
                <Text style={styles.mainText}>ร้านอาหารยอดนิยม > </Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Carousel list={ PLACES } />
                </ScrollView>
                <Text style={styles.mainText}>ร้านอาหารน่าสนใจ > </Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Carousel list={ PLACES } />
                </ScrollView>
                <Text style={styles.mainText}>ร้านอาหารใหม่ > </Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Carousel list={ PLACES } />
                </ScrollView>
            </ScrollView>

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

    },
    mainText: {
        marginLeft: 50,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20
    }
})

export default MainScreen;