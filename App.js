import React from 'react'
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


// const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        {/* <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="MessageScreen" component={MessageScreen} />
        </Stack.Navigator> */}

        <Drawer.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
          drawerContent={(props) => <CustomDrawerMenu {...props} />}
        >
          <Drawer.Screen name="StartScreen" component={StartScreen} />
          <Drawer.Screen name="LoginScreen" component={LoginScreen} />

          <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Drawer.Screen name="MessageScreen" component={MessageScreen} />
          <Drawer.Screen name="ProfileUserScreen" component={ProfileUserScreen} />
          <Drawer.Screen
            name="EditProfileUserScreen" component={EditProfileUserScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
