import React, { useState, useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View, Dimensions } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import { useDispatch, useSelector } from 'react-redux'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import AsyncStorage from '@react-native-community/async-storage'
import { login } from '../redux/actions/authAction'
import { showMenu } from '../redux/actions/showMenuAction'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function LoginScreen({ navigation }, props) {

  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()

  const [sdt, setSdt] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })


  useEffect(() => {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('AccessToken');
        if (value !== null) {
          // navigation.reset({
          //   index: 0,
          //   routes: [{ name: 'Dashboard' }],
          // })
        }
      } catch (error) {
        console.log(error)
      }
    };

    _retrieveData()
  }, [])

  // const onLoginPressed = () => {
  //   const emailError = emailValidator(sdt.value)
  //   const passwordError = passwordValidator(password.value)

  //   // if (emailError || passwordError) {
  //   //   setSdt({ ...sdt, error: emailError })
  //   //   setPassword({ ...password, error: passwordError })
  //   //   return '';
  //   // }
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   var raw = JSON.stringify({
  //     "phoneNumber": sdt.value,
  //     "password": password.value
  //   });
  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  //   fetch("http://192.168.1.13:8800/api/auth/login", requestOptions)
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw Error(response.status)
  //     })
  //     .then(async result => {
  // try {
  //   await AsyncStorage.setItem('AccessToken', result.accessToken)
  //   await AsyncStorage.setItem('UserID', result.user._id)

  // } catch (error) {
  //   console.log(error)
  // }
  //       // props.setUser(true)
  //       navigation.reset({
  //         index: 0,
  //         routes: [{ name: 'Dashboard' }],
  //       })
  //     })
  //     .catch(error => {
  //       console.log('error', error)
  //       alert('T??i kho???n ho???c m???t kh???u kh??ng ch??nh x??c')
  //     });

  //   // props.setMenu()

  // }

  const onLoginPressed = () => {
    //   const emailError = emailValidator(sdt.value)
    //   const passwordError = passwordValidator(password.value)

    // if (emailError || passwordError) {
    //   setSdt({ ...sdt, error: emailError })
    //   setPassword({ ...password, error: passwordError })
    //   return '';
    // }

    var user = {
      "phoneNumber": sdt.value,
      "password": password.value
    };

    dispatch(login(user))
    if (auth) {
      dispatch(showMenu())
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      })

    }

  }

  return (
    <Background >

      <View style={styles.container}>

        <Logo />
        <Header> ????NG NH???P </Header>

        {/* <KeyboardAwareScrollView style={styles.form}  > */}
        <TextInput
          label="S??? ??i???n tho???i"
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
          label="M???t kh???u"
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
            <Text style={styles.forgot}> Qu??n m???t kh???u ?</Text>
          </TouchableOpacity>
        </View>

        <Button mode="contained" onPress={onLoginPressed}>
          ????NG NH???P
        </Button>
        {/* </KeyboardAwareScrollView> */}

        <View style={styles.row}>
          <Text>kh??ng c?? t??i kho???n ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.link}>????ng k??</Text>
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
