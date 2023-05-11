import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome,LoginSceens,Reg, LoginSceensister,Nhakinh2, HomeScreen, TestNhaKinh } from '../Screens'
import UITabs from './UITab'
import { DataProvider } from '../Screens/getdata' 

const Stack= createNativeStackNavigator()
function AppNav(props){
    return <DataProvider>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name={'Welcome'} component={Welcome}/> 
            <Stack.Screen name={'LoginSceens'} component={LoginSceens}/>
            {/* <Stack.Screen name={'Register'} component={Register}/>  */}
            <Stack.Screen name={'UITabs'} component={UITabs}/>
            <Stack.Screen name={'NhaKinh1'} component={TestNhaKinh}/>
            <Stack.Screen name={'NhaKinh2'} component={Nhakinh2}/>
        </Stack.Navigator>
    </NavigationContainer>
    </DataProvider>
}

export default AppNav