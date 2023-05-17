import React, { useState, useEffect, createContext, useContext } from 'react'
import { TextInput, Text, View, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { UIHeader } from '../components'


function SettingScreen(props){
        // naivgation
        const {navigation,route}=props
        // funtion of navigate to/back
        const {navigate,goback}=navigation
    return <View style={{
        flex:1,
        backgroundColor: '#F5F5F5'
    }}>
        <UIHeader title={'SETTING'}/>
        <View style={{
            width:200,
            height:50,
            borderWidth:2,
            borderRadius:20,
            alignItems:'center',
            justifyContent:'center',
            marginTop:40,
            marginBottom:20,
            marginHorizontal:30,
            backgroundColor:'white'
        }}>
        <TouchableOpacity onPress={()=>{
            navigate(`Setting`)
        }}>
            <Text style={{
                color:'black',
                fontSize:15
            }}>
                Cấu Hình
            </Text>
        </TouchableOpacity>
        </View>
        <View style={{
            width:200,
            height:50,
            borderWidth:2,
            borderRadius:20,
            alignItems:'center',
            justifyContent:'center',
            marginTop:20,
            marginBottom:20,
            marginHorizontal:30,
            backgroundColor:'white'
        }}>
        <TouchableOpacity onPress={()=>{
            navigate('ModeScreen')
        }}>
            <Text style={{
                color:'black',
                fontSize:15
            }}>
                CÀi Đặt Ngưỡng
            </Text>
        </TouchableOpacity>
        </View>
    </View>
}   

export default SettingScreen