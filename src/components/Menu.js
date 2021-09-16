import React from 'react'
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function Menu({ onPressGroup, onPressChat, onPressMore }) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.iconView}>
                <FontAwesome name="wechat" size={30} color="#3399cc" onPress={onPressChat} />
                <Text style={styles.txt}> Tin nhắn</Text>
            </View>

            <View style={styles.iconView}>
                <FontAwesome name="group" size={30} color="#3399cc" onPress={onPressGroup} />
                <Text style={styles.txt}>Nhóm </Text>
            </View>

            <View style={styles.iconView}>
                <MaterialCommunityIcons name="contacts" size={30} color="#3399cc" />
                <Text style={styles.txt}>Bạn bè</Text>
            </View>

            <View style={styles.iconView}>
                <Entypo name="menu" size={30} color="#3399cc" onPress={onPressMore} />
                <Text style={styles.txt}> Thêm</Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: "#1995ad",
        width: windowWidth,
        height: (windowHeight * 9) / 100,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        backgroundColor: "white",
        // marginBottom: 15,
    },
    iconView: {

        alignItems: "center",
        marginTop: 10
    },
    txt: {
        color: "#3399cc",
    },


});
