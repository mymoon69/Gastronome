import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { FontAwesome, Fontisto } from '@expo/vector-icons';

import MenuCarousel from '../../components/MenuCarousel'
import Buttonseecomment from '../../components/Buttonseecomment'
import { PLACES } from "../../data"

const DetailSceen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={{
                    uri: "https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/25/2022/10/tom-yum-recipe.jpg"
                }}
                    style={styles.Image}
                />
                <Text style={styles.name}>ตามสั่งคุณสมัย</Text>
                <View style={styles.rating}>
                    <View style={styles.star}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>4.5</Text>
                        <FontAwesome name="star" size={15} color="white" />
                    </View>

                    <Text>10 เรตติ้ง</Text>

                    <View style={styles.fav}>
                        <Fontisto name="favorite" size={24} color="black" />
                        <Text>ชื่นชอบ</Text>
                    </View>
                </View>
                <Text style={{ marginTop: 10, color: 'gray' }}>อาหารตามสั่ง</Text>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>รายละเอียด</Text>
                <Text style={{ marginTop: 10 }}>qqwertyuiop[]asdkl;'zxcvbnm,./qawexrctvgbynmk,lsxdcfvgbhnjmk,ps fghjkl</Text>
                <Image source={{
                    uri: "https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/25/2022/10/tom-yum-recipe.jpg"
                }}
                    style={{width: 380, height: 86, borderRadius: 20, marginTop: 10}}
                />

                <Text style={styles.menurec}>เมนูที่ร้านแนะนำ ></Text>
                <MenuCarousel list={ PLACES }/>
                <Text style={styles.commant}>เพิ่มความคิดเห็น</Text>

                <Buttonseecomment/>
            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        // marginLeft: 10,
        // marginHorizontal: 20,
    },
    Image: {
        width: '100%',
        height: 120,
        resizeMode: 'cover'
    },
    star: {
        flexDirection: 'row',
        gap: 5,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 5
    },
    rating: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 10,
        alignItems: 'center'
    },
    fav: {
        flexDirection: 'row',
        left: 170,
        gap: 10,
        alignItems: 'center'
    },
    name: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 20
    },
    menurec: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    commant: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10
    }
});

export default DetailSceen;