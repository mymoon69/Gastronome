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
import Restaurant from "../screen/MainScreen/RecommendScreen"

const HomeNavigator = createNativeStackNavigator();
const CategoryNavigator = createNativeStackNavigator();
const FavoriteNavigator = createNativeStackNavigator();
const ProfileNavigator = createNativeStackNavigator();
const BottomNavigator = createBottomTabNavigator();

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
                name="Restaurant"
                component={Restaurant}
                options={{
                    title: "ร้านอาหารยอดนิยม"
                }}/>
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
        </ProfileNavigator.Navigator>
    )
}

export default function MyNavigator() {
    return (
        <NavigationContainer>
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
                        // title: "หน้าหลัก",
                        tabBarIcon: ({ color, size }) => {
                            return <AntDesign name="home" size={30} color="white" />
                        }
                    }}
                />
                <BottomNavigator.Screen
                    name="CategoryScreen"
                    component={CategoryNavigation}
                    options={{
                        // title: "หมวดหมู่",
                        tabBarIcon: ({ color, size }) => {
                            return <Ionicons name="grid-outline" size={30} color="white" />
                        }
                    }}
                />
                <BottomNavigator.Screen
                    name="FanoriteScreen"
                    component={FavoriteNavigation}
                    options={{
                        // title: "ชื่นชอบ",
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
                    }}/>
            </BottomNavigator.Navigator>
        </NavigationContainer >
    );
}
