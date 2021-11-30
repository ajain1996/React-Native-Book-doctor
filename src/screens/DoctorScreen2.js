import React from 'react';
import { View, Text, SafeAreaView, FlatList, StatusBar, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
import Search from '../components/Search';
import { dummyData } from '../constants/dummyData';
import { Colors } from '../utils/Colors';
import { windowWidth } from '../utils/utils';
import { BuildDetailDoctorComponent } from './DoctorScreen';


export default function DoctorScreen2({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View style={{ marginHorizontal: 8 }}>
                <FlatList
                    // columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                    // numColumns={1}
                    data={dummyData}
                    keyExtractor={item => `${item.id}`}
                    keyboardDismissMode="on-drag"
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View style={{ marginHorizontal: 10 }}>
                            <Header text="Doctor's for 'Bad Stomach'" />
                            <Search />
                        </View>
                    }
                    renderItem={({ item }) => {
                        return (
                            <View style={{ marginHorizontal: 10 }}>
                                <BuildDetailDoctorComponent
                                    item={item} cardFooter={true}
                                    navigation={navigation}
                                />
                            </View>
                        );
                    }}
                    ListFooterComponent={
                        <Card style={{
                            justifyContent: 'center', alignItems: 'center',
                            elevation: 10, shadowColor: '#999', marginTop: 20,
                            borderTopWidth: 8, borderColor: "#eee"
                        }}>
                            <View style={{ paddingTop: 10, alignItems: 'center', paddingBottom: 16 }}>
                                <Text style={{ fontSize: 18, color: '#000' }}>Not able to find your doctor?</Text>
                                <View style={{ height: 16 }} />
                                <CustomButton
                                    text="Call Now" fs={15}
                                    textColor={"white"}
                                    width={150} height={40}
                                    br={100} raiseLevel={4}
                                    bgColor={Colors.GREEN}
                                    shadowColor={"#57B1B1"}
                                    backgroundDarker="#57B1B1"
                                    icon={require("../../assets/call.png")}
                                    tintColor="#fff" marginTop={5}
                                    onPress={() => { }}
                                />
                            </View>
                        </Card>
                    }
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    doctorDetailsContainer: {
        marginTop: -10, elevation: 4,
        shadowColor: '#999', borderColor: "#fff",
        padding: 12, borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
});

