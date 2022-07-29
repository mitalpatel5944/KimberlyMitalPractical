import * as React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { InitialScreen,  LoginScreen,ForgotPassword, RegisterScreen,  HomeScreen, ProfileScreen,  } from '../Screens'
import { useSelector } from 'react-redux';
import { ColorApp, Fonts, Imagelocal, size } from '../theme';

import OTPScreen from '../Screens/OTPScreen';
import MobileNumber from '../Screens/MobileNumber';


const Stack = createNativeStackNavigator();





function Main() {

  const dataRedux = useSelector(state => state);

  console.log("dataRedux", dataRedux);
  return (

    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {dataRedux.LOGIN == '1' ?

        <NavigationContainer>
          <Stack.Navigator headerMode="none"
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
              gestureDirection: "horizontal"
            }}
            initialRouteName={'InitialScreen'}  >

            <Stack.Screen name='InitialScreen' component={InitialScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
            <Stack.Screen name={'OTPScreen'} component={OTPScreen} />
            <Stack.Screen name={'MobileNumber'} component={MobileNumber} />
          </Stack.Navigator>
        </NavigationContainer>
        :
        <NavigationContainer>
          <Stack.Navigator headerMode="none"
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
              gestureDirection: "horizontal"
            }}
            initialRouteName={'HomeScreen'}  >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
        
          </Stack.Navigator>
        </NavigationContainer>
      }
    </View>

  );
}

export default Main;