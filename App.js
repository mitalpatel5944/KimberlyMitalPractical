/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useState } from 'react';

 import {
   Platform,
   SafeAreaView,
   StatusBar,
   useColorScheme,
   View,
   PermissionsAndroid,
 
 } from 'react-native';
 
 
 import SplashScreen from './src/Screens/SplashScreen'
 import Main from './src/Navigation/Main'

 
 import {  useDispatch } from "react-redux";

 import { LOGIN } from './src/Redux/Constant';

 import AsyncStorage from '@react-native-async-storage/async-storage';
 

 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     flex: 1
     // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   const [splashHide, setHideSplash] = useState(false)
 
   const dispatch = useDispatch();
 
   useEffect(async () => {
     
    //  let token = await Global.getToken().then(async value => {
    //    console.log('token', value);
    //    if (value != null) {
    //      await Global.getUserDetail().then(val => {
    //        if (val != null) {
    //          dispatch({ type: LOGIN, payload: '2' })
 
    //        }
    //      })
    //    } 
    //  })
 
     
   }, [])
 
  
 
   const changeSplashstatus = () => {
     setHideSplash(true)
 
   }
 
   return (
     <View style={backgroundStyle}>
       {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}  hidden={false}/> */}
       {!splashHide ? <SplashScreen changeSplashstatus={() => {
         changeSplashstatus()
       }} /> : <Main />}
     </View>
   );
 };
 
 
 
 export default App;
 
 

 