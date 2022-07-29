import React, { Component, useEffect, useState } from "react";

import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import { useDispatch } from "react-redux";
import Input from "../Component/Input";
import { LOGIN } from "../Redux/Constant";

import { ColorApp, Fonts, size, SvgIcon } from '../theme'

import Loader from "../Component/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";



function LoginScreen(props) {

    const dispatch = useDispatch();

    const [logindata, setlogin] = useState({
        email: '',
        password: ''
    })

   

   
   function validate() {
       if (logindata.email.length == 0) {
            alert('Enter email')
        } else if (logindata.password.length == 0) {
            alert('Enter password')

        } else {
            dispatch({ type: LOGIN, payload: '2' })
        }
    }

   

   

    return (
        <ScrollView style={{ flex: 1, height: '100%', backgroundColor: ColorApp.white }}>
           
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <View style={{ marginTop: 10, marginHorizontal: 20 }}>
                    <Text style={{ alignSelf: 'flex-start', marginTop: 22, fontFamily: Fonts.ZenBold, fontSize: 24, color: ColorApp.nevyBlue }}>Sign In</Text>

                    <Text style={{
                        alignSelf: 'center', textAlign: 'center',
                        fontFamily: Fonts.ZenLight, fontSize: 20, color: ColorApp.grey
                    }}>Hi, Welcome Back!</Text>

                </View>
               
            </View>

            <View style={{ marginHorizontal: 20 }}>
                <View style={{ marginTop: 50 }} />

                <Input
                    placeholder={'Email'}
                    value={logindata.email}
                    onChangeText={(text) => {
                        setlogin({ ...logindata, email: text })
                    }}
                   
                />
                <View style={{ marginTop: 30 }} />
                <Input
                    placeholder={'Password'}
                    secureTextEntry={true}
                    value={logindata.password}
                    onChangeText={(text) => {
                        setlogin({ ...logindata, password: text })
                    }}
                    
                />
            </View>

            <Pressable onPress={() => {
                props.navigation.navigate('ForgotPassword')
            }}>
                <Text style={{ color: ColorApp.dgrey, alignSelf: 'flex-end', paddingHorizontal: 30, paddingTop: 10, fontFamily: Fonts.ZenMedium, fontSize: size.f20 }}>
                    Forgot Password?
                </Text>
            </Pressable>

            <TouchableOpacity
                onPress={() => {
                    validate()

                }}
                style={{ backgroundColor: ColorApp.lightBlue, width: '90%', alignSelf: 'center', marginTop: 30, paddingVertical: 10, borderRadius: 30 }}>
                <Text style={{ alignSelf: 'center', fontFamily: Fonts.ZenMedium, color: '#fff', fontSize: 18 }}>Sign In</Text>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('MobileNumber')

                }}
                style={{ backgroundColor: ColorApp.lightPink, width: '90%', alignSelf: 'center', marginTop: 30, paddingVertical: 10, borderRadius: 30 }}>
                <Text style={{ alignSelf: 'center', fontFamily: Fonts.ZenMedium, color: '#fff', fontSize: 18 }}>Sign In with Mobile Number</Text>
            </TouchableOpacity>
          

          

            <Text style={{
                alignSelf: 'center', textAlign: 'center',
                fontFamily: Fonts.ZenRegular, fontSize: size.f18, color: ColorApp.grey,
                marginTop: 100
            }}>If you don’t have an account? <Text onPress={() =>
                props.navigation.navigate('RegisterScreen')
            } style={{ color: ColorApp.lightBlue, textDecorationLine: 'underline', textDecorationColor: ColorApp.skyblue }}>Sign Up </Text> here</Text>
        </ScrollView>
    )
}


export default LoginScreen