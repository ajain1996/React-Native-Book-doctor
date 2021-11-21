import React, { useState } from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import HomeScreen from "../screens/HomeScreen";
import { Colors } from "../utils/Colors";
import CustomButton from "../components/CustomButton";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                showLabel: false,
                tabBarLabel: "",
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: Colors.white,
                    borderRadius: 0,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopStartRadius: 8,
                    borderTopEndRadius: 8,
                }
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <BuildTabComponent
                                image={require('../../assets/home-icon.png')}
                                fill={require('../../assets/home-fill.png')}
                                text="Home"
                                focused={focused}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="PlusScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <BuildTabComponent
                                image={require('../../assets/add-icon.png')}
                                fill={require('../../assets/add-icon-fill.png')}
                                text="Explore"
                                focused={focused}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="AddScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <BuildTabComponent
                                image={require('../../assets/plus-icon.png')}
                                fill={require('../../assets/plus-icon-fill.png')}
                                text="OTT"
                                centerTab={true}
                                focused={focused}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="UwoServices"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <BuildTabComponent
                                image={require('../../assets/stethoscope-fill.png')}
                                fill={require('../../assets/stethoscope.png')}
                                text="Services"
                                focused={focused}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <BuildTabComponent
                                image={require('../../assets/four-squares.png')}
                                fill={require('../../assets/four-squares-fill.png')}
                                text="Profile"
                                focused={focused}
                            />
                        );
                    }
                }}
            />
        </Tab.Navigator>
    );
}

const BuildTabComponent = ({ image, text, centerTab, fill, focused }) => {
    return (
        !centerTab
            ? <View style={{ height: 50, marginBottom: -15 }}>
                <View style={{
                    // borderColor: focused ? Colors.primary : "transparent", borderTopWidth: 2, 
                    paddingTop: 10, width: 60,
                    alignItems: 'center',
                }}>
                    <Image
                        source={focused ? fill : image}
                        style={{ width: 24, height: 24, tintColor: Colors.darkGreen }}
                    />
                </View>
            </View>
            : <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', }}>
                <View style={{
                    backgroundColor: Colors.darkGreen, width: 55, height: 55,
                    alignItems: 'center', justifyContent: 'center',
                    borderRadius: 100, position: "absolute", bottom: 15,
                }}>
                    <Image
                        source={focused ? fill : image}
                        style={{ width: 24, height: 24, tintColor: Colors.white }}
                    />
                </View>
            </View>
    );
}


const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});

export default Tabs;