import React, { useContext, useState } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Image
} from "react-native";
import { Colors } from "../utils/Colors";


const Search = () => {
    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                onChangeText={(text) => { }}
                placeholder="Search by doctor name or location"
                placeholderTextColor={Colors.ICONCOLOR}
            />
            <Image
                source={require("../../assets/mail-filter.png")}
                style={styles.singleIcon}
            />
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: Colors.WHITE, height: 50,
        color: "white", width: "100%", paddingLeft: 24,
        borderRadius: 10,
    },
    searchContainer: {
        flexDirection: 'row', alignItems: 'center', marginTop: 10,
        borderRadius: 10,
        elevation: 5, shadowColor: '#999', overflow: 'hidden',
    },
    singleIcon: {
        width: 28, height: 28, position: 'absolute',
        tintColor: Colors.BLACK, right: 20
    },
});