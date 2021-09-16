import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Dimensions } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function LoginScreen({ navigation }) {
  const [sdt, setSdt] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    // const emailError = emailValidator(sdt.value)
    // const passwordError = passwordValidator(password.value)
    // if (emailError || passwordError) {
    //   setSdt({ ...sdt, error: emailError })
    //   setPassword({ ...password, error: passwordError })
    //   return
    // }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <Background >
      <BackButton goBack={navigation.goBack} />
      <View style={styles.container}>

        <Logo />
        <Header> ĐĂNG NHẬP </Header>

        {/* <KeyboardAwareScrollView style={styles.form}  > */}
        <TextInput
          label="Số điện thoại"
          returnKeyType="next"
          value={sdt.value}
          onChangeText={(text) => setSdt({ value: text, error: '' })}
          error={!!sdt.error}
          errorText={sdt.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Mật khẩu"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPasswordScreen')}
          >
            <Text style={styles.forgot}> Quên mật khẩu ?</Text>
          </TouchableOpacity>
        </View>

        <Button mode="contained" onPress={onLoginPressed}>
          ĐĂNG NHẬP
        </Button>
        {/* </KeyboardAwareScrollView> */}

        <View style={styles.row}>
          <Text>không có tài khoản ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.link}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight * 0.1

  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  forgot: {
    fontSize: 13,
    color: 'blue',
    fontWeight: 'bold',
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  form: {
    width: windowWidth * 0.9,
  }
})
