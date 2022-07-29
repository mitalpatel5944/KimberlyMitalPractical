import React, { Component, useState } from "react";

import { View, Text, TouchableOpacity, ScrollView, Pressable, Switch } from 'react-native'

import Input from "../Component/Input";

import { ColorApp, Fonts, size, SvgIcon } from '../theme'

import PhoneInput from "react-native-phone-number-input";
import { useDispatch } from "react-redux";
import { LOGIN } from "../Redux/Constant";

function RegisterScreen (props){

    const dispatch = useDispatch()
   
          const [  signup,setsignup] =useState({
                "login_type": 1,
                "email": "",
                "password": "",
                "name": "",
                "phone_number": "",
                'cpassword': ''
            })

            
       


   function validate() {
        if (signup.name.length == 0) {
            alert('Enter name')
        } else if (signup.email.length == 0) {
            alert('Enter email')
        } else if (signup.phone_number.length == 0) {
            alert('Enter phone number')
        } else if (signup.password.length == 0) {
            alert('Enter password')
        } else if (signup.cpassword.length == 0) {
            alert('Enter confirm password')
        } else if (signup.password != signup.cpassword) {
            alert('Enter same password')
        } else {
            dispatch({ type: LOGIN, payload: '2' })
        }
    }



   
        return (
            <ScrollView style={{ flex: 1, height: '100%', backgroundColor: ColorApp.white }}>
                <Pressable onPress={() => {
                    props.navigation.pop()
                }}>
                    {/* <SvgIcon.back style={{ margin: 20 }} /> */}
                </Pressable>
                <View style={{ margin: 20 }}>
                    <Text style={{ alignSelf: 'flex-start', fontFamily: Fonts.ZenLight, fontSize: size.f26, color: ColorApp.nevyBlue }}>Sign Up</Text>

                    <Text style={{

                        fontFamily: Fonts.ZenLight, fontSize: size.f20, color: ColorApp.grey
                    }}>Please fill in your details</Text>

                </View>

                <View style={{ marginTop: 50 }} />


                <Input
                    placeholder={'Fullname'}
                    value={signup.name}
                    onChangeText={(text) => {
                        setsignup( { ...signup, name: text })
                    }}
                    icon={() => (
                        <View />
                    )}
                />

                <View style={{ marginTop: 25 }} />

                <Input
                    placeholder={'Email'}

                    value={signup.email}

                    onChangeText={(text) => {
                        setsignup( { ...signup, email: text })
                    }}
                />


                <View style={{ marginTop: 25 }} />

                <PhoneInput
                    placeholder={'Phone Number'}
                    defaultCode="IN"
                    autoFocus={false}
                    textInputStyle={{ fontFamily: Fonts.ZenMedium, fontSize: 16 }}
                    containerStyle={{ width: '90%', alignSelf: 'center', backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: ColorApp.lightGrey }}
                    textContainerStyle={{ fontFamily: Fonts.ZenRegular, backgroundColor: 'white', fontSize: 14 }}
                    onChangeFormattedText={text => {
                        setsignup({ ...signup, phone_number: text  })
                    }}
                />




                <View style={{ marginTop: 25 }} />

                <Input
                    placeholder={'Password'}
                    value={signup.password}
                    onChangeText={(text) => {
                        setsignup( { ...signup, password: text } )
                    }}
                    secureTextEntry={true}

                />

                <View style={{ marginTop: 25 }} />

                <Input
                    placeholder={'Confirm Password'}
                    value={signup.cpassword}
                    onChangeText={(text) => {
                        setsignup({  ...signup, cpassword: text })
                    }}

                    secureTextEntry={true}

                />
                <View style={{ marginTop: 15 }} />











                <TouchableOpacity
                    onPress={() => {
                        validate()
                    }}
                    style={{
                        backgroundColor: ColorApp.lightBlue, width: '90%', alignSelf: 'center',
                        marginTop: 50, paddingVertical: 10, borderRadius: 30
                    }}>
                    <Text style={{ alignSelf: 'center', fontFamily: Fonts.ZenMedium, color: '#fff', fontSize: size.f20 }}>
                        Sign Up</Text>
                </TouchableOpacity>




                <Text style={{
                    alignSelf: 'center', textAlign: 'center',
                    fontFamily: Fonts.ZenLight, fontSize: size.f16, color: ColorApp.grey,
                    marginTop: 10, paddingHorizontal: 30, lineHeight: 18, paddingTop: 10
                }}>
                    By clicking "Sign Up", you agree Terms of Use and Privacy Policy
                </Text>

                <Text style={{
                    alignSelf: 'center', textAlign: 'center',
                    fontFamily: Fonts.ZenRegular, fontSize: size.f16, color: ColorApp.grey,
                    marginTop: 10
                }}>Already have an account? <Text onPress={() => {
                    props.navigation.navigate('LoginScreen')
                }} style={{ color: ColorApp.lightBlue, fontFamily: Fonts.ZenBold, textDecorationLine: 'underline', textDecorationColor: ColorApp.skyblue }}>Sign In </Text> here</Text>
            </ScrollView>
        )
    }


export default RegisterScreen