import React from 'react'
import { Image, SafeAreaView, View, StyleSheet, Text } from "react-native";

export default function UserMessage({ image, name, message, onPress }) {
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
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 10,
    },
    userStyle: {
        width: "100%",
        height: 70,

        flexDirection: "row",
        marginBottom: 5,
    },
    right: {
        ...CENTER,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
