import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import firebase from "../../database/firebaseDB";

import Searchbar from "../../components/SearchInput";

class RecommendScreen extends Component {
    constructor() {
        super();

        this.recCollection = firebase.firestore().collection("Restaurant").orderBy("review", "desc");

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
        this.props.navigation.navigate("Detail", { key: item });
    };

    render() {
        return (
            <View style={styles.container}>
                <Searchbar />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.state.recommend_list.map((item, i) => {
                        return (
                            <View style={styles.containercard} key={i}>
                                <TouchableOpacity style={styles.cardContainer} onPress={() => this.navigateToViewDetaile(item.key)}>
                                    <View style={styles.card}>
                                        <View style={styles.Imagebox}>
                                            <Image source={{ uri: item.picture }}
                                                style={styles.Image}
                                            />
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                                            <View style={styles.maintext}>
                                                <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10 }}>{item.name}</Text>
                                                <Text style={{ fontSize: 13, color: 'gray', marginLeft: 10 }}>{item.category_name}</Text>
                                            </View>
                                            <Text style={{ fontSize: 15, height: 30, width: 60, alignItems: 'center' }}>{item.review} รีวิว</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
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
    },
    containercard: {
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    card: {
        width: 370,
        height: 180,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
    },
    Imagebox: {
        width: 370,
        height: 120,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden'
    },
    Image: {
        width: 370,
        height: 120,
        resizeMode: 'cover'
    },
    cardContainer: {
        marginLeft: 12,
        marginBottom: 10
    }
});

export default RecommendScreen;