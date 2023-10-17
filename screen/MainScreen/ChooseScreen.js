import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import Searchbar from "../../components/SearchInput";
import RestaurantItem from "../../components/RestaurantItem";

const ChooseScreen = () => {
    return (
        <View style={styles.container}>
            <Searchbar/>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <Text style={{}}>ร้านอาหารยอดนิยม</Text> */}
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4EEEE',
        // justifyContent: 'center',
        // alignItems: 'center'
    }
});

export default ChooseScreen;