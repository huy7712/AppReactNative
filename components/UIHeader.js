import React, {Component} from "react"

import { TextInput, Text, View, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Alert, ScrollView, FlatList } from 'react-native'


function UIHeader(props){
    return <View style={{
        height:60,
        backgroundColor:'#FF3300'
    }}>
        <Text style={{
            color:'white',
            fontSize:15,
            alignSelf:'center',
            lineHeight:45
        }}>{props.title}</Text>
    </View>
}

export default UIHeader