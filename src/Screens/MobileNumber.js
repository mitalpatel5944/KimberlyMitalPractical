import React, { Component, useRef, useEffect, useState } from "react";

import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Pressable } from 'react-native'
import { useDispatch } from "react-redux";
import Input from "../Component/Input";
import { LOGIN } from "../Redux/Constant";

import { ColorApp, Fonts, size, SvgIcon } from '../theme'


import Loader from "../Component/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";

import PhoneInput from 'react-native-phone-number-input';




function MobileNumber(props) {

    const [pswd, setpswd] = useState(true)

    const [phoneNumber, setphoneNumber] = useState('');
    const phoneInput = useRef(null);

    const dispatch = useDispatch();

    const [logindata, setlogin] = useState({
        mobile_no: '',
        code: '+91'
    })

    async function sendOtp() {

        if (phoneNumber.length == 0) {
            alert('Enter Phone Number')
        } else {
            props.navigation.navigate('OTPScreen', { mobile_no: phoneNumber })

        }


    }







    return (
        <ScrollView style={{ flex: 1, height: '100%', backgroundColor: ColorApp.white }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <View style={{ marginTop: 10, marginHorizontal: 20, width: '50%' }}>
                    <Text style={{ alignSelf: 'flex-start', marginTop: 22, fontFamily: Fonts.NunitoBold, fontSize: size.f24, color: ColorApp.nevyBlue }}>
                        Mobile Number
                    </Text>

                    <Text style={{
                        fontFamily: Fonts.zenr, fontSize: size.f20, color: ColorApp.grey,
                        width: '100%'
                    }}>A 4 digit OTP will be sent via SMS to verify your Mobile number!</Text>

                </View>

            </View>

            <View style={{ marginTop: '30%' }} />


            <PhoneInput
                placeholder={'Phone Number'}
                defaultCode="IN"
                autoFocus
                textInputStyle={{ fontFamily: Fonts.ZenMedium, fontSize: 22 }}
                codeTextStyle={{ fontFamily: Fonts.ZenMedium, backgroundColor: 'white', fontSize: 22 }}
                containerStyle={{ width: '90%', alignSelf: 'center', backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: ColorApp.lightGrey }}
                textContainerStyle={{ fontFamily: Fonts.ZenRegular, backgroundColor: 'white', fontSize: 14 }}
                onChangeFormattedText={text => {
                    setphoneNumber(text);
                }}
            />


            <View style={{ marginTop: 10 }} />




           
                <TouchableOpacity
                    onPress={() => {
                        sendOtp()

                    }}
                    style={{
                        backgroundColor: ColorApp.lightBlue, width: '90%', alignSelf: 'center',
                        marginTop: '20%',
                        paddingVertical: 10, borderRadius: 30
                    }}>
                    <Text style={{ alignSelf: 'center', fontFamily: Fonts.ZenMedium, color: '#fff', fontSize: size.f20 }}>Next</Text>
                </TouchableOpacity>

            <Pressable
                onPress={() => {
                    props.navigation.pop()


                }}
            >
                <Text style={{ textDecorationLine: 'underline', fontSize: size.f18, fontFamily: Fonts.ZenMedium, color: ColorApp.black, alignSelf: 'center', padding: 30 }}>Back to Signin</Text>
            </Pressable>

        </ScrollView>
    )
}


export default MobileNumber

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    phoneContainer: {
        width: '90%',
        alignSelf: 'center',
        height: 50,
    },

    textInput: {
        paddingVertical: 0,
        fontFamily: Fonts.ZenRegular
    },
});
