import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Container } from 'native-base';
import Header from '../components/Header';
import { Colors } from '../utils/Colors';
import SelectSchedule from './SelectSchedule';
import SelectScheduleCalendar from './SelectScheduleCalendar';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function ScheduleScreen({ navigation }) {

    const [tabValue, setTabValue] = useState("TeleConsule");

    return (
        <View style={{ alignItems: 'center', backgroundColor: '#fff', height: '100%' }}>
            <View style={{ width: '100%', paddingHorizontal: 20 }}>
                <Header text="Dr. Co Ekaterine" showIcon={true} />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 16 }}>
                <TouchableOpacity style={{
                    width: 150, height: 38, borderWidth: 1, borderColor: Colors.BLUE2,
                    backgroundColor: tabValue === "TeleConsule" ? Colors.BLUE2 : Colors.WHITE,
                    justifyContent: 'center', alignItems: 'center',
                    borderTopLeftRadius: 50, borderBottomLeftRadius: 50,
                }} onPress={() => { setTabValue("TeleConsule") }}>
                    <Text style={{ color: '#000' }}>TeleConsule</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: 150, height: 38, borderWidth: 1, borderColor: Colors.BLUE2,
                    backgroundColor: tabValue === "InPerson" ? Colors.BLUE2 : Colors.WHITE,
                    justifyContent: 'center', alignItems: 'center',
                    borderTopRightRadius: 50, borderBottomRightRadius: 50,
                }} onPress={() => { setTabValue("InPerson") }}>
                    <Text style={{ color: '#000' }}>In Person</Text>
                </TouchableOpacity>
            </View>

            {tabValue === "TeleConsule"
                ? <SelectSchedule />
                : <SelectScheduleCalendar />}

        </View>
    )
}


{/*  */ }
