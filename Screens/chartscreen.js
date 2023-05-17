import React, { useState, useEffect, createContext, useContext } from 'react'
import { images, icons } from '../constants/index'
import { TextInput, Text, View, Image, ImageBackground, TouchableOpacity, FlatList, TouchableWithoutFeedback, Platform, Alert, ScrollView } from 'react-native'
import { isValidatePass, isValidating } from '../utilies/validating'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ChartLine from './chartmodule/chartmodul'

function ChartScreens() {
    const [valueChart, setValueChart] = useState([32.7, 31.1, 32.8, 34, 33.6, 33.5]);
    const [timeChart, setTimeChart] = useState([0, 0, 0, 0, 0, 0]);
    const [valueChart1, setValueChart1] = useState([32.7, 32.7, 31, 34, 32.6, 31.5]);
    const [timeChart1, setTimeChart1] = useState([0, 0, 0, 0, 0, 0]);
    const [nameChart, setNameChart] = useState('')
    const [nameChart1, setNameChart1] = useState('')
    const [unit, setUnit] = useState('*C')
    const [unit1, setUnit1] = useState('*C')

    return <ScrollView style={{
        flex: 1,
        backgroundColor: '#F5F5F5'
    }}>
        <Text style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 5,
            alignSelf: 'center'
        }}>Chart Screen</Text>
        {/*  */}
        {/*  */}
        {/* NHA KINH 1 */}
        <Text style={{
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold',
            marginBottom: 5,
            marginHorizontal: 20
        }}>Nhà Kính 1</Text>
        <View style={{
            height: 380,
            marginHorizontal: 5,
            borderWidth: 2,
            marginBottom: 5,
            marginTop: 5
        }}>
            <View style={{
                height: 60,
                flexDirection: 'row',

            }}
                horizontal
            >
                <ScrollView style={{ flexDirection: 'row' }} horizontal>
                    {/*  */}
                    {/*  */}
                    {/* Nhiệt Độ */}
                    <TouchableOpacity

                        style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                            borderWidth: 2,
                            width: 130,
                            marginHorizontal: 5,
                            borderRadius: 30,
                            backgroundColor: '#8DEEEE'
                        }}
                        onPress={() => {
                            setNameChart('Nhiệt Độ')
                            setUnit('°C')
                        }}
                    >
                        <Text

                            style={{
                                color: 'black',
                                alignSelf: 'center'
                            }}>
                            Nhiệt Độ
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* Độ Ẩm */}
                    <TouchableOpacity

                        style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                            borderWidth: 2,
                            width: 130,
                            marginHorizontal: 5,
                            borderRadius: 30,
                            backgroundColor: '#8DEEEE'
                        }}
                        onPress={() => {
                            setNameChart('Độ Ẩm')
                            setUnit('%')
                        }}
                    >
                        <Text

                            style={{
                                color: 'black',
                                alignSelf: 'center'
                            }}>
                            Độ Ẩm
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* Ánh Sáng */}
                    <TouchableOpacity

                        style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                            borderWidth: 2,
                            width: 130,
                            marginHorizontal: 5,
                            borderRadius: 30,
                            backgroundColor: '#8DEEEE'
                        }}
                        onPress={() => {
                            setNameChart('Ánh Sáng')
                            setUnit('lux')
                        }}
                    >
                        <Text

                            style={{
                                color: 'black',
                                alignSelf: 'center'
                            }}>
                            Ánh Sáng
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* Độ Ẩm Đất */}
                    <TouchableOpacity

                        style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                            borderWidth: 2,
                            width: 130,
                            marginHorizontal: 5,
                            borderRadius: 30,
                            backgroundColor: '#8DEEEE'
                        }}
                        onPress={() => {
                            setNameChart('Độ Ẩm Đất')
                            setUnit('%')
                        }}
                    >
                        <Text

                            style={{
                                color: 'black',
                                alignSelf: 'center'
                            }}>
                            Độ Ẩm Đất
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{
                alignSelf: 'center'
            }}>
                <View style={{ height: 3, backgroundColor: 'gray', marginBottom: 4, marginTop: 4 }} />
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
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold',
            marginBottom: 5,
            marginHorizontal: 20
        }}>Nhà Kính 2</Text>
        <View style={{
            height: 380,
            marginHorizontal: 5,
            borderWidth: 2,
            marginBottom: 5,
            marginTop: 5
        }}>
            <View style={{
                height: 60,
                flexDirection: 'row',

            }}
                horizontal
            >
                <ScrollView style={{ flexDirection: 'row' }} horizontal>
                    {/*  */}
                    {/*  */}
                    {/* Nhiệt Độ */}
                    <TouchableOpacity

                        style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                            borderWidth: 2,
                            width: 130,
                            marginHorizontal: 5,
                            borderRadius: 30,
                            backgroundColor: '#8DEEEE'
                        }}
                        onPress={() => {
                            setNameChart1('Nhiệt Độ')
                            setUnit1('°C')
                        }}
                    >
                        <Text

                            style={{
                                color: 'black',
                                alignSelf: 'center'
                            }}>
                            Nhiệt Độ
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* Độ Ẩm */}
                    <TouchableOpacity

                        style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                            borderWidth: 2,
                            width: 130,
                            marginHorizontal: 5,
                            borderRadius: 30,
                            backgroundColor: '#8DEEEE'
                        }}
                        onPress={() => {
                            setNameChart1('Độ Ẩm')
                            setUnit1('%')
                        }}
                    >
                        <Text

                            style={{
                                color: 'black',
                                alignSelf: 'center'
                            }}>
                            Độ Ẩm
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* Ánh Sáng */}
                    <TouchableOpacity

                        style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                            borderWidth: 2,
                            width: 130,
                            marginHorizontal: 5,
                            borderRadius: 30,
                            backgroundColor: '#8DEEEE'
                        }}
                        onPress={() => {
                            setNameChart1('Ánh Sáng')
                            setUnit1('lux')
                        }}
                    >
                        <Text

                            style={{
                                color: 'black',
                                alignSelf: 'center'
                            }}>
                            Ánh Sáng
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* Độ Ẩm Đất */}
                    <TouchableOpacity

                        style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                            borderWidth: 2,
                            width: 130,
                            marginHorizontal: 5,
                            borderRadius: 30,
                            backgroundColor: '#8DEEEE'
                        }}
                        onPress={() => {
                            setNameChart1('Độ Ẩm Đất')
                            setUnit1('%')
                        }}
                    >
                        <Text

                            style={{
                                color: 'black',
                                alignSelf: 'center'
                            }}>
                            Độ Ẩm Đất
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* pH */}
                    <TouchableOpacity

                        style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                            borderWidth: 2,
                            width: 130,
                            marginHorizontal: 5,
                            borderRadius: 30,
                            backgroundColor: '#8DEEEE'
                        }}
                        onPress={() => {
                            setNameChart1('pH')
                            setUnit1('pH')
                        }}
                    >
                        <Text

                            style={{
                                color: 'black',
                                alignSelf: 'center'
                            }}>
                            pH
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* N */}
                    <TouchableOpacity

                        style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                            borderWidth: 2,
                            width: 130,
                            marginHorizontal: 5,
                            borderRadius: 30,
                            backgroundColor: '#8DEEEE'
                        }}
                        onPress={() => {
                            setNameChart1('Nitrogen')
                            setUnit1('mg/kg')
                        }}
                    >
                        <Text

                            style={{
                                color: 'black',
                                alignSelf: 'center'
                            }}>
                            Nitrogen
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* Phosphorus */}
                    <TouchableOpacity

                        style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                            borderWidth: 2,
                            width: 130,
                            marginHorizontal: 5,
                            borderRadius: 30,
                            backgroundColor: '#8DEEEE'
                        }}
                        onPress={() => {
                            setNameChart1('Phosphorus')
                            setUnit1('mg/kg')
                        }}
                    >
                        <Text

                            style={{
                                color: 'black',
                                alignSelf: 'center'
                            }}>
                            Phosphorus
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* Potassium */}
                    <TouchableOpacity

                        style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                            borderWidth: 2,
                            width: 130,
                            marginHorizontal: 5,
                            borderRadius: 30,
                            backgroundColor: '#8DEEEE'
                        }}
                        onPress={() => {
                            setNameChart1('Potassium')
                            setUnit1('mg/kg')
                        }}
                    >
                        <Text

                            style={{
                                color: 'black',
                                alignSelf: 'center'
                            }}>
                            Potassium
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{
                alignSelf: 'center'
            }}>
                <View style={{ height: 3, backgroundColor: 'gray', marginBottom: 4, marginTop: 4 }} />
                {/* Chart 2 */}
                <ChartLine
                    datas={valueChart1}
                    labels={timeChart1}
                    coment={nameChart1}
                    unit={unit1}
                /></View>
        </View>
    </ScrollView>
}

export default ChartScreens