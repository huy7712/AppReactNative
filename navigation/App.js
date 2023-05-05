import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome,LoginSceens,Reg, LoginSceensister } from '../Screens'
import UITabs from './UITab'

const Stack= createNativeStackNavigator()
function AppNav(props){
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name={'Welcome'} component={Welcome}/> 
            <Stack.Screen name={'LoginSceens'} component={LoginSceens}/>
            {/* <Stack.Screen name={'Register'} component={Register}/>  */}
            <Stack.Screen name={'UITabs'} component={UITabs}/>
        </Stack.Navigator>
    </NavigationContainer>
}

export default AppNav