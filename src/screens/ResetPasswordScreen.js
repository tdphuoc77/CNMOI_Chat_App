import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'

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
        style={{ marginTop: 16 }}
      >
        TÌM KIẾM
      </Button>
    </Background>
  )
}
