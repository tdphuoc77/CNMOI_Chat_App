import React, { useEffect, useState } from 'react'
import store from './src/redux/store';
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
import { Provider, useDispatch, useSelector } from 'react-redux'
import { showMenu } from './src/redux/actions/showMenuAction';


const Drawer = createDrawerNavigator()

export default function App() {

  const [accessToken, setAccessToken] = useState(null)
  // const dispatch = useDispatch()

  useEffect(() => {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('AccessToken');
        if (value !== null) {
          setAccessToken(value)
          // dispatch(showMenu())
        }
      } catch (error) {
        console.log(error)
      }
    }
    _retrieveData()
  }, [])


  return (
    <Provider store={store}  >

      <NavigationContainer>

        <Drawer.Navigator
          initialRouteName={accessToken !== null ? "LoginScreen" : "LoginScreen"}
          screenOptions={{
            headerShown: false,
          }}

          drawerContent={(props) => <CustomDrawerMenu  {...props} />}
        >

          {/* <Drawer.Screen name="StartScreen" component={StartScreen} /> */}

          <Drawer.Screen name="LoginScreen" component={LoginScreen} />
          <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
          <Drawer.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen name="MessageScreen" component={MessageScreen} />
          <Drawer.Screen name="ProfileUserScreen" component={ProfileUserScreen} />
          <Drawer.Screen name="EditProfileUserScreen" component={EditProfileUserScreen} />
        </Drawer.Navigator>


      </NavigationContainer>
    </Provider>
  )
}
