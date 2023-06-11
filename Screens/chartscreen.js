import React, { useState, useEffect, createContext, useContext } from 'react'
import { images, icons } from '../constants/index'
import { TextInput, Text, View, Image, ImageBackground, TouchableOpacity, FlatList, TouchableWithoutFeedback, Platform, Alert, ScrollView } from 'react-native'
import { isValidatePass, isValidating } from '../utilies/validating'
import Spinner from 'react-native-loading-spinner-overlay/lib'
import moment from 'moment'
import style from '../components/style'
import text from '../components/text'
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

    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);
    const [loading4, setLoading4] = useState(false);

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
        fetch('https://raspi.iotgreenhouse.tech/api/adc1Active')
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
        fetch('https://raspi.iotgreenhouse.tech/api/adc1Start')
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
        fetch('https://raspi.iotgreenhouse.tech/api/lightI2C1Active')
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
        fetch('https://raspi.iotgreenhouse.tech/api/lightI2C1Start')
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
        fetch('https://raspi.iotgreenhouse.tech/api/temHumI2C1Active')
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
        fetch('https://raspi.iotgreenhouse.tech/api/temHumI2C1Start')
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
        <Text style={text.TextNhaKinhChartScreen}>Nhà Kính 1</Text>
        <View style={style.ViewHeightChartScreen}>
            <View style={{
                height: 60,
                flexDirection: 'row',

            }}
                horizontal
            >
                <ScrollView style={{ flexDirection: 'row' }} horizontal>
                <Spinner
                        visible={loading1 || loading2 || loading3 || loading4}
                        textContent={'Waiting...'}
                        textStyle={{ color: 'red' }}
                    />
                    {/*  */}
                    {/*  */}
                    {/* Nhiệt Độ */}
                    <TouchableOpacity

                        style={style.TouchChartScreen}
                        onPress={() => {
                            setNameChart('Nhiệt Độ')
                            setUnit('°C')
                            setValueChart(getTemI2C1)
                            setTimeChart(getTimeI2C1)
                            setonPressTem(true)
                            setonPressHum(false)
                            setonPressLight(false)
                            setonPressadc(false)
                            setLoading1(true)
                            {
                                setTimeout(() => {
                                    setLoading1(false)
                                }, 300)
                            }
                        }}
                    >
                        <Text

                            style={text.TextDevices}>
                            Nhiệt Độ
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* Độ Ẩm */}
                    <TouchableOpacity

                        style={style.TouchChartScreen}
                        onPress={() => {
                            setNameChart('Độ Ẩm')
                            setUnit('%')
                            setTimeChart(getTimeI2C1)
                            setValueChart(getHumI2C1)
                            setonPressHum(true)
                            setonPressTem(false)
                            setonPressLight(false)
                            setonPressadc(false)
                            setLoading2(true)
                            {
                                setTimeout(() => {
                                    setLoading2(false)
                                }, 300)
                            }
                        }}
                    >
                        <Text

                            style={text.TextDevices}>
                            Độ Ẩm
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* Ánh Sáng */}
                    <TouchableOpacity

                        style={style.TouchChartScreen}
                        onPress={() => {
                            setNameChart('Ánh Sáng')
                            setUnit('lux')
                            setValueChart(valueLight)
                            setTimeChart(timeLight)
                            setonPressLight(true)
                            setonPressTem(false)
                            setonPressHum(false)
                            setonPressadc(false)
                            setLoading3(true)
                            {
                                setTimeout(() => {
                                    setLoading3(false)
                                }, 300)
                            }
                        }}
                    >
                        <Text

                            style={text.TextDevices}>
                            Ánh Sáng
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* Độ Ẩm Đất */}
                    <TouchableOpacity

                        style={style.TouchChartScreen}
                        onPress={() => {
                            setNameChart('Độ Ẩm Đất')
                            setUnit('%')
                            setValueChart(getADC1)
                            setTimeChart(gettimeADC1)
                            setonPressadc(true)
                            setonPressLight(false)
                            setonPressTem(false)
                            setonPressHum(false)
                            setLoading4(true)
                            {
                                setTimeout(() => {
                                    setLoading4(false)
                                }, 300)
                            }
                        }}
                    >
                        <Text

                            style={text.TextDevices}>
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