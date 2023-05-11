import React, { useState, useEffect, createContext, useContext } from 'react'
import { images, icons } from '../constants/index'
import { TextInput, Text, View, Image, ImageBackground, TouchableOpacity, FlatList, TouchableWithoutFeedback, Platform, Alert, ScrollView } from 'react-native'
import { isValidatePass, isValidating } from '../utilies/validating'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ChartLine from './chartmodule/chartmodul'

function ChartScreens() {
    const [valueChart, setValueChart] = useState([32.7, 31.1, 32.8, 34, 33.6, 33.5]);
    const [timeChart, setTimeChart] = useState([0, 0, 0, 0, 0, 0]);
    const [nameChart,setNameChart]=useState('Temperature')
    const [nameChart1,setNameChart1]=useState('Temperature')
    const [unit,setUnit]=useState('*C')
    const [unit1,setUnit1]=useState('*C')

    const [menu,setMenu]=useState([
        {
            name:'Temperature',
            unit:'*C'
        },
        {
            name:'Light',
            unit:'lux'
        },
        {
            name:'Humidity',
            unit:'%'
        },
        {
            name:'Soil Moisture',
            unit:'%'
        },
        {
            name:'Nitrogen',
            unit:'mg/kg'
        },
        {
            name:'Phosphorus',
            unit:'mg/kg'
        },
        {
            name:'Potassium',
            unit:'mg/kg'
        },
    ])

    return <ScrollView style={{
        flex: 1,
        backgroundColor: '#F5F5F5'
    }}>
        <Text style={{
            fontSize:20,
            color:'black',
            fontWeight:'bold',
            marginTop:10,
            marginBottom:5,
            alignSelf:'center'
        }}>Chart Screen</Text>
        {/*  */}
        {/*  */}
        {/* NHA KINH 1 */}
        <Text style={{
            fontSize:16,
            color:'black',
            fontWeight:'bold',
            marginBottom:5,
            marginHorizontal:20
        }}>Nha Kinh 1</Text>
        <View style={{
            height:380,
            marginHorizontal:5,
            borderWidth:2,
            marginBottom:5,
            marginTop:5
        }}>
            <View style={{
                height:60,
                flexDirection:'row'
            }}>
                <FlatList 
        style={{
            flex:1,
            backgroundColor:'white'
        }}
        data={menu}
        keyExtractor={item => item.name}
        horizontal
        renderItem={({item})=>{
            return <View style={{
                alignSelf:'center',
                padding:12,
                alignItems:'center',
                borderWidth:2,
                width:130,
                marginHorizontal:5,
                borderRadius:30,
                backgroundColor:'#8DEEEE'
            }}>
                <TouchableOpacity onPress={()=>{
                    setNameChart(item.name)
                    setUnit(item.unit)
                    }}>
                <Text style={{
                    color:'black',
                    alignSelf:'center',
                    
                }}>
                    {item.name}
                </Text></TouchableOpacity>
            </View>
        }}
        >
        </FlatList>
            </View>
        <View style={{
            alignSelf:'center'
        }}>
        <View style={{height:3, backgroundColor:'gray',marginBottom:4,marginTop:4}}/>
        <ChartLine
            datas={valueChart}
            labels={timeChart}
            coment={nameChart}
            unit={unit}
            /></View>
        </View>
        {/*  */}
        {/*  */}
        {/* NHA KINH 2 */}
        <Text style={{
            fontSize:16,
            color:'black',
            fontWeight:'bold',
            marginBottom:5,
            marginHorizontal:20,
            marginTop:10
        }}
        >Nha Kinh 2</Text>
        <View style={{
            height:380,
            marginHorizontal:5,
            borderWidth:2,
            marginBottom:5,
            marginTop:5
        }}>
            <View style={{
                height:60,
                flexDirection:'row'
            }}>
                <FlatList 
        style={{
            flex:1,
            backgroundColor:'white'
        }}
        data={menu}
        keyExtractor={item => item.name}
        horizontal
        renderItem={({item})=>{
            return <View style={{
                alignSelf:'center',
                padding:12,
                alignItems:'center',
                borderWidth:2,
                width:130,
                marginHorizontal:5,
                borderRadius:30,
                backgroundColor:'#8DEEEE'
            }}>
                <TouchableOpacity onPress={()=>{
                    setNameChart1(item.name)
                    setUnit1(item.unit)
                    }}>
                <Text style={{
                    color:'black',
                    alignSelf:'center'
                }}>
                    {item.name}
                </Text></TouchableOpacity>
            </View>
        }}
        >
        </FlatList>
            </View>
        <View style={{
            alignSelf:'center'
        }}>
        <View style={{height:3, backgroundColor:'gray',marginBottom:4,marginTop:4}}/>
        <ChartLine
            datas={valueChart}
            labels={timeChart}
            coment={nameChart1}
            unit={unit1}
            /></View>
        </View>
    </ScrollView>
}

export default ChartScreens