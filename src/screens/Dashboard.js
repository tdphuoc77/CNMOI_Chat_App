import React from 'react'
import Background from '../components/Background'
import Menu from '../components/Menu'
import FormSearch from '../components/FormSearch'
import UserMessage from '../components/UserMessage'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import img from '../assets/icon.png'
import { Dimensions } from "react-native";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function Dashboard({ navigation }) {
  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.content}>
        <FormSearch />
        <ScrollView style={styles.listChat}>
          <UserMessage
            image={img}
            name="Khủng long"
            message="Xin chào"
            onPress={() => navigation.navigate("MessageScreen")}
          />
          <UserMessage
            image={img}
            name="Khủng long"
            message="Xin chào"
            onPress={() => navigation.navigate("Message")}
          />
          <UserMessage
            image={img}
            name="Khủng long"
            message="Xin chào"
            onPress={() => navigation.navigate("Message")}
          />
          <UserMessage
            image={img}
            name="Khủng long"
            message="Xin chào"
            onPress={() => navigation.navigate("Message")}
          />
          <UserMessage
            image={img}
            name="Khủng long"
            message="Xin chào"
            onPress={() => navigation.navigate("Message")}
          />
          <UserMessage
            image={img}
            name="Khủng long"
            message="Xin chào"
            onPress={() => navigation.navigate("Message")}
          />
          <UserMessage
            image={img}
            name="Khủng long"
            message="Xin chào"
            onPress={() => navigation.navigate("Message")}
          />
          <UserMessage
            image={img}
            name="Khủng long"
            message="Xin chào"
            onPress={() => navigation.navigate("Message")}
          />
        </ScrollView>
        <View style={styles.menu}>
          <Menu
            onPressGroup={() => navigation.navigate("StartScreen")}
            onPressMore={() => navigation.toggleDrawer()}
          />
        </View>
      </View>

    </SafeAreaView>


  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    flex: 1,
    paddingTop: 30,
  },
  listChat: {
    height: (windowHeight * 75) / 100,
    minHeight: (windowHeight * 75) / 100,
    marginTop: 10,
  },
  menu: {
    width: windowWidth,
  }
})