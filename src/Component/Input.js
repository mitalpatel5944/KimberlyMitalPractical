import React from "react";

import { View, Text, TextInput } from 'react-native'
import { ColorApp, Fonts, size, SvgIcon } from "../theme";

function Input(props) {
    return (
        <View style={[props.style,{
            flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10,
            paddingBottom: 5, marginHorizontal: 20, borderBottomColor: ColorApp.lightGrey, borderBottomWidth: 1
        }]}>
            <View style={{ flexDirection: 'row' }}>
                {props.phone && <View style={{ flexDirection: 'row', marginRight: 10 ,marginTop:10}}>
                    <Text style={{ fontFamily: Fonts.ZenLight, color: ColorApp.grey,alignSelf:'center',fontSize :20 }}>
                        +65
                    </Text>
                    <SvgIcon.down style={{ alignSelf: 'center', marginLeft: 5 }} />
                </View>}
                <TextInput
                {...props}
                    value={props.value}
                    maxLength={props.maxLength}
                    secureTextEntry={props.secureTextEntry}
                    placeholder={props.placeholder}
                    style={[
                        { fontFamily: props.family ? props.family : Fonts.ZenMedium,width:'80%', fontSize: size.f20,paddingBottom:-10, color: props.fontcolor ? props.fontcolor : ColorApp.black }]}
                    placeholderTextColor={'#9F9E9E'}
                    onChangeText={(text) => {
                        props.onChangeText(text)
                    }}
                />
            </View>
           
        </View>
    )
}


export default Input