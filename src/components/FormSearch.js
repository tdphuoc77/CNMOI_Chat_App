import React from 'react'
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";
import { Dimensions } from "react-native";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function FormSearch() {
    return (
        <View style={styles.search}>
            <FontAwesome5 name="search" size={20} color="grey" style={styles.icon} />
            <TextInput style={styles.txtSearch} placeholder="Search" />
        </View>
    )
}
const styles = StyleSheet.create({
    search: {
        height: windowHeight * 20 / 100,
        width: windowWidth,
        backgroundColor: "#ddd",
        marginTop: 5,
        // marginBottom: 20,
        paddingLeft: 10,
        borderRadius: 20,
        flexDirection: "row",
        height: 40,
    },
    txtSearch: {
        marginLeft: 30,
        width: windowWidth * 0.9,
        position: "relative",
        paddingLeft: 10,
    },
    icon: {
        position: "absolute",
        left: 20,
        top: 10,
    }
})