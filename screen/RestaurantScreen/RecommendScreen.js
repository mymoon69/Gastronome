import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import firebase from "../../database/firebaseDB";

import Searchbar from "../../components/SearchInput";
import RestaurantItem from "../../components/RestaurantItem";

class RecommendScreen extends Component {
    constructor() {
        super();

        this.recCollection = firebase.firestore().collection("Restaurant");

        this.state = {
            recommend_list: [],
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
            recommend_list: all_data,
        });
    };

    componentDidMount() {
        this.unsubscribe = this.recCollection.onSnapshot(this.getCollection);
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
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.state.recommend_list.map((item, i) => {
                        return (
                            <RestaurantItem key={i} list={item} />
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4EEEE',
        // justifyContent: 'center',
        // alignItems: 'center'
    }
});

export default RecommendScreen;