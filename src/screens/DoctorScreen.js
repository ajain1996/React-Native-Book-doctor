import React from 'react';
import { View, Text, SafeAreaView, FlatList, StatusBar, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
import Search from '../components/Search';
import { dummyData } from '../constants/dummyData';
import { Colors } from '../utils/Colors';
import { windowWidth } from '../utils/utils';


export default function DoctorScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View style={{ marginHorizontal: 8 }}>
                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                    numColumns={2}
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
                            <BuildDetailDoctorComponent item={item} />
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


const BuildDetailDoctorComponent = ({ item }) => {

    const renderDoctorImageComponent = (item) => {
        return (
            <Image
                source={{ uri: item.image }}
                resizeMode="cover"
                style={{
                    width: "100%", height: 150,
                    borderTopLeftRadius: 8, borderTopRightRadius: 8
                }}
            />
        );
    }

    const renderHeartComponent = () => {
        return (
            <View style={{
                position: 'absolute', top: 8, right: 8, width: 30, height: 30, backgroundColor: '#fff',
                justifyContent: 'center', alignItems: 'center', borderRadius: 100
            }}>
                <Image
                    source={require("../../assets/heart.png")}
                    style={{ width: 20, height: 20 }}
                />
            </View>
        );
    }

    return (
        <View style={{ marginTop: 10, width: windowWidth / 2 - 22 }}>
            {renderDoctorImageComponent(item)}
            {renderHeartComponent()}

            <View style={{
                position: 'absolute', top: 98, backgroundColor: '#57B1B1', padding: 3,
                borderTopRightRadius: 30, borderBottomRightRadius: 30, width: 100,
                flexDirection: 'row', alignItems: "center", paddingLeft: 7
            }}>
                <Image
                    source={require("../../assets/clock.png")}
                    style={{ width: 14, height: 14, marginRight: 7, tintColor: '#fff' }}
                />
                <Text style={{ fontSize: 10, fontWeight: "600", color: '#fff' }}>{`Available in\n48 min`}</Text>
            </View>

            <BuildDoctorDetailsComponent item={item} />
        </View>
    );
}


const BuildDoctorDetailsComponent = ({ item }) => {

    const renderDoctorNameComponent = (item) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                <Text style={{ color: '#000', fontWeight: '700' }}>
                    {item.name}
                </Text>
                <Card style={{
                    backgroundColor: Colors.GREEN, width: 10, height: 10,
                    borderRadius: 100, borderWidth: 2, borderColor: '#fff',
                    marginLeft: 4
                }} />
            </View>
        );
    }

    const renderDoctorRatingComponent = (item) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', }}>
                <Image
                    source={require("../../assets/star.png")}
                    style={{
                        width: 15, height: 15,
                        marginRight: 2
                    }}
                />
                <Text style={{ color: '#000', fontWeight: '800', fontSize: 12 }}>
                    {item.rating}
                </Text>
            </View>
        );
    }

    const renderDoctorPriceComponent = (item) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#000', fontSize: 20, fontWeight: '700' }}>
                    ₹ {item.price}
                </Text>

                <CustomButton
                    text="Book" fs={12}
                    textColor={"white"}
                    width={65} height={26}
                    br={100} raiseLevel={2}
                    bgColor={Colors.BLUE2}
                    shadowColor={"#368edd"}
                    backgroundDarker="#3d7fba"
                    onPress={() => { }}
                />
            </View>
        );
    }

    return (
        <Card style={styles.doctorDetailsContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                {renderDoctorNameComponent(item)}
                {renderDoctorRatingComponent(item)}

            </View>
            <Text style={{ color: '#000', fontSize: 11, fontWeight: '300' }}>
                {item.info}
            </Text>
            <View style={{ height: 8 }} />
            {renderDoctorPriceComponent(item)}
        </Card>
    );
}


const styles = StyleSheet.create({
    doctorDetailsContainer: {
        marginTop: -10, elevation: 4,
        shadowColor: '#999', borderColor: "#fff",
        padding: 12, borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
});

