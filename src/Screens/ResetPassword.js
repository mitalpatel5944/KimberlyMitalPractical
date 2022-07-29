import React, { useState } from "react";

import { View, Text, Pressable, Image, Modal } from 'react-native'
import Input from "../Component/Input";
import { ColorApp, Fonts, Imagelocal, size, SvgIcon } from "../theme";

function ResestPassword(props) {

    const [logindata, setlogin] = useState({

        password: '',
        cpassword: ''
    })

    const [pswd, setpswd] = useState(false)
    const [cpswd, setcpswd] = useState(false)


   const [isVisibleUnit, setisVisibleUnit] = useState(true)
 
    function renderModal() {
        return (
            <Modal
                onRequestClose={() => setisVisibleUnit(false)}
                visible={isVisibleUnit} transparent style={{ backgroundColor: '#000000DE' }}>
                <Pressable
                    onPress={() => setisVisibleUnit(false)}
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        backgroundColor: '#000000DE'

                    }}>


                    <View
                        style={{
                            width: '80%',
                            height: '30%',
                            padding: 5,
                            flexDirection: 'column',
                            //    marginTop :'30%',
                            backgroundColor: ColorApp.white,
                            opacity: 1,
                            borderRadius: 10,
                            paddingHorizontal: 20
                        }}>

                        <View style={{ marginTop: 40, flexDirection: 'row' }}>
                            <Image source={Imagelocal.right} style={{ alignSelf: 'center' }} />
                            <Text style={{ fontFamily: Fonts.ZenBold, fontSize: size.f24, color: ColorApp.black, paddingLeft: 10, alignSelf: 'center' }}>Success! </Text>
                        </View>

                        <Text style={{ color: ColorApp.grey, fontFamily: Fonts.ZenMedium, lineHeight: 18, paddingTop: 10, fontSize: size.f18 }}>Your password has been update.</Text>
                        <Pressable
                            onPress={() => {

                                setisVisibleUnit(false)
                            }}
                            style={{ backgroundColor: ColorApp.lightBlue, width: '90%', alignSelf: 'center', marginTop: 20, paddingVertical: 10, borderRadius: 30 }}>
                            <Text style={{ alignSelf: 'center', fontFamily: Fonts.ZenMedium, color: '#fff', fontSize: 20 }}>Continue</Text>
                        </Pressable>
                    </View>

                </Pressable>

            </Modal>
        )
    }

    return (
        <View style={{ backgroundColor: ColorApp.white, flex: 1 }}>
            <View style={{ paddingHorizontal: 20 }}>
                <SvgIcon.CartoonStand style={{ alignSelf: 'flex-end', margin: 20 }} />

                <Text style={{ color: ColorApp.nevyBlue, fontFamily: Fonts.ZenMedium, fontSize: size.f26 }}>Reset Password</Text>

                <Text style={{ color: ColorApp.grey, fontFamily: Fonts.ZenMedium, lineHeight: 18, paddingTop: 10, fontSize: size.f18 }}>Please enter your new password</Text>
            </View>

            <View style={{ marginTop: 50 }} />



            <Input
                placeholder={'Password'}
                secureTextEntry={pswd}
                value={logindata.password}
                onChangeText={(text) => {
                    setlogin({ ...logindata, password: text })
                }}
                icon={() => !pswd ? (
                    <Pressable onPress={() => {
                        setpswd(!pswd)
                    }} style={{ alignSelf: 'center' }}>
                        <SvgIcon.eye style={{ alignSelf: 'center', marginTop: 5 }} />
                    </Pressable>
                ) : (
                    <Pressable onPress={() => {
                        setpswd(!pswd)
                    }} style={{ alignSelf: 'center' }}>
                        <SvgIcon.eyehide style={{ alignSelf: 'center', marginTop: 5 }} />
                    </Pressable>
                )}
            />

            <View style={{ margin: 20 }} />

            <Input
                placeholder={'Re-type password'}
                secureTextEntry={cpswd}
                value={logindata.cpassword}
                onChangeText={(text) => {
                    setlogin({ ...logindata, cpassword: text })
                }}
                icon={() => !cpswd ? (
                    <Pressable onPress={() => {
                        setcpswd(!cpswd)
                    }} style={{ alignSelf: 'center' }}>
                        <SvgIcon.eye style={{ alignSelf: 'center', marginTop: 5 }} />
                    </Pressable>
                ) : (
                    <Pressable onPress={() => {
                        setcpswd(!cpswd)
                    }} style={{ alignSelf: 'center' }}>
                        <SvgIcon.eyehide style={{ alignSelf: 'center', marginTop: 5 }} />
                    </Pressable>
                )}
            />

            <Pressable
                onPress={() => {
setisVisibleUnit(true)

                }}
                style={{ backgroundColor: ColorApp.lightBlue, width: '90%', alignSelf: 'center', marginTop: 60, paddingVertical: 10, borderRadius: 30 }}>
                <Text style={{ alignSelf: 'center', fontFamily: Fonts.ZenMedium, color: '#fff', fontSize: 20 }}>Reset</Text>
            </Pressable>


            {renderModal()}

        </View>
    )
}

export default ResestPassword