
import React, { Component } from "react";

import { View, Text, TextInput, StyleSheet, FlatList, Image, Pressable, Dimensions, ImageBackground } from 'react-native'
import { ColorApp, Fonts, Imagelocal, size } from "../theme";

import { ScrollView } from "react-native-gesture-handler";






class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }


  

    render() {
        return (
          
                <View style={{ flex: 1,justifyContent:'center', backgroundColor: ColorApp.white }}>
                  <Text style={{fontSize:24,alignSelf:'center'}}>Dashboard Here</Text>
                </View>
           
        )
    }
}


export default HomeScreen

const styles = StyleSheet.create({
 
})

