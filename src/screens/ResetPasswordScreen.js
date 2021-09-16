import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import { Dimensions, StyleSheet, View } from 'react-native'


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function ResetPasswordScreen({ navigation }) {
  const [sdt, setSdt] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(sdt.value)
    if (emailError) {
      setSdt({ ...sdt, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <View style={styles.container}>
        <Logo />
        <Header>TÌM TÀI KHOẢN</Header>
        <TextInput
          label="Số điện thoại"
          placeholder="Số điện thoại tài khoản"
          returnKeyType="done"
          value={sdt.value}
          onChangeText={(text) => setSdt({ value: text, error: '' })}
          error={!!sdt.error}
          errorText={sdt.error}
          autoCapitalize="none"
          autoCompleteType="tel"
          // textContentType="emailAddress"
          keyboardType="phone-pad"
          description="Một mã số được gửi đến điện thoại của bạn."
        />
        <Button
          mode="contained"
          onPress={sendResetPasswordEmail}
          style={{ marginTop: 30 }}
        >
          TÌM KIẾM
        </Button>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight * 0.15

  },
})
