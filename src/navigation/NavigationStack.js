import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import SearchDoctorScreen from '../screens/SearchDoctorScreen';
import DoctorProfileScreen from '../screens/DoctorProfileScreen';
import ScreenThree from '../screens/ScreenThree';
import HomeScreen from '../screens/HomeScreen';
import Tabs from '../bottomTabs/Tabs';
import DoctorScreen from '../screens/DoctorScreen';
import DoctorScreen2 from '../screens/DoctorScreen2';
import SelectSchedule from '../screens/SelectSchedule';
import SelectScheduleCalendar from '../screens/SelectScheduleCalendar';
import ScheduleScreen from '../screens/ScheduleScreen';

const Stack = createStackNavigator();

const NavigationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SearchDoctorScreen"
                component={SearchDoctorScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="DoctorProfileScreen"
                component={DoctorProfileScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ScreenThree"
                component={ScreenThree}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="DoctorScreen"
                component={DoctorScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="DoctorScreen2"
                component={DoctorScreen2}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ScheduleScreen"
                component={ScheduleScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SelectSchedule"
                component={SelectSchedule}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SelectScheduleCalendar"
                component={SelectScheduleCalendar}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default NavigationStack;

const styles = StyleSheet.create({
    larrow: {
        height: 18,
        width: 18,
        resizeMode: 'cover',
    },
    splashText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashImage: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    logo: {
        height: 110,
        width: 110,
        resizeMode: 'cover',
    },
})
