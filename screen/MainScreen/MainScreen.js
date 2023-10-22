import React, { Component } from "react";
import { Text, View, StyleSheet, Button, ScrollView, TouchableOpacity, Image } from "react-native";
import firebase from "../../database/firebaseDB"
import { ListItem } from "react-native-elements";
import { useFonts, Kodchasan_400Regular } from '@expo-google-fonts/kodchasan';

import Searchbar from "../../components/SearchInput";
import Buttonlocation from "../../components/Buttonlocation";
// import Carousel from "../../components/ResCarousel";

class MainScreen extends Component {
    constructor() {
        super();

        this.resCollection = firebase.firestore().collection("Restaurant");

        this.state = {
            restaurant_list: [],
        };
    }

    getCollection = (querySnapshot) => {
        const all_data = [];
        querySnapshot.forEach((res) => {
            const { id, name, category_name, review, detail, category_id, picture, rating, telephone } = res.data();

            all_data.push({
                key: res.id,
                id,
                name,
                category_name,
                review,
                detail,
                category_id,
                picture,
                rating,
                telephone
            });
        });

        this.setState({
            restaurant_list: all_data,
        });
    };

    componentDidMount() {
        this.unsubscribe = this.resCollection.onSnapshot(this.getCollection);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    navigateToViewDetaile = (item) => {
        this.props.navigation.navigate("Detail", { key: item });
    };

    render() {
        return (
            <View style={styles.container}>
                <Searchbar />
                <ScrollView>
                    <Buttonlocation />
                    <Text style={styles.mainText} onPress={() => { this.props.navigation.navigate("Recommend") }} >ร้านอาหารยอดนิยม {'>'}</Text>
                    <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
                        {this.state.restaurant_list.map((item, i) => {
                            return (
                                <TouchableOpacity style={{ marginLeft: 10, marginRight: 10 }} key={i} onPress={() => this.navigateToViewDetaile(item.key)}>
                                    <View style={styles.card}>
                                        <View style={styles.imageBox}>
                                            <Image source={{ uri: item.picture }} style={styles.image} />

                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, flexWrap: 'wrap' }}>
                                            <View style={styles.maintext}>
                                                <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 10 }}>{item.name}</Text>
                                                <Text style={{ fontSize: 11, color: 'gray', marginLeft: 10 }}>{item.category_name}</Text>
                                            </View>
                                            <Text style={styles.review}>{item.review} รีวิว</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                    <Text style={styles.mainText} onPress={() => { this.props.navigation.navigate("Interest") }} >ร้านอาหารเก่า {'>'} </Text>
                    <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
                        {this.state.restaurant_list.map((item, i) => {
                            return (
                                <TouchableOpacity style={{ marginLeft: 10, marginRight: 10 }} key={i} onPress={() => this.navigateToViewDetaile(item.key)}>
                                    <View style={styles.card}>
                                        <View style={styles.imageBox}>
                                            <Image source={{ uri: item.picture }} style={styles.image} />

                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, flexWrap: 'wrap' }}>
                                            <View style={styles.maintext}>
                                                <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 10 }}>{item.name}</Text>
                                                <Text style={{ fontSize: 11, color: 'gray', marginLeft: 10 }}>{item.category_name}</Text>
                                            </View>
                                            <Text style={styles.review}>{item.review} รีวิว</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                    <Text style={styles.mainText} onPress={() => { this.props.navigation.navigate("New") }}>ร้านอาหารใหม่ {'>'} </Text>
                    <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
                        {this.state.restaurant_list.map((item, i) => {
                            return (
                                <TouchableOpacity style={{ marginLeft: 10, marginRight: 10 }} key={i} onPress={() => this.navigateToViewDetaile(item.key)}>
                                    <View style={styles.card}>
                                        <View style={styles.imageBox}>
                                            <Image source={{ uri: item.picture }} style={styles.image} />

                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, flexWrap: 'wrap' }}>
                                            <View style={styles.maintext}>
                                                <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 10 }}>{item.name}</Text>
                                                <Text style={{ fontSize: 11, color: 'gray', marginLeft: 10 }}>{item.category_name}</Text>
                                            </View>
                                            <Text style={styles.review}>{item.review} รีวิว</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4EEEE',
        fontFamily: ''
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
    },
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
})

export default MainScreen;