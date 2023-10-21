import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image, Navbar, Pressable } from 'react-native';
import firebase from "../../database/firebaseDB"

const Profile = ({ navigation }) => {
    const user = firebase.auth().currentUser;
    const [id, setid] = useState("");
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [profile, setProfile] = useState('');
    const [data, setData] = useState([]);

    const userData = () => {
        const collectionRef = firebase.firestore().collection("user");
        collectionRef.get()
            .then((querySnapshot) => {
                const item = [];
                querySnapshot.forEach((res) => {
                    let info = res.data();
                    if (info.email === user.email) {
                        item.push({
                            key: res.id,
                            name: info.username,
                            email: info.email,
                            profile: info.profile
                        });
                        setid(res.id),
                            setUsername(info.username),
                            setEmail(info.email),
                            setProfile(info.profile)
                    }
                });
                setData(item)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
    };

    useEffect(() => {
        userData();
    }, []);


    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', marginBottom: 25, marginTop: 25, }}>

                <Image
                    source={{ uri: profile }}
                    style={{ width: 80, height: 80, marginLeft: 20, }}
                />

                <View style={{ marginTop: 25, marginLeft: 20, }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>{username}</Text>
                </View>

            </View>

            <Pressable style={styles.aboutMe} onPress={() => navigation.navigate('Main')}>
    {/* ใส่ onPress={onPress} ใน Pressable*/}
    <Text style={{ marginLeft: 25 }}>ประวัติการรีวิว</Text>
    <Text style={{ marginLeft: 185 }}> {'>'} </Text>
</Pressable>

            <Pressable style={styles.aboutMe} >
                {/* ใส่ onPress={onPress} ใน Pressable*/}
                <Text style={{ marginLeft: 25, }}>แก้ไขข้อมูลส่วนตัว</Text>
                <Text style={{ marginLeft: 165, }}> {'>'} </Text>
            </Pressable>

            <Pressable style={styles.aboutMe} >
                {/* ใส่ onPress={onPress} ใน Pressable*/}
                <Text style={{ marginLeft: 25, }}>เปลี่ยนรหัสผ่าน</Text>
                <Text style={{ marginLeft: 185, }}> {'>'} </Text>
            </Pressable>


            <Pressable style={styles.buttonLogout} >
                {/* ใส่ onPress={onPress} ใน Pressable*/}
                <Text style={{ color: "red", }}>ออกจากระบบ</Text>
            </Pressable>


        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundColor: "#F4EEEE",
    },
    aboutMe: {
        backgroundColor: "#FFDBAA",
        marginBottom: 25,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonLogout: {
        backgroundColor: "#FFDBAA",
        marginTop: 300,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Profile;