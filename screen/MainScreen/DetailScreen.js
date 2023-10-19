import React from "react";
import { Text, View, StyleSheet, Image, ScrollView, TextInput, Pressable } from "react-native";
import { FontAwesome, Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import MenuCarousel from '../../components/MenuCarousel'
import Buttonseecomment from '../../components/Buttonseecomment';
import { Button, Input } from "react-native-elements";

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
                    style={{ width: 380, height: 86, borderRadius: 20, marginTop: 10 }}
                />

                <Text style={styles.menurec}>เมนูที่ร้านแนะนำ {'>'}</Text>
                <Text style={styles.commant}>เพิ่มความคิดเห็น</Text>

                <View style={styles.addComment}>
                    <View style={{ flexDirection: 'row', }}>
                        <Image
                            source={require("../../assets/3135823.png")}
                            style={{ width: 40, height: 40, marginLeft: 10 }}
                        />
                        <View style={{ marginBottom: 15, marginTop: 25, }}>
                            <View style={{ marginTop: -20, marginLeft: 20, }}>
                                <Text style={{ fontWeight: 'bold', }}>Manee memsew</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 15, }}>
                                <AntDesign name="staro" size={24} color="orange" />
                                <AntDesign name="staro" size={24} color="orange" style={{ marginLeft: 5, }} />
                                <AntDesign name="staro" size={24} color="orange" style={{ marginLeft: 5, }} />
                                <AntDesign name="staro" size={24} color="orange" style={{ marginLeft: 5, }} />
                                <AntDesign name="staro" size={24} color="orange" style={{ marginLeft: 5, }} />
                            </View>
                        </View>
                    </View>

                    <TextInput style={styles.txtInput} placeholder={"พิมพ์ความคิดเห็นที่นี่..."}>
                    </TextInput>
                    <View style={{ flexDirection: 'row', }}>
                        <Pressable style={styles.upImg} >
                            {/* ใส่ onPress={onPress} ใน Pressable*/}
                            <AntDesign name="staro" size={24} color="orange" />
                        </Pressable>
                        <Pressable style={styles.submit} >
                            {/* ใส่ onPress={onPress} ใน Pressable*/}
                            <Text>ส่งความคิดเห็น</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.commant}>ความคิดเห็น</Text>
                    <Text style={styles.commant}>(10)</Text>
                </View>
                <View style={styles.restComment}>
                    <View style={{ flexDirection: 'row', }}>
                        <Image
                            source={require("../../assets/3135823.png")}
                            style={{ width: 40, height: 40, marginLeft: 10 }}
                        />
                        <View style={{ marginBottom: 15, marginTop: 25, }}>
                            <View style={{ marginTop: -20, marginLeft: 20, }}>
                                <Text style={{ fontWeight: 'bold', }}>Manee memsew</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 15, }}>
                                <AntDesign name="star" size={24} color="orange" />
                                <AntDesign name="star" size={24} color="orange" style={{ marginLeft: 5, }} />
                                <AntDesign name="star" size={24} color="orange" style={{ marginLeft: 5, }} />
                                <AntDesign name="star" size={24} color="orange" style={{ marginLeft: 5, }} />
                                <AntDesign name="staro" size={24} color="orange" style={{ marginLeft: 5, }} />
                            </View>
                        </View>
                    </View>
                    <Text style={{width: 360}}>
                    ร้านนี้อยู่ปากซอยลาดกระบัง 14 ( อยู่ตรงทางยูเทิร์น ) เป็นร้านขนาดกลาง ๆ มีที่นั่งทานพอสมควร ไม่แน่ใจว่าถ้าขับรถมาต้องไปจอดตรงไหน และ ร้านนี้ไม่มีบริการโอน มีแต่เงินสดเท่านั้น อาหารอร่อยมากเลย อารมณ์เหมือนกินกับข้าวที่แม่ทำ
                    </Text>
                    <View style={{ flexDirection: 'row', }}>
                    <Image
                            source={require("../../assets/original-1593006369515.jpg")}
                            style={{ width: 150, height: 130, marginLeft: 10, marginTop:10 }}
                        />
                        <Image
                            source={require("../../assets/original-1593006369515.jpg")}
                            style={{ width: 150, height: 130, marginLeft: 10, marginTop:10 }}
                        />
                    </View>
                    <Pressable style={styles.allSubmit} >
                            {/* ใส่ onPress={onPress} ใน Pressable*/}
                            <Text>แสดงความคิดเห็น</Text>
                        </Pressable>
                </View>

                <View style={styles.restComment}>
                    <View style={{ flexDirection: 'row', }}>
                        <Image
                            source={require("../../assets/3135823.png")}
                            style={{ width: 40, height: 40, marginLeft: 10 }}
                        />
                        <View style={{ marginBottom: 15, marginTop: 25, }}>
                            <View style={{ marginTop: -20, marginLeft: 20, }}>
                                <Text style={{ fontWeight: 'bold', }}>Manee memsew</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 15, }}>
                                <AntDesign name="star" size={24} color="orange" />
                                <AntDesign name="star" size={24} color="orange" style={{ marginLeft: 5, }} />
                                <AntDesign name="star" size={24} color="orange" style={{ marginLeft: 5, }} />
                                <AntDesign name="star" size={24} color="orange" style={{ marginLeft: 5, }} />
                                <AntDesign name="staro" size={24} color="orange" style={{ marginLeft: 5, }} />
                            </View>
                        </View>
                    </View>
                    <Text style={{width: 360}}>
                    ร้านนี้อยู่ปากซอยลาดกระบัง 14 ( อยู่ตรงทางยูเทิร์น ) เป็นร้านขนาดกลาง ๆ มีที่นั่งทานพอสมควร ไม่แน่ใจว่าถ้าขับรถมาต้องไปจอดตรงไหน และ ร้านนี้ไม่มีบริการโอน มีแต่เงินสดเท่านั้น อาหารอร่อยมากเลย อารมณ์เหมือนกินกับข้าวที่แม่ทำ
                    </Text>
                    <View style={{ flexDirection: 'row', }}>
                    <Image
                            source={require("../../assets/original-1593006369515.jpg")}
                            style={{ width: 150, height: 130, marginLeft: 10, marginTop:10 }}
                        />
                        <Image
                            source={require("../../assets/original-1593006369515.jpg")}
                            style={{ width: 150, height: 130, marginLeft: 10, marginTop:10 }}
                        />
                    </View>
                    <Pressable style={styles.allSubmit} >
                            {/* ใส่ onPress={onPress} ใน Pressable*/}
                            <Text>แสดงความคิดเห็น</Text>
                        </Pressable>
                </View>


                <Buttonseecomment />
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
        backgroundColor: "#F4EEEE",
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
    },
    addComment: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        height: 230,
        width: 380,
    },
    txtInput: {
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
        height: 100,
        width: 320,
        marginLeft: 15,
    },
    upImg: {
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        width: 50,
        height: 25,
        alignItems: "center",
        marginTop: 15,
        marginLeft: 15,
        marginRight: 20,
    },
    submit: {
        backgroundColor: "#FFDBAA",
        borderRadius: 10,
        width: 240,
        height: 25,
        alignItems: "center",
        marginTop: 15,
    },
    restComment: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        height: 360,
        width: 380,
        marginBottom:15,
    },
    allSubmit: {
        backgroundColor: "#FFDBAA",
        borderRadius: 10,
        width: 350,
        height: 27,
        alignItems: "center",
        marginTop: 15,
    }
});

export default DetailSceen;