import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import MainScreen from "../screen/MainScreen/MainScreen";
import Categories from "../screen/MainScreen/CategoryScreen";
import Favorite from "../screen/MainScreen/FavoritScreen";
import Profile from "../screen/ProfileScreen/ProfileScreen";
import Recommend from "../screen/RestaurantScreen/RecommendScreen"
import Interest from "../screen/RestaurantScreen/InterestScreen"
import New from "../screen/RestaurantScreen/NewScreen"
import Detail from "../screen/MainScreen/DetailScreen"
import LoginScreen from "../screen/LoginScreen/LoginScreen";
import RegisterScreen from "../screen/LoginScreen/RegisterScreen";
import BeforeScreen from "../screen/LoginScreen/BeforeScreen";
import ReviewHistoryScreen from "../screen/ProfileScreen/ReviewHisScreen"
import EditProfileScreen from "../screen/ProfileScreen/EditProfileScreen"
import ChangPassword from "../screen/ProfileScreen/ChangePasswordScreen"

const HomeNavigator = createNativeStackNavigator();
const CategoryNavigator = createNativeStackNavigator();
const FavoriteNavigator = createNativeStackNavigator();
const ProfileNavigator = createNativeStackNavigator();
const BottomNavigator = createBottomTabNavigator();
const LoginNavigator = createNativeStackNavigator();

function LoginNavigation() {
    return (
        <NavigationContainer>
            <LoginNavigator.Navigator
                initialRouteName="Before"
                screenOptions={{
                    headerStyle: { backgroundColor: "#3F2305" },
                    headerTintColor: "white",
                    headerTitleAlign: "center",
                    headerShown: false,
                    tabBarShowLabel: false
                }}>
                <LoginNavigator.Screen
                    name="Before"
                    component={BeforeScreen}
                    options={{ headerShown: false }}
                />
                <LoginNavigator.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <LoginNavigator.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />
                <LoginNavigator.Screen
                    name="Home"
                    component={BottomNavigation}
                />
            </LoginNavigator.Navigator>
        </NavigationContainer>
    );
}

function HomeNavigation() {
    return (
        <HomeNavigator.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerStyle: { backgroundColor: "#3F2305" },
                headerTintColor: "white",
                headerTitleAlign: "center"
            }}>
            <HomeNavigator.Screen
                name="Main"
                component={MainScreen}
                options={{
                    title: "หน้าหลัก"
                }} />
            <HomeNavigator.Screen
                name="Recommend"
                component={Recommend}
                options={{
                    title: "ร้านอาหารยอดนิยม"
                }} />
            <HomeNavigator.Screen
                name="Interest"
                component={Interest}
                options={{
                    title: "ร้านอาหารน่าสนใจ"
                }} />
            <HomeNavigator.Screen
                name="New"
                component={New}
                options={{
                    title: "ร้านอาหารใหม่"
                }} />
            <HomeNavigator.Screen
                name="Detail"
                component={Detail}
                options={{
                    title: "Detail"
                }} />
        </HomeNavigator.Navigator>
    );
}

function CategoryNavigation() {
    return (
        <CategoryNavigator.Navigator
            initialRouteName="CategoryScreen"
            screenOptions={{
                headerStyle: { backgroundColor: "#3F2305" },
                headerTintColor: "white",
                headerTitleAlign: "center"
            }}>
            <CategoryNavigator.Screen
                name="Category"
                component={Categories}
                options={{
                    title: "หมวดหมู่"
                }} />
        </CategoryNavigator.Navigator>
    );
}

function FavoriteNavigation() {
    return (
        <FavoriteNavigator.Navigator
            initialRouteName="FavoriteScreen"
            screenOptions={{
                headerStyle: { backgroundColor: "#3F2305" },
                headerTintColor: "white",
                headerTitleAlign: "center"
            }}>
            <FavoriteNavigator.Screen
                name="Favorite"
                component={Favorite}
                options={{
                    title: "ร้านที่ชื่นชอบ"
                }} />
        </FavoriteNavigator.Navigator>
    )
}

function ProfileNavigation() {
    return (
        <ProfileNavigator.Navigator
            initialRouteName="ProfileScreen"
            screenOptions={{
                headerStyle: { backgroundColor: "#3F2305" },
                headerTintColor: "white",
                headerTitleAlign: "center"
            }}
        >
            <ProfileNavigator.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: "ฉัน"
                }} />

            <ProfileNavigator.Screen
                name="History"
                component={ReviewHistoryScreen}
                options={{
                    title: "ประวัติการรีวิว"
                }} />

            <ProfileNavigator.Screen
                name="Edit"
                component={EditProfileScreen}
                options={{
                    title: "แก้ไขข้อมูลส่วนตัว"
                }} />

            <ProfileNavigator.Screen
                name="Password"
                component={ChangPassword}
                options={{
                    title: "แก้ไขรหัสผ่าน"
                }} />

        </ProfileNavigator.Navigator>
    )
}

function BottomNavigation() {
    return (
        <BottomNavigator.Navigator
            screenOptions={{
                tabBarActiveTintColor: "darkblue",
                tabBarStyle: { backgroundColor: "#3F2305" },
                headerShown: false,
                tabBarShowLabel: false
            }}>
            <BottomNavigator.Screen
                name="FirstScreen"
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <AntDesign name="home" size={30} color="white" />
                    }
                }}
            />
            <BottomNavigator.Screen
                name="CategoryScreen"
                component={CategoryNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="grid-outline" size={30} color="white" />
                    }
                }}
            />
            <BottomNavigator.Screen
                name="FanoriteScreen"
                component={FavoriteNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialIcons name="favorite-border" size={30} color="white" />
                    }
                }} />
            <BottomNavigator.Screen
                name="ProfileScreen"
                component={ProfileNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome5 name="user" size={30} color="white" />
                    }
                }} />
        </BottomNavigator.Navigator>
    );
}

export default function MainNavigatoion() {
    return (
        <LoginNavigation />
    );
}