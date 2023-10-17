import React, { Component } from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import firebase from "../../database/firebaseDB"
import { ListItem } from "react-native-elements";

import Searchbar from "../../components/SearchInput";
import Buttonlocation from "../../components/Buttonlocation";
import Carousel from "../../components/ResCarousel";

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
        this.props.navigation.navigate("Restaurant Detail", { key: item });
    };

    render() {
        return (
            <View style={styles.container}>
                <Searchbar />
                <ScrollView>
                    <Buttonlocation />
                    <Text style={styles.mainText} onPress={() => { this.props.navigation.navigate("Restaurant")}} >ร้านอาหารยอดนิยม ></Text>
                    <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
                        {this.state.restaurant_list.map((item, i) => {
                            return (
                                <Carousel key={i} list={item} />
                            )
                        })}
                    </ScrollView>
                    <Text style={styles.mainText}>ร้านอาหารยอดนิยม > </Text>
                    <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
                        {this.state.restaurant_list.map((item, i) => {
                            return (
                                <Carousel key={i} list={item} />
                            )
                        })}
                    </ScrollView>
                    <Text style={styles.mainText}>ร้านอาหารยอดนิยม > </Text>
                    <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
                        {this.state.restaurant_list.map((item, i) => {
                            return (
                                <Carousel key={i} list={item} />
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