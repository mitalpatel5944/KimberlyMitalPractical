import React, { useState } from "react";

import { View, Text, Pressable } from 'react-native'
import Input from "../Component/Input";
import Loader from "../Component/Loader";

import { ColorApp, Fonts, size, SvgIcon } from "../theme";

function ForgotPassword(props) {

    const [email, setEmail] = useState('')

    const [loading, setLoading] = useState(false)


    function forgotPassword() {
        
    }

    return (
        <View style={{ backgroundColor: ColorApp.white, flex: 1 ,justifyContent:'center'}}>
            <Loader loading={loading} />

            <View style={{ paddingHorizontal: 20 }}>
                 <Text style={{ color: ColorApp.nevyBlue, fontFamily: Fonts.ZenMedium, fontSize: size.f26 }}>Forgot Password</Text>

                <Text style={{ color: ColorApp.grey, fontFamily: Fonts.ZenMedium, lineHeight: 18, paddingTop: 10, fontSize: size.f20 }}>Enter your email and we’ll send the instruction</Text>

            </View>

            <View style={{ marginTop: 50 }} />

            <Input
                style={{ marginHorizontal: 50 }}
                placeholder={'Your email'}
                value={email}
                onChangeText={(text) => {
                    setEmail(text)
                }}
                icon={() => (
                    <View />
                )}
            />

            <Pressable
                onPress={() => {
                    forgotPassword()

                }}
                style={{ backgroundColor: ColorApp.lightBlue, width: '90%', alignSelf: 'center', marginTop: 60, paddingVertical: 10, borderRadius: 30 }}>
                <Text style={{ alignSelf: 'center', fontFamily: Fonts.ZenMedium, color: '#fff', fontSize: 20 }}>Send</Text>
            </Pressable>

            <Pressable
                onPress={() => {
                    props.navigation.pop()


                }}
            >
                <Text style={{ textDecorationLine: 'underline', fontSize: size.f24, fontFamily: Fonts.ZenMedium, color: ColorApp.black, alignSelf: 'center', padding: 30 }}>Back to Signin</Text>
            </Pressable>


        </View>
    )
}

export default ForgotPassword