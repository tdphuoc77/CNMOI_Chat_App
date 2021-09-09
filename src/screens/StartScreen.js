import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>WELLCOM</Header>
      <Paragraph>
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Đăng Nhập
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Đăng ký
      </Button>
    </Background>
  )
}
