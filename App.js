import React, { useEffect, useState } from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  MessageScreen,
  ProfileUserScreen,
  EditProfileUserScreen
} from './src/screens'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawerMenu from './src/components/CustomDrawerMenu'
import AsyncStorage from '@react-native-community/async-storage'


// const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export default function App() {

  const [accessToken, setAccessToken] = useState(null)
  const [isUser, setIsUser] = useState(false)

  const setMenu = () => {
    setIsUser(!isUser)
  }

  useEffect(() => {
    _retrieveData()
  }, [AsyncStorage])

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('AccessToken');
      console.log(value)
      console.log(await AsyncStorage.getItem('User'))
      if (value !== null) {
        setAccessToken(value)
        setIsUser(true)
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  return (

    <Provider theme={theme}>
      <NavigationContainer>
        {accessToken !== null ? (
          <Drawer.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
              headerShown: false,
            }}

            drawerContent={(props) => <CustomDrawerMenu setMenu={() => setMenu()} isUser={isUser} {...props} />}
          >

            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
            <Drawer.Screen name="MessageScreen" component={MessageScreen} />
            <Drawer.Screen name="ProfileUserScreen" component={ProfileUserScreen} />
            <Drawer.Screen name="EditProfileUserScreen" component={EditProfileUserScreen} />
            <Drawer.Screen name="LoginScreen" setMenu={() => setMenu()} component={LoginScreen} />
            <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
          </Drawer.Navigator>
        ) : (
          <Drawer.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
              headerShown: false,
            }}
            drawerContent={(props) => <CustomDrawerMenu setMenu={() => setMenu()} isUser={isUser} {...props} />}
          >
            <Drawer.Screen name="StartScreen" component={StartScreen} />
            <Drawer.Screen name="LoginScreen" setMenu={() => setMenu()} component={LoginScreen} />
            <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
            <Drawer.Screen name="MessageScreen" component={MessageScreen} />
            <Drawer.Screen name="ProfileUserScreen" component={ProfileUserScreen} />
            <Drawer.Screen name="EditProfileUserScreen" component={EditProfileUserScreen} />
          </Drawer.Navigator>
        )}

      </NavigationContainer>
    </Provider>
  )
}
