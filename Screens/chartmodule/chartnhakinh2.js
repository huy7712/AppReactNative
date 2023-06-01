import React, { useState, useEffect, createContext, useContext } from 'react'
import { TextInput, Text, View, Image, ImageBackground, TouchableOpacity, FlatList, TouchableWithoutFeedback, Platform, Alert, ScrollView } from 'react-native'
import moment from 'moment'
import style from '../../components/style'
import text from '../../components/text'
import Spinner from 'react-native-loading-spinner-overlay/lib'
import ChartLine from './chartmodul'


function Chartnhakinh2() {
    const [valueChart1, setValueChart1] = useState([0, 0, 0, 0, 0, 0]);
    const [timeChart1, setTimeChart1] = useState([0, 0, 0, 0, 0, 0]);
    const [nameChart1, setNameChart1] = useState('')
    const [unit1, setUnit1] = useState('°C')

    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);
    const [loading4, setLoading4] = useState(false);
    const [loading5, setLoading5] = useState(false);
    const [loading6, setLoading6] = useState(false);
    const [loading7, setLoading7] = useState(false);

    const [getN, setGetN] = useState([0])
    const [getP, setGetP] = useState([0])
    const [getK, setGetK] = useState([0])
    const [gettimeNPK, setGettimeNPK] = useState([0])
    const [timeLight1, setTimeLight1] = useState([0])
    const [valueLight1, setValueLight1] = useState([0])
    const [getADC1, setGetADC1] = useState([0])
    const [gettimeADC1, setGettimeADC1] = useState([0])
    const [getHumI2C1, setGetHumI2C1] = useState([0])
    const [getTemI2C1, setGetTemI2C1] = useState([0])
    const [getTimeI2C1, setGetTimeI2C1] = useState([0])
    const [getpH, setgetpH] = useState([0])
    const [gettimepH, setGetTimepH] = useState([0])

    //   NPK
    const [selectrueNPK, setselectrueNPK] = useState(true)
    const [onPressN, setonPressN] = useState(false)
    const [onPressP, setonPressP] = useState(false)
    const [onPressK, setonPressK] = useState(false)
    useEffect(() => {
        setInterval(fetchDataNPK, 5000)
        return () => {
            clearInterval(setInterval(fetchDataNPK, 5000))
        }
    }, [])
    useEffect(() => {
        if (onPressN) {
            setValueChart1(getN)
            setTimeChart1(gettimeNPK)
            setselectrueNPK(true)
        }
        if (onPressP) {
            setValueChart1(getP)
            setTimeChart1(gettimeNPK)
            setselectrueNPK(true)
        }
        if (onPressK) {
            setValueChart1(getK)
            setTimeChart1(gettimeNPK)
            setselectrueNPK(true)
        }

    }, [selectrueNPK, onPressN, onPressP, onPressK])
    const updatedN = [];
    const updatedP = [];
    const updatedK = [];
    const updatedTimeNPK = [];
    function fetchDataNPK() {
        fetch('https://raspi.iotgreenhouse.tech/api/npk_rs485Active')
            .then(response => response.json())
            .then(json => {
                const data = json; // Lưu trữ dữ liệu vào biến trung gian

                data.forEach((item) => {
                    let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
                    updatedN.shift();
                    updatedN.push(item.N.toFixed(1));
                    updatedP.shift();
                    updatedP.push(item.P.toFixed(1));
                    updatedK.shift();
                    updatedK.push(item.K.toFixed(1));
                    updatedTimeNPK.shift();
                    updatedTimeNPK.push(localTime);
                });
                setGetN(updatedN);
                setGetP(updatedP);
                setGetK(updatedK);
                setGettimeNPK(updatedTimeNPK);
                setselectrueNPK(false)
                // console.log(data)
                // Hiển thị updatedN trong cảnh báo
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        fetch('https://raspi.iotgreenhouse.tech/api/npk_rs485Start')
            .then(response => response.json())
            .then(data => {
                data.forEach((item) => {
                    let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
                    updatedN.unshift((item.N).toFixed(1));
                    updatedP.unshift((item.P).toFixed(1));
                    updatedK.unshift((item.K).toFixed(1));
                    updatedTimeNPK.unshift(localTime);
                })
                setGetN(updatedN);
                setGetP(updatedP);
                setGetK(updatedK);
                setGettimeNPK(updatedTimeNPK);

            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    // LIGHT
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
            setValueChart1(valueLight1)
            setTimeChart1(timeLight1)
            setselectrue(true)
        }
    }, [selectrue, onPressLight])
    const updatedValueChart = [];
    const updatedTimeChart = [];
    function fetchData() {
        fetch('https://raspi.iotgreenhouse.tech/api/lightI2C2Active')
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
                setValueLight1(updatedValueChart);
                setTimeLight1(updatedTimeChart);
                setselectrue(false)


                // Hiển thị updatedValueChart trong cảnh báo
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        fetch('https://raspi.iotgreenhouse.tech/api/lightI2C2Start')
            .then(response => response.json())
            .then(data => {
                data.forEach((item) => {
                    let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
                    updatedValueChart.unshift((item.light).toFixed(0));
                    updatedTimeChart.unshift(localTime);
                })
                setValueLight1(updatedValueChart);
                setTimeLight1(updatedTimeChart);

            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    // HUM && TEM   
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
            setValueChart1(getTemI2C1)
            setTimeChart1(getTimeI2C1)
            setselectrueI2C(true)
        }
        if (onPressHum) {
            setValueChart1(getHumI2C1)
            setTimeChart1(getTimeI2C1)
            setselectrueI2C(true)
        }
    }, [selectrueI2C, onPressTem, onPressHum])
    const updatedHum = [];
    const updatedTem = [];
    const updatedTimeI2C = [];
    function fetchDataI2C() {
        fetch('https://raspi.iotgreenhouse.tech/api/temHumI2C2Active')
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
        fetch('https://raspi.iotgreenhouse.tech/api/temHumI2C2Start')
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

    // pH
    const [selectrueph, setselectrueph] = useState(true)
    const [onPressph, setonPressph] = useState(false)
    useEffect(() => {
        setInterval(fetchDataph, 5000)
        return () => {
            clearInterval(setInterval(fetchDataph, 5000))
        }
    }, [])
    useEffect(() => {
        if (onPressph) {
            setValueChart1(getpH)
            setTimeChart1(gettimepH)
            setselectrueph(true)
        }
    }, [selectrueph, onPressph])
    const updatedValuepH = [];
    const updatedTimepH = [];
    function fetchDataph() {
        fetch('https://raspi.iotgreenhouse.tech/api/ph_rs485Active')
            .then(response => response.json())
            .then(json => {
                const data = json; // Lưu trữ dữ liệu vào biến trung gian

                data.forEach((item) => {
                    let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
                    updatedValuepH.shift();
                    updatedTimepH.shift();
                    updatedValuepH.push(item.ph.toFixed(1));
                    updatedTimepH.push(localTime);
                });
                setgetpH(updatedValuepH);
                setGetTimepH(updatedTimepH);
                setselectrueph(false)
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        fetch('https://raspi.iotgreenhouse.tech/api/ph_rs485Start')
            .then(response => response.json())
            .then(data => {
                data.forEach((item) => {
                    let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
                    updatedValuepH.unshift((item.ph).toFixed(1));
                    updatedTimepH.unshift(localTime);
                })
                setgetpH(updatedValuepH);
                setGetTimepH(updatedTimepH);
                // console.log(updatedValuepH)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

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
            setValueChart1(getADC1)
            setTimeChart1(gettimeADC1)
            setselectrueadc(true)
        }
    }, [selectrueadc, onPressadc])
    const updatedValueadc = [];
    const updatedTimeadc = [];
    function fetchDataadc() {
        fetch('https://raspi.iotgreenhouse.tech/api/hum_rs485Active')
            .then(response => response.json())
            .then(json => {
                const data = json; // Lưu trữ dữ liệu vào biến trung gian

                data.forEach((item) => {
                    let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
                    updatedValueadc.shift();
                    updatedTimeadc.shift();
                    updatedValueadc.push(item.hum.toFixed(1));
                    updatedTimeadc.push(localTime);
                });
                setGetADC1(updatedValueadc);
                setGettimeADC1(updatedTimeadc);
                setselectrueadc(false)
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        fetch('https://raspi.iotgreenhouse.tech/api/hum_rs485Start')
            .then(response => response.json())
            .then(data => {
                data.forEach((item) => {
                    let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
                    updatedValueadc.unshift((item.hum).toFixed(1));
                    updatedTimeadc.unshift(localTime);
                })
                setGetADC1(updatedValueadc);
                setGettimeADC1(updatedTimeadc);

            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return <View>
        <Text style={text.TextNhaKinhChartScreen}>Nhà Kính 2</Text>
        <View style={style.ViewHeightChartScreen}>
            <View style={{
                height: 60,
                flexDirection: 'row',

            }}
                horizontal
            >
                <ScrollView style={{ flexDirection: 'row' }} horizontal>
                    <Spinner
                        visible={loading || loading1 || loading2 || loading3 || loading4 || loading5 || loading6 || loading7}
                        textContent={'Waiting...'}
                        textStyle={{ color: 'red' }}
                    />
                    {/*  */}
                    {/*  */}
                    {/* Nhiệt Độ */}
                    <TouchableOpacity

                        style={style.TouchChartScreen}
                        onPress={() => {
                            setNameChart1('Nhiệt Độ')
                            setUnit1('°C')
                            setValueChart1(getTemI2C1)
                            setTimeChart1(getTimeI2C1)
                            setonPressTem(true)
                            setonPressadc(false)
                            setonPressph(false)
                            setonPressN(false)
                            setonPressP(false)
                            setonPressK(false)
                            setonPressLight(false)
                            setonPressHum(false)
                            setLoading(true)
                            {
                                setTimeout(() => {
                                    setLoading(false)
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
                            setNameChart1('Độ Ẩm')
                            setUnit1('%')
                            setValueChart1(getHumI2C1)
                            setTimeChart1(getTimeI2C1)
                            setonPressHum(true)
                            setonPressTem(false)
                            setonPressLight(false)
                            setonPressadc(false)
                            setonPressph(false)
                            setonPressN(false)
                            setonPressP(false)
                            setonPressK(false)
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
                            Độ Ẩm
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* Ánh Sáng */}
                    <TouchableOpacity

                        style={style.TouchChartScreen}
                        onPress={() => {
                            setNameChart1('Ánh Sáng')
                            setUnit1('lux')
                            setValueChart1(valueLight1)
                            setTimeChart1(timeLight1)
                            setLoading2(true)
                            setonPressLight(true)
                            setonPressHum(false)
                            setonPressTem(false)
                            setonPressadc(false)
                            setonPressph(false)
                            setonPressN(false)
                            setonPressP(false)
                            setonPressK(false)
                            {
                                setTimeout(() => {
                                    setLoading2(false)
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
                            setNameChart1('Độ Ẩm Đất')
                            setUnit1('%')
                            setValueChart1(getADC1)
                            setTimeChart1(gettimeADC1)
                            setonPressadc(true)
                            setonPressLight(false)
                            setonPressph(false)
                            setonPressN(false)
                            setonPressP(false)
                            setonPressK(false)
                            setonPressHum(false)
                            setonPressTem(false)
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
                            Độ Ẩm Đất
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* pH */}
                    <TouchableOpacity

                        style={style.TouchChartScreen}
                        onPress={() => {
                            setNameChart1('pH')
                            setUnit1('pH')
                            setValueChart1(getpH)
                            setTimeChart1(gettimepH)
                            setonPressph(true)
                            setonPressLight(false)
                            setonPressadc(false)
                            setLoading4(true)
                            setonPressN(false)
                            setonPressP(false)
                            setonPressK(false)
                            setonPressHum(false)
                            setonPressTem(false)
                            {
                                setTimeout(() => {
                                    setLoading4(false)
                                }, 300)
                            }
                        }}
                    >
                        <Text

                            style={text.TextDevices}>
                            pH
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* N */}
                    <TouchableOpacity

                        style={style.TouchChartScreen}
                        onPress={() => {
                            setNameChart1('Nitrogen')
                            setUnit1('mg/kg')
                            setValueChart1(getN)
                            setTimeChart1(gettimeNPK)
                            setonPressN(true)
                            setonPressLight(false)
                            setonPressP(false)
                            setonPressadc(false)
                            setonPressph(false)
                            setonPressK(false)
                            setLoading5(true)
                            setonPressHum(false)
                            setonPressTem(false)
                            {
                                setTimeout(() => {
                                    setLoading5(false)
                                }, 300)
                            }
                        }}
                    >
                        <Text

                            style={text.TextDevices}>
                            Nitrogen
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* Phosphorus */}
                    <TouchableOpacity

                        style={style.TouchChartScreen}
                        onPress={() => {
                            setNameChart1('Phosphorus')
                            setUnit1('mg/kg')
                            setValueChart1(getP)
                            setTimeChart1(gettimeNPK)
                            setonPressN(false)
                            setonPressP(true)
                            setonPressK(false)
                            setonPressLight(false)
                            setonPressadc(false)
                            setonPressph(false)
                            setonPressHum(false)
                            setonPressTem(false)
                            setLoading6(true)
                            {
                                setTimeout(() => {
                                    setLoading6(false)
                                }, 300)
                            }
                        }}
                    >
                        <Text

                            style={text.TextDevices}>
                            Phosphorus
                        </Text>
                    </TouchableOpacity>
                    {/*  */}
                    {/*  */}
                    {/* Potassium */}
                    <TouchableOpacity
                        style={style.TouchChartScreen}
                        onPress={() => {
                            setNameChart1('Potassium')
                            setUnit1('mg/kg')
                            setValueChart1(getK)
                            setTimeChart1(gettimeNPK)
                            setonPressN(false)
                            setonPressP(false)
                            setonPressK(true)
                            setonPressLight(false)
                            setonPressadc(false)
                            setonPressph(false)
                            setonPressHum(false)
                            setonPressTem(false)
                            setLoading7(true)
                            {
                                setTimeout(() => {
                                    setLoading7(false)
                                }, 300)
                            }
                        }}
                    >
                        <Text

                            style={text.TextDevices}>
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
    </View>
}

export default Chartnhakinh2