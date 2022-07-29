import React, { useEffect, useState } from "react";

import { SafeAreaView, Image, Pressable, Dimensions } from 'react-native'

import { ColorApp, Fonts, Imagelocal, SvgIcon } from '../theme'

import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import { TouchableOpacity } from "react-native-gesture-handler";

function SplashScreen(props) {

    let [count, setcount] = useState(0)

    useEffect(async () => {


        setInterval(() => {
            if (count <= 4) {
                let c = count++
                setcount(c)
            }
        }, 1000);

        setTimeout(() => {
            props.changeSplashstatus()
        }, 1000);
    }, [])

    console.log(count);

    return (
        <SafeAreaView style={{ height: '100%', justifyContent: 'center', width: '100%', alignSelf: 'center', alignItems: 'center', backgroundColor: ColorApp.white }}>

            <View delay={4800}>
                <>

                    <Text style={{
                        margin: 10, marginTop: 40,
                        alignSelf: 'center',
                        fontFamily: Fonts.ZenBold,
                        color: ColorApp.black,
                        fontSize: 20
                    }}>Welcome Back to My Demo app</Text>
                    <Pressable
                        style={{
                            alignSelf: 'center',
                            backgroundColor: ColorApp.lskyblue,
                            borderRadius: 30
                        }}
                        onPress={() => {
                            props.changeSplashstatus()
                        }}>
                        <Text style={{ alignSelf: 'center', textAlign: 'center', color: ColorApp.white, fontFamily: Fonts.ZenMedium, fontSize: 20, paddingVertical: 10, paddingHorizontal: 40 }}>Next</Text>
                    </Pressable>
                </>
            </View>

        </SafeAreaView>
    )
}

export default SplashScreen