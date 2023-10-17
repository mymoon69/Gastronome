import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import Searchbar from "../../components/SearchInput";
import RestaurantItem from "../../components/RestaurantItem";
import MenuItem from "../../components/MenuItem";

const MenuScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <Text style={{}}>ร้านอาหารยอดนิยม</Text> */}
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4EEEE'
    }
});

export default MenuScreen;