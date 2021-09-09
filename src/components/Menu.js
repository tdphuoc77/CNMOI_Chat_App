import React from 'react'
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";
import { Dimensions } from "react-native";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function Menu({ onPressGroup, onPressChat, onPressMore }) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.iconView}>
                <FontAwesome name="wechat" size={30} color="#3399cc" onPress={onPressChat} />
                <Text style={styles.txt}> Chat</Text>
            </View>

            <View style={styles.iconView}>
                <FontAwesome name="group" size={30} color="#3399cc" onPress={onPressGroup} />
                <Text style={styles.txt}> Group</Text>
            </View>

            <View style={styles.iconView}>
                <Entypo name="menu" size={30} color="#3399cc" onPress={onPressMore} />
                <Text style={styles.txt}> More</Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: "#1995ad",
        width: "100%",
        height: (windowHeight * 7) / 100,

        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    iconView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    txt: {
        color: "#3399cc",
    },


});
