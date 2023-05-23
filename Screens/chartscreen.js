import React, { useState, useEffect, createContext, useContext } from 'react'
import { images, icons } from '../constants/index'
import { TextInput, Text, View, Image, ImageBackground, TouchableOpacity, FlatList, TouchableWithoutFeedback, Platform, Alert, ScrollView } from 'react-native'
import { isValidatePass, isValidating } from '../utilies/validating'
import Icon from 'react-native-vector-icons/FontAwesome5'
import moment from 'moment'
import ChartLine from './chartmodule/chartmodul'
import Chartnhakinh2 from './chartmodule/chartnhakinh2'

function ChartScreens() {
    const [valueChart, setValueChart] = useState([0]);
    const [timeChart, setTimeChart] = useState([0, 0, 0, 0, 0, 0]);
    const [nameChart, setNameChart] = useState('')
    const [unit, setUnit] = useState('°C')

    const [getADC1,setGetADC1]=useState([0])
    const [gettimeADC1,setGettimeADC1]=useState([0])
    const [onPressADC1,setonPressADC1]=useState(false)

// ADC
// ADC
const [selectrueadc, setselectrueadc] = useState(true)
    const [onPressadc, setonPressadc] = useState(false)
    useEffect(() => {
        setInterval(fetchDataadc, 5000)
        return () => {
            clearInterval(setInterval(fetchDataadc, 5000))
        }
    }, [])
    useEffect(() => {
        if (onPressadc) {
            setValueChart(getADC1)
            setTimeChart(gettimeADC1)
            setselectrueadc(true)
        }
    }, [selectrueadc, onPressadc])
    const updatedValueadc = [];
    const updatedTimeadc = [];
    function fetchDataadc() {
        fetch('http://192.168.0.100:1234/api/adc1Active')
            .then(response => response.json())
            .then(json => {
                const data = json; // Lưu trữ dữ liệu vào biến trung gian

                data.forEach((item) => {
                    let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
                    updatedValueadc.shift();
                    updatedTimeadc.shift();
                    updatedValueadc.push(item.value.toFixed(1));
                    updatedTimeadc.push(localTime);
                });
                setGetADC1(updatedValueadc);
                setGettimeADC1(updatedTimeadc);
                setselectrueadc(false)
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        fetch('http://192.168.0.100:1234/api/adc1Start')
            .then(response => response.json())
            .then(data => {
                data.forEach((item) => {
                    let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
                    updatedValueadc.unshift((item.value).toFixed(1));
                    updatedTimeadc.unshift(localTime);
                })
                setGetADC1(updatedValueadc);
                setGettimeADC1(updatedTimeadc);

            })
            .catch(error => {
                console.error(error)
            })
    }, [])
// light
// light
const [valueLight, setValueLight] = useState([0])
const [timeLight, setTimeLight] = useState([0])
const [selectrue, setselectrue] = useState(true)
    const [onPressLight, setonPressLight] = useState(false)
    useEffect(() => {
        setInterval(fetchData, 5000)
        return () => {
            clearInterval(setInterval(fetchData, 5000))
        }
    }, [])
    useEffect(() => {
        if (onPressLight) {
            setValueChart(valueLight)
            setTimeChart(timeLight)
            setselectrue(true)
        }
    }, [selectrue, onPressLight])
    const updatedValueChart = [];
    const updatedTimeChart = [];
    function fetchData() {
        fetch('http://192.168.0.100:1234/api/lightI2C1Active')
            .then(response => response.json())
            .then(json => {
                const data = json; // Lưu trữ dữ liệu vào biến trung gian

                data.forEach((item) => {
                    let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
                    updatedValueChart.shift();
                    updatedTimeChart.shift();
                    updatedValueChart.push(item.light.toFixed(0));
                    updatedTimeChart.push(localTime);
                });
                setValueLight(updatedValueChart);
                setTimeLight(updatedTimeChart);
                setselectrue(false)


                // Hiển thị updatedValueChart trong cảnh báo
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        fetch('http://192.168.0.100:1234/api/lightI2C1Start')
            .then(response => response.json())
            .then(data => {
                data.forEach((item) => {
                    let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
                    updatedValueChart.unshift((item.light).toFixed(0));
                    updatedTimeChart.unshift(localTime);
                })
                setValueLight(updatedValueChart);
                setTimeLight(updatedTimeChart);

            })
            .catch(error => {
                console.error(error)
            })
    }, [])
// Nhiet Do && Do Am Khi
const [getHumI2C1,setGetHumI2C1]=useState([0])
const [getTemI2C1,setGetTemI2C1]=useState([0])
const [getTimeI2C1,setGetTimeI2C1]=useState([0])

const [selectrueI2C, setselectrueI2C] = useState(true)
    const [onPressTem, setonPressTem] = useState(false)
    const [onPressHum, setonPressHum] = useState(false)
    useEffect(() => {
        setInterval(fetchDataI2C, 5000)
        return () => {
            clearInterval(setInterval(fetchDataI2C, 5000))
        }
    }, [])
    useEffect(() => {
        if (onPressTem) {
            setValueChart(getTemI2C1)
            setTimeChart(getTimeI2C1)
            setselectrueI2C(true)
        }
        if (onPressHum) {
            setValueChart(getHumI2C1)
            setTimeChart(getTimeI2C1)
            setselectrueI2C(true)
        }
    }, [selectrueI2C, onPressTem, onPressHum])
    const updatedHum = [];
    const updatedTem = [];
    const updatedTimeI2C = [];
    function fetchDataI2C() {
        fetch('http://192.168.0.100:1234/api/temHumI2C1Active')
            .then(response => response.json())
            .then(json => {
                const data = json; // Lưu trữ dữ liệu vào biến trung gian

                data.forEach((item) => {
                    let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
                    updatedHum.shift();
                    updatedHum.push(item.hum.toFixed(1));
                    updatedTem.shift();
                    updatedTem.push(item.tem.toFixed(1));
                    updatedTimeI2C.shift();
                    updatedTimeI2C.push(localTime);
                });
                setGetHumI2C1(updatedHum);
                setGetTemI2C1(updatedTem);
                setGetTimeI2C1(updatedTimeI2C);
                setselectrueI2C(false)
                // console.log(data)
                // Hiển thị updatedHum trong cảnh báo
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        fetch('http://192.168.0.100:1234/api/temHumI2C1Start')
            .then(response => response.json())
            .then(data => {
                data.forEach((item) => {
                    let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
                    updatedHum.unshift((item.hum).toFixed(1));
                    updatedTem.unshift((item.tem).toFixed(1));
                    updatedTimeI2C.unshift(localTime);
                })
                setGetHumI2C1(updatedHum);
                setGetTemI2C1(updatedTem);
                setGetTimeI2C1(updatedTimeI2C);

            })
            .catch(error => {
                console.error(error)
            })
    }, [])

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
                            setValueChart(getTemI2C1)
                            setTimeChart(getTimeI2C1)
                            setonPressTem(true)
                            setonPressHum(false)
                            setonPressLight(false)
                            setonPressadc(false)
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
                            setTimeChart(getTimeI2C1)
                            setValueChart(getHumI2C1)
                            setonPressHum(true)
                            setonPressTem(false)
                            setonPressLight(false)
                            setonPressadc(false)
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
                            setValueChart(valueLight)
                            setTimeChart(timeLight)
                            setonPressLight(true)
                            setonPressTem(false)
                            setonPressHum(false)
                            setonPressadc(false)
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
                            setValueChart(getADC1)
                            setTimeChart(gettimeADC1)
                            setonPressadc(true)
                            setonPressLight(false)
                            setonPressTem(false)
                            setonPressHum(false)
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
        <Chartnhakinh2/>

    </ScrollView>
}

export default ChartScreens