import React, { Component } from "react";

import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

import { ColorApp, Fonts, Imagelocal, SvgIcon } from '../theme'

import Swiper from 'react-native-swiper'

const { width, height } = Dimensions.get('window')
class InitialScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, height: '100%', backgroundColor: ColorApp.white }}>

                <ScrollView>

                    <Swiper style={styles.wrapper} showsButtons={false}
                    activeDot={<View style={{backgroundColor: ColorApp.skyblue, width: 15, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                    >
                        <View style={styles.slide1}>
                            <Text style={{ alignSelf: 'center', marginTop: 40, fontFamily: Fonts.ZenBold,
                             fontSize: 22, color: ColorApp.nevyBlue }}>We are here</Text>

                            <Text style={{
                                alignSelf: 'center', width: 300, textAlign: 'center',
                                fontFamily: Fonts.ZenLight, fontSize: 16, color: ColorApp.grey,  paddingTop: 10
                            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                              </View>
                        <View style={styles.slide1}>
                            <Text style={{ alignSelf: 'center', marginTop: 40, fontFamily: Fonts.ZenBold, fontSize: 22, color: ColorApp.nevyBlue }}>We are here</Text>

                         
                            <Text style={{
                                alignSelf: 'center', width: 300, textAlign: 'center',
                                fontFamily: Fonts.ZenLight, fontSize: 16, color: ColorApp.grey,  paddingTop: 10
                            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                          </View>
                        
                    </Swiper>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '30%' }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('RegisterScreen')
                            }}
                            style={{ backgroundColor: ColorApp.lightBlue, width: width / 2.5, paddingVertical: 10, borderRadius: 30 }}>
                            <Text style={{ alignSelf: 'center', fontFamily: Fonts.ZenMedium, color: '#fff', fontSize: 20 }}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('LoginScreen')
                            }}
                            style={{ backgroundColor: ColorApp.lightPink, width: width / 2.5, marginLeft: 10, paddingVertical: 10, borderRadius: 30 }}>
                            <Text style={{ alignSelf: 'center', fontFamily: Fonts.ZenMedium, color: '#fff', fontSize: 20 }}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }
}

export default InitialScreen



const styles = StyleSheet.create({
    wrapper: {
        height:500,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    slide1: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        height:100,
        // backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})
