import React from "react";

import { View, Text, TextInput } from 'react-native'
import { ColorApp, Fonts, SvgIcon } from "../theme";


function InputWithIcon(props) {
    return (
        <View style={{
             paddingRight: 10,
            paddingBottom: 5, marginHorizontal: 10, borderBottomColor: ColorApp.lightGrey, borderBottomWidth: 1
        }}>
            <View style={{ flexDirection: 'row' }}>
                {props.icon()}
                <Text style={{ marginHorizontal: 10, fontFamily: Fonts.ZenRegular,lineHeight:18,textAlign:'center',paddingTop:10, fontSize: 18, color: ColorApp.dgrey }}>
                    {props.title}
                </Text>

            </View>
            <TextInput
                value={props.value}
                multiline={props.multiline}
                placeholder={props.placeholder}
                style={{ fontFamily: Fonts.ZenMedium,marginLeft :30,marginBottom :-10,marginTop : -10, fontSize: 18,color: props.fontcolor ? props.fontcolor : ColorApp.black }}
                placeholderTextColor={'#9F9E9E'}
                onChangeText={(text) => {
                    props.onChangeText(text)
                }}
            />
        </View>
    )
}


export default InputWithIcon