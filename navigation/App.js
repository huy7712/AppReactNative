import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome,LoginSceens,Reg, LoginSceensister,Nhakinh2, TestNhaKinh,Setting,ModeScreen } from '../Screens'
import UITabs from './UITab'
import { DataProvider } from '../Screens/getdata' 
import { ModeProvider } from '../Screens/getMode'

const Stack= createNativeStackNavigator()
function AppNav(props){
    return <DataProvider>
        <ModeProvider>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{
            headerShown:false
        }}>
            {/* <Stack.Screen name={'Welcome'} component={Welcome}/>  */}
            {/* <Stack.Screen name={'LoginSceens'} component={LoginSceens}/> */}
            {/* <Stack.Screen name={'Register'} component={Register}/>  */}
            <Stack.Screen name={'UITabs'} component={UITabs}/>
            <Stack.Screen name={'NhaKinh1'} component={TestNhaKinh}/>
            <Stack.Screen name={'NhaKinh2'} component={Nhakinh2}/>
            <Stack.Screen name={'Setting'} component={Setting}/>
            <Stack.Screen name={'ModeScreen'} component={ModeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    </ModeProvider>
    </DataProvider>
}

export default AppNav