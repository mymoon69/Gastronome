import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import Searchbar from "../../components/SearchInput";
import RestaurantItem from "../../components/RestaurantItem";

const FavoriteScreen = () => {
    return (
        <View style={styles.container}>
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
        marginTop : 10
    }
});

export default FavoriteScreen;