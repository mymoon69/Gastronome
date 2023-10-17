import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Navbar, Pressable } from 'react-native';
import { Input, Image } from "react-native-elements";
import firebase from "../../database/firebaseDB";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

class Categories extends Component {
    constructor() {
        super();

        this.subjCollection = firebase.firestore().collection("Categories");

        this.state = {
            Categories_list: [],
        };
    }

    getCollection = (querySnapshot) => {
        const all_data = [];
        querySnapshot.forEach((res) => {
            const { color, img, name } = res.data();
            all_data.push({
                key: res.id,
                color,
                img,
                name,
            });
        });
        console.log("all_data : ", all_data);
        console.log("all_data : ", all_data[0].name);
        this.setState({
            Categories_list: all_data,
        });
        // console.log(this.state.Categories_list);
    };

    componentDidMount() {
        this.unsubscribe = this.subjCollection.onSnapshot(this.getCollection);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    // navigateToViewStudent = (item) => {
    //     // Navigate to the "ViewStudent" screen
    //     this.props.navigation.navigate("Student Info", { key: item });
    // };

    render() {
        return (
            <View style={styles.container} numColumns={2}>
                {this.state.Categories_list.map((item, i) => {
                    console.log("item", item);
                    console.log(i);
                    console.log(item.img);
                    return (
                        <ListItem key={i} containerStyle={{...styles.category, backgroundColor: item.color}}  >
                             <ListItem.Content style={{ justifyContent: "center", alignItems: "center", backgroundColor: item.color}}>
                                 <Avatar source={{ uri: item.img }} style={styles.pic} />
                                 <ListItem.Title style={styles.txt}> {item.name} </ListItem.Title>
                             </ListItem.Content>
                        </ListItem>
                    );
                })}
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 15,
        backgroundColor: "#F4EEEE",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        flexWrap: "wrap"
    },
    category: {
        height: 165,
        width: 165,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    pic: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    txt: {
        color: '#3F2305',
        fontSize: 18,
        marginTop: 5
    },
});

export default Categories;