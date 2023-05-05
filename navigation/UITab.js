import { Nhakinh,Setting,Profiles,Nhakinh2 } from "../Screens";
import * as React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5'


const Tab= createBottomTabNavigator();
const screenOptionss=({route})=>({
    headerShown:false,
    tabBarActiveTintColor:'#FF0033',
    tabBarInactiveTintColor:'black',
    tabBarIcon:({focused,color,size})=>{
        let iconName=''
        let screenName=route.name
        if (screenName=='Nhakinh'){
            iconName='home'
        }
        if (screenName=='Nhakinh2'){
            iconName='home'
        }
        if (screenName=='Setting'){
            iconName='cog'
        }
        if (screenName=='Profile'){
            iconName='user'
        }
        return <Icon
                name={iconName}
                size={20}
                color={focused?'#FF0033':'black'}
            />
    }
})
function UITabs(){
    return <Tab.Navigator screenOptions={screenOptionss}>
        <Tab.Screen name={'Nhakinh'} component={Nhakinh}/>
        <Tab.Screen name={'Nhakinh2'} component={Nhakinh2}/>
        <Tab.Screen name={'Setting'} component={Setting}/>
        <Tab.Screen name={'Profile'} component={Profiles}/>
    </Tab.Navigator>
}

export default UITabs