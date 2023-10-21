import React from "react";
import { SafeAreaView, FlatList, Text, View, Image, StatusBar, StyleSheet, TouchableOpacity } from "react-native";

const Carousel = ({ list }) => {
    
    navigateToViewDetaile = (item) => {
        this.props.navigation.navigate("Restaurant Detail", { key: item });
    };
    // console.log("list", list)
    return (
        <TouchableOpacity style={{ marginLeft: 10, marginRight: 10 }}>
            <View style={styles.card} >
                <View style={styles.imageBox}>
                    <Image source={{ uri: list.picture }} style={styles.image} />

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, flexWrap: 'wrap' }}>
                    <View style={styles.maintext}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 10 }}>{list.name}</Text>
                        <Text style={{ fontSize: 11, color: 'gray', marginLeft: 10 }}>{list.category_name}</Text>
                    </View>
                    <Text style={styles.review}>{list.review} รีวิว</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    card: {
        width: 150,
        height: 165,
        backgroundColor: "#ffff",
        borderRadius: 5,
        marginBottom: 5
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
    },
    review: {
        fontSize: 11,
        position: 'absolute',
        right: 10,
        bottom: -1
    }
});

export default Carousel;