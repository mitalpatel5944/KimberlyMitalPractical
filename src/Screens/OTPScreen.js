import React, { Component, useEffect, useState, useRef } from "react";

import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import { useDispatch } from "react-redux";
import Input from "../Component/Input";
import { LOGIN } from "../Redux/Constant";

import { ColorApp, Fonts, size, SvgIcon } from '../theme'


import Loader from "../Component/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";


import OTPTextInput from 'react-native-otp-textinput'

function OTPScreen(props) {


    const dispatch = useDispatch();

    const [logindata, setlogin] = useState({
        otp_no: '',
        mobile_no: props.route.params?.mobile_no
    })

    let otpInput = useRef(null);


    const [loading, setLoading] = useState(false)

    async function verifyOtp() {
        dispatch({ type: LOGIN, payload: '2' })
          }



    return (
        <ScrollView style={{ flex: 1, height: '100%', backgroundColor: ColorApp.white }}>
            <Loader loading={loading} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <View style={{ marginTop: 10, marginHorizontal: 20 ,width:'60%'}}>
                    <Text style={{ alignSelf: 'flex-start', marginTop: 22, fontFamily: Fonts.ZenBold, fontSize: size.f20, color: ColorApp.nevyBlue }}>
                        OTP Verification
                    </Text>

                    <Text style={{
                        
                        fontFamily: Fonts.ZenLight, fontSize: size.f18, color: ColorApp.grey
                    }}>Enter the OTP your received to </Text>
                    <Text style={{ alignSelf: 'flex-start', marginTop: 22, fontFamily: Fonts.ZenBold, fontSize: size.f20, color: ColorApp.nevyBlue }}>
                        {logindata.mobile_no}
                    </Text>
                </View>
               
            </View>
            <View style={{ marginTop: 60 }} />


            <View
            // style={{ marginHorizontal: 20 }}
            >

                <OTPTextInput ref={e => (otpInput = e)}
                    tintColor={ColorApp.lpink}
                    inputCount={6}
                    offTintColor={ColorApp.lpink}
                    autoFocus={true}
                    textInputStyle={{ backgroundColor: ColorApp.lpink, height: 70 }}
                    keyboardType="numeric"
                    handleTextChange={(val) => {
                        console.log("code", val);
                        setlogin({ ...logindata, otp_no: val })
                    }}
                />

                <View style={{ marginTop: 30 }} />

            </View>



            <TouchableOpacity
                onPress={() => {
                    verifyOtp()

                }}
                style={{ backgroundColor: ColorApp.lightBlue, width: '90%', alignSelf: 'center', marginTop: 30, paddingVertical: 10, borderRadius: 30 }}>
                <Text style={{ alignSelf: 'center', fontFamily: Fonts.ZenMedium, color: '#fff', fontSize: 24 }}>Verify</Text>
            </TouchableOpacity>




        </ScrollView>
    )
}


export default OTPScreen