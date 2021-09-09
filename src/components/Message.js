import React from 'react'
import { Image, SafeAreaView, View, StyleSheet, Text } from "react-native";

export default function Message({ image, name, message, onPress }) {
    return (

        <SafeAreaView style={styles.userStyle}>
            <View>
                <Image source={image} style={styles.image}></Image>
            </View>
            <View style={styles.right}>
                <Text onPress={onPress} style={styles.name}>
                    {name}
                </Text>
                <Text onPress={onPress} style={styles.message}>
                    {message}
                </Text>
            </View>
        </SafeAreaView>

    )
}

const CENTER = {
    textAlign: "center",
    justifyContent: "center",
};
const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
    },
    userStyle: {
        width: "100%",
        maxHeight: 200,

        flexDirection: "row",
        marginBottom: 5,
    },
    right: {
        ...CENTER,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 10,
        maxWidth: "70%",
    },
    name: {
        fontSize: 12,
        color: "grey",
        marginBottom: 3,
    },
});
