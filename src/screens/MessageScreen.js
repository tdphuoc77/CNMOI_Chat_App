import React from 'react'
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import {
    Dimensions,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
} from "react-native";

import Message from '../components/Message'
import HeaderMessage from '../components/HeaderMessage';
import img from '../assets/icon.png'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function MessageScreen({ navigation }) {
    return (
        <SafeAreaView >



            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.contentHeader}>
                        <Ionicons
                            name="arrow-back-outline"
                            size={26}
                            color="white"
                            onPress={() => navigation.navigate("Dashboard")}
                        />
                        <View style={styles.userView}>
                            <HeaderMessage image={img} name="Khủng long" message="Đang hoạt động" />
                        </View>
                        <AntDesign name="addusergroup" size={26} color="white" />
                        <Ionicons name="call" size={26} color="white" />
                        <Feather name="more-horizontal" size={26} color="white" />
                    </View>

                </View>
                <View style={styles.listMessage}>
                    <Message
                        image={img}
                        message="Đang làm gì đó??"
                        name="Khủng long"
                    />


                </View>
                {/* <KeyboardAvoidingView behavior="height"> */}
                <View style={styles.footer}>
                    <Entypo name="emoji-happy" size={30} color="#3399cc" />
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập tin nhắn..."
                        placeholderTextColor='#fff'
                    // multiline={true}
                    // autoFocus={true}
                    />
                    <MaterialCommunityIcons name="send" size={30} color="#3399cc" />
                    <Entypo name="image-inverted" size={30} color="#3399cc" />
                    {/* <Feather name="more-horizontal" size={30} color="#3399cc" /> */}
                </View>
                {/* </KeyboardAvoidingView> */}

            </View>
        </SafeAreaView >
    )
}

const CENTER = {
    textAlign: "center",
    justifyContent: "center",
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1,

    },
    header: {

        backgroundColor: "#3399cc",

        height: (windowHeight * 15) / 100,
        flexDirection: "row",
        justifyContent: "space-between",
        // textAlign: "center",
        alignItems: "flex-end",
        // paddingHorizontal: 10,
        borderRadius: 5
    },

    contentHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
    },
    listMessage: {
        paddingVertical: 10,
        backgroundColor: "#f2c9d4",
        width: "100%",
        height: (windowHeight * 81) / 100,
    },
    footer: {
        backgroundColor: "#fff",
        width: "100%",
        height: (windowHeight * 7) / 100,
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",
        alignItems: "center",
        borderRadius: 5
    },
    userView: {
        marginTop: 10,
        maxWidth: (windowWidth * 70) / 100,
    },
    input: {
        height: "90%",
        width: "65%",
        color: "black",
        backgroundColor: '#C4C4C4',
        borderRadius: 5
    },
});
