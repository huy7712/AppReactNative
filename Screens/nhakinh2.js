import React, { useState, useEffect,useContext } from 'react'
import {
    TextInput, Text, View, ScrollView, Image, ImageBackground,
    FlatList, TouchableOpacity, Animated, StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { icons, images } from '../constants'
import WeatherScreen from '../utilies/UpdateLocalData'
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import moment from 'moment'
import ProGChart from './chartmodule/progresschart'
import { ModeContext } from './getMode'
export default Nhakinh


function Nhakinh(props) {
    const dataH = {
        data: [0.42]
    }
    const dataH2 = {
        data: [0.38]
    }
    const [temI2C2,setTemI2C2] = useState('0')
    const [humI2C2,setHumI2C2] = useState('0')
    const [lightI2C2,setLightI2C2] = useState('0')
    // 
    // 
    // NHIET DO && ANH SANG && DO AM
    useEffect(()=>{
        socket.on('S-RequestI2C', (value) => {
            let jsonData = JSON.parse(value);
            console.log(jsonData);
            switch (jsonData.i2ca) {
                case 35:
                    // lightI2C = (parseInt(jsonData.i2cd1.toString(16) + jsonData.i2cd2.toString(16), 16) / 1.2)
                    switch (jsonData.houseID) {
                        
                        case 2:
                            setLightI2C2((parseInt(jsonData.i2cd1.toString(16) + jsonData.i2cd2.toString(16), 16) / 1.2).toFixed(1));
                            break
                    }
                    break
                case 68:
                    // temI2C = (parseInt(jsonData.i2cd1.toString(16) + jsonData.i2cd2.toString(16), 16) * 175 / 65535) - 45
                    // humI2C = (parseInt(jsonData.i2cd4.toString(16) + jsonData.i2cd5.toString(16), 16) * 100 / 65535)
                    switch (jsonData.houseID) {
                        case 2:
                            setTemI2C2(((parseInt(jsonData.i2cd1.toString(16) + jsonData.i2cd2.toString(16), 16) * 175 / 65535) - 45).toFixed(0));
                            setHumI2C2((parseInt(jsonData.i2cd4.toString(16) + jsonData.i2cd5.toString(16), 16) * 100 / 65535).toFixed(2));
                            break
                    }
                    break
            }
    
            // if (temI2C2||humI2C2||lightI2C2) {
            //     setTemI2C2(temI2C2.toFixed(0))
    
            //     setHumI2C2(humI2C2.toFixed(2))
    
            //     setLightI2C2(lightI2C2.toFixed(1))
            // }
        })
    },[])
    // 
    // 
    // RS485

    const [N_value,SetN_value]=useState('0')
    const [P_value,SetP_value]=useState('0')
    const [K_value,SetK_value]=useState('0')

    useEffect(()=>{
        socket.on('RS485_NPKvalue', (data) => {
            let jsonData = JSON.parse(data)
            SetN_value(jsonData.N);
            SetP_value(jsonData.P);
            SetK_value(jsonData.K);
        })
    },[])

    const [hum_value,setHum_value]=useState('0')
    useEffect(()=>{
        socket.on('RS485_humvalue', (data) => {
            let jsonData = JSON.parse(data)
            setHum_value(jsonData.Hum);
        })
    })

    const [pH_value,setpH_value]=useState('0')
    useEffect(()=>{
        socket.on('RS485_phvalue', (data) => {
            let jsonData = JSON.parse(data)
            setpH_value(jsonData.pH);
    
        })
    },[])

// 
// 
// GET MODE 
    const [getMode, setGetMode] = useState('')
    useEffect(() => {
        fetch('http://192.168.0.100:1234/api/getMode2')
            .then(response => response.json())
            .then(data => {
                data.forEach((item) => {
                    setGetMode(item.mode)
                })
            })
    }, [])

    useEffect(()=>{
        socket.on('display2', (data) => {
            let jsonData = JSON.parse(data)
            // console.log(jsonData)
            let bit8 = jsonData.bit8
            let bit7 = jsonData.bit7
            let bit6 = jsonData.bit6
            let bit5 = jsonData.bit5
            let bit4 = jsonData.bit4
            let bit3 = jsonData.bit3
            switch (bit8) {
                case 1:
                    setColorBtn('white');
                    break;
                case 0:
                    setColorBtn('red');
                    break;
            }
            switch (bit7) {
                case 1:
    
                    setColorBtn1('white');
                    break;
                case 0:
    
                    setColorBtn1('red');
                    break;
            }
            switch (bit6) {
                case 1:
                    setColorBtn2('white');
                    break;
                case 0:
                    setColorBtn2('red');
                    break;
            }
            switch (bit5) {
                case 1:
                    setColorBtn3('white');
                    break;
                case 0:
                    setColorBtn3('red');
                    break;
            }
            switch (bit4) {
                case 1:
                    setColorBtn4('white');
                    break;
                case 0:
                    setColorBtn4('red');
                    break;
            }
            switch (bit3) {
                case 1:
                    setColorBtn5('white');
                    break;
                case 0:
                    setColorBtn5('red');
                    break;
            }
        })
    },[])
     useEffect(()=>{
        fetch('http://192.168.0.100:1234/api/getButton2')
        .then(response => response.json())
        .then(data => {
            data.forEach((item) => {
                let bit8 = item.bit8;
                let bit7 = item.bit7;
                let bit6 = item.bit6;
                let bit5 = item.bit5;
                let bit4 = item.bit4;
                let bit3 = item.bit3;
                // console.log(item)
                switch (bit8) {
                    case 1:
                        setColorBtn('white');
                        break;
                    case 0:
                        setColorBtn('red');
                        break;
                }
                switch (bit7) {
                    case 1:
                        setColorBtn1('white');
                        break;
                    case 0:
                        setColorBtn1('red');
                        break;
                }
                switch (bit6) {
                    case 1:
                        setColorBtn2('white');
                        break;
                    case 0:
                        setColorBtn2('red');
                        break;
                }
                switch (bit5) {
                    case 1:
                        setColorBtn3('white');
                        break;
                    case 0:
                        setColorBtn3('red');
                        break;
                }
                switch (bit4) {
                    case 1:
                        setColorBtn4('white');
                        break;
                    case 0:
                        setColorBtn4('red');
                        break;
                }
                switch (bit3) {
                    case 1:
                        setColorBtn5('white');
                        break;
                    case 0:
                        setColorBtn5('red');
                        break;
                }
            })
        })
     },[])
    // setInterval(getDataButtn, 500)
    const [ColorBtn, setColorBtn] = useState('');
    const [ColorBtn1, setColorBtn1] = useState('');
    const [ColorBtn2, setColorBtn2] = useState('');
    const [ColorBtn3, setColorBtn3] = useState('');
    const [ColorBtn4, setColorBtn4] = useState('');
    const [ColorBtn5, setColorBtn5] = useState('');
    function addlight1() {
        //bt_on1.classList.toggle('light');
        if (ColorBtn != 'red') {
            //console.log(1)
            socket.emit('den7on', '{"Client":{"houseID":2,"request":"WriteDigital","DO0":"0"}}');
        }
        else {
            //console.log(0)
            socket.emit('den7off', '{"Client":{"houseID":2,"request":"WriteDigital","DO0":"1"}}');
        }
    }
    function addlight2() {
        //bt_on2.classList.toggle('light');
        if (ColorBtn1 != 'red') {
            //console.log(1)
            socket.emit('den8on', '{"Client":{"houseID":2,"request":"WriteDigital","DO1":"0"}}');
        }
        else {
            //console.log(0)
            socket.emit('den8off', '{"Client":{"houseID":2,"request":"WriteDigital","DO1":"1"}}');
        }
    }
    function addlight3() {
        //bt_on3.classList.toggle('light');
        if (ColorBtn2 != 'red') {
            //console.log(1)
            socket.emit('den9on', '{"Client":{"houseID":2,"request":"WriteDigital","DO2":"0"}}');
        }
        else {
            //console.log(0)
            socket.emit('den9off', '{"Client":{"houseID":2,"request":"WriteDigital","DO2":"1"}}');
        }
    }
    function addlight4() {
        //bt_on4.classList.toggle('light');
        if (ColorBtn3 != 'red') {
            //console.log(1)
            socket.emit('den10on', '{"Client":{"houseID":2,"request":"WriteDigital","DO3":"0"}}');
        }
        else {
            //console.log(0)
            socket.emit('den10off', '{"Client":{"houseID":2,"request":"WriteDigital","DO3":"1"}}');
        }
    }

    function addlight5() {
        //bt_on5.classList.toggle('light');
        if (ColorBtn4 != 'red') {
            //console.log(1)
            socket.emit('den11on', '{"Client":{"houseID":2,"request":"WriteDigital","DO4":"0"}}');
        }
        else {
            //console.log(0)
            socket.emit('den11off', '{"Client":{"houseID":2,"request":"WriteDigital","DO4":"1"}}');
        }
    }

    function addlight6() {
        //bt_on6.classList.toggle('light');
        if (ColorBtn5 != 'red') {
            //console.log(1)
            socket.emit('den12on', '{"Client":{"houseID":2,"request":"WriteDigital","DO5":"0"}}');
        }
        else {
            //console.log(0)
            socket.emit('den12off', '{"Client":{"houseID":2,"request":"WriteDigital","DO5":"1"}}');
        }
    }

    return (

        <ScrollView style={{
            flex: 1,
            backgroundColor: '#F5F5F5',
        }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 23,
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        marginTop: 10,
                        marginBottom: 10
                    }}>NHA KINH 2</Text>
                    <View style={{
                        height: 100,
                        flexDirection: 'row',
                        borderWidth: 3,
                        borderRadius: 30,
                        marginHorizontal: 5,
                        justifyContent: 'center',
                        backgroundColor: 'white'
                    }}>
                        <Icon
                            name={'cloud-sun'}
                            size={70}
                            color={'#FA7A48'}
                        ></Icon>
                        <View style={{ width: 40 }}></View>
                        <View>
                            <WeatherScreen />
                        </View>
                    </View>
                    <View style={{
                        marginTop: 10,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: 'black',
                            fontSize: 16,
                            fontWeight: 'bold'
                        }}>SENSOR</Text>
                    </View>
                    {/* NHIET DO */}
                    <View style={{
                        height: 80,
                        flexDirection: 'row',
                        marginHorizontal: 20,
                        marginTop: 20,

                    }}>
                        <View style={{
                            flex: 30,
                            backgroundColor: 'white',
                            marginEnd: 5,
                            flexDirection: 'row',
                            borderWidth: 2,
                            borderRadius: 20,
                            alignItems: 'center'
                        }}>
                            <Image source={icons.temperature} style={{
                                width: 45,
                                height: 45
                            }} />
                            <View style={{
                                marginStart: 10
                            }}>
                                <Text style={{
                                    color: "black",
                                    fontSize: 14,

                                }}>Nhiệt Độ:</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        marginEnd: 3
                                    }}>{temI2C2}
                                    </Text>
                                    <Text style={{
                                        color: 'black',
                                        fontWeight: 'bold'
                                    }}>°C
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {/* ANH SANG */}
                        <View style={{
                            flex: 30,
                            marginStart: 5,
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderWidth: 2,
                            borderRadius: 20
                        }}>
                            <Image source={icons.sun} style={{
                                width: 50,
                                height: 50,
                                borderRadius: 100
                            }} />
                            <View style={{ marginStart: 10 }}>
                                <Text style={{
                                    color: "black",
                                    fontSize: 14,
                                }}>Ánh Sáng:</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        marginEnd: 3
                                    }}>{lightI2C2} lux
                                    </Text>
                                </View>
                            </View>
                        </View>

                    </View>
                    {/*  */}
                    {/*  */}
                    {/* DO AM DAT VA KHONG KHI */}
                    <View style={{
                        height: 155,
                        marginTop: 20,
                        flexDirection: 'row',
                        marginHorizontal: 20,
                    }}>
                        {/*  */}
                        {/*  */}
                        {/* DO AM KHONG KHI */}
                        <View style={{
                            flex: 50,
                            backgroundColor: 'white',
                            marginEnd: 5,
                            borderWidth: 3,
                            borderRadius: 20
                        }}>
                            <View style={{
                                flex: 30,
                                flexDirection: 'row',
                                marginTop: 4
                            }}>
                                <Image source={icons.humidity} style={{
                                    width: 45,
                                    height: 45
                                }} />
                                <View style={{
                                    marginStart: 10
                                }}>
                                    <Text style={{
                                        color: 'black',
                                    }}>Độ Ẩm:</Text>
                                    <Text style={{
                                        color: 'black'
                                    }}>{humI2C2}%</Text>
                                </View>
                            </View>
                            <View style={{
                                flex: 60,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <ProGChart data={[humI2C2/100]} />
                                <Text style={{
                                    position: 'absolute',
                                    color: 'black',
                                    fontSize: 15
                                }}
                                >{humI2C2}</Text>
                            </View>
                        </View>
                        {/* DO AM DAT */}
                        <View style={{
                            flex: 50,
                            backgroundColor: 'white',
                            marginEnd: 5,
                            borderWidth: 3,
                            borderRadius: 20
                        }}>
                            <View style={{
                                flex: 30,
                                flexDirection: 'row',
                                marginTop: 4
                            }}>
                                <Image source={icons.SoilMoisture} style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 30,
                                    marginStart: 2
                                }} />
                                <View style={{
                                    marginStart: 10
                                }}>
                                    <Text style={{
                                        color: 'black',
                                    }}>Độ Ẩm Đất:</Text>
                                    <Text style={{
                                        color: 'black'
                                    }}>{hum_value}%</Text>
                                </View>
                            </View>
                            <View style={{
                                flex: 60,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <ProGChart data={[hum_value/100]} />
                                <Text style={{
                                    position: 'absolute',
                                    color: 'black',
                                    fontSize: 15
                                }}
                                >{hum_value}</Text>
                            </View>
                        </View>
                    </View>
                    {/*  */}
                    {/*  */}
                    {/* NPK */}
                    <View style={{
                        height: 140,
                        backgroundColor: 'white',
                        marginTop: 20,
                        marginHorizontal: 20,
                        borderWidth: 3,
                        borderRadius: 20,

                    }}>
                        <View style={{
                            flex: 40
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 20,
                                fontWeight: 'bold',
                                alignSelf: 'center'
                            }}>NPK</Text>
                        </View>
                        <View style={{
                            flex: 30,
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: 5
                        }}>
                            <View style={{
                                flex: 33.3333,
                                marginHorizontal: 5,
                                alignItems: 'center',
                                height: 60
                            }}>
                                <Text style={{
                                    color: 'black',
                                }}>Nitrogen:</Text>
                                <Text style={{
                                    color: 'black',
                                }}>{N_value} mg/kg</Text>
                            </View>
                            <View style={{
                                flex: 33.3333,
                                marginHorizontal: 5,
                                alignItems: 'center',
                                height: 60
                            }}>
                                <Text style={{
                                    color: 'black',
                                }}>Phosphorus:</Text>
                                <Text style={{
                                    color: 'black',
                                }}>{P_value} mg/kg</Text>
                            </View>
                            <View style={{
                                flex: 33.3333,
                                marginHorizontal: 5,
                                alignItems: 'center',
                                height: 60
                            }}>
                                <Text style={{
                                    color: 'black',
                                }}>Potassium:</Text>
                                <Text style={{
                                    color: 'black',
                                }}>{K_value} mg/kg</Text>
                            </View>
                        </View>
                        <View style={{
                            alignItems:'center',
                            flex:30,
                            marginBottom:5
                        }}>
                            <Text style={{
                                    color: 'black',
                                }}>Độ pH:</Text>
                                <Text style={{
                                    color: 'black',
                                }}>{pH_value}</Text>
                        </View>
                    </View>
                    {/*  */}
                    {/*  */}
                    {/* DEVICES */}
                    <View style={{
                        height: 30,
                        marginTop: 20,
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'black',
                            marginHorizontal: 20
                        }}

                        >THIẾT BỊ</Text>
                    </View>
                    <View style={{
                        height: 100
                    }}>
                        <View style={{ height: 3, backgroundColor: 'gray' }} />
                    
                        {getMode=='0'?<ScrollView
                            horizontal
                            style={{
                                flex: 1,
                            }}>
                            <View style={{
                                alignSelf: 'center',
                                padding: 12,
                                alignItems: 'center',
                            }}>
                                <TouchableOpacity onPress={addlight1}>
                                    <View style={{
                                        borderWidth: 2,
                                        alignItems: 'center',
                                        borderRadius: 50,
                                        width: 50,
                                        height: 50,
                                        backgroundColor: ColorBtn
                                    }}>
                                        <Icon
                                            name={'lightbulb'}
                                            color={'black'}
                                            size={40}
                                        />
                                    </View>
                                    <Text style={{
                                        color: 'black',
                                        alignSelf: 'center'
                                    }}>
                                        Đèn
                                    </Text></TouchableOpacity>
                            </View>
                            <View style={{
                                alignSelf: 'center',
                                padding: 12,
                                alignItems: 'center',
                            }}>
                                <TouchableOpacity onPress={addlight2}>
                                    <View style={{
                                        borderWidth: 2,
                                        alignItems: 'center',
                                        borderRadius: 50,
                                        width: 50,
                                        height: 50,
                                        backgroundColor: ColorBtn1
                                    }}>
                                        <Icon
                                            name={'fan'}
                                            color={'black'}
                                            size={40}
                                        />
                                    </View>
                                    <Text style={{
                                        color: 'black',
                                        alignSelf: 'center'
                                    }}>
                                        Quạt
                                    </Text></TouchableOpacity>
                            </View>
                            <View style={{
                                alignSelf: 'center',
                                padding: 12,
                                alignItems: 'center',
                            }}>
                                <TouchableOpacity onPress={addlight3}>
                                    <View style={{
                                        borderWidth: 2,
                                        alignItems: 'center',
                                        borderRadius: 50,
                                        width: 50,
                                        height: 50,
                                        backgroundColor: ColorBtn2
                                    }}>
                                        <Icon
                                            name={'faucet'}
                                            color={'black'}
                                            size={40}
                                        />
                                    </View>
                                    <Text style={{
                                        color: 'black',
                                        alignSelf: 'center'
                                    }}>
                                        Bơm 1
                                    </Text></TouchableOpacity>
                            </View>
                            <View style={{
                                alignSelf: 'center',
                                padding: 12,
                                alignItems: 'center',
                            }}>
                                <TouchableOpacity onPress={addlight4}>
                                    <View style={{
                                        borderWidth: 2,
                                        alignItems: 'center',
                                        borderRadius: 50,
                                        width: 50,
                                        height: 50,
                                        backgroundColor: ColorBtn3
                                    }}>
                                        <Icon
                                            name={'faucet'}
                                            color={'black'}
                                            size={40}
                                        />
                                    </View>
                                    <Text style={{
                                        color: 'black',
                                        alignSelf: 'center'
                                    }}>
                                        Bơm 2
                                    </Text></TouchableOpacity>
                            </View>
                            <View style={{
                                alignSelf: 'center',
                                padding: 12,
                                alignItems: 'center',
                            }}>
                                <TouchableOpacity onPress={addlight5}>
                                    <View style={{
                                        borderWidth: 2,
                                        alignItems: 'center',
                                        borderRadius: 50,
                                        width: 50,
                                        height: 50,
                                        backgroundColor: ColorBtn4
                                    }}>
                                        <Icon
                                            name={'faucet'}
                                            color={'black'}
                                            size={40}
                                        />
                                    </View>
                                    <Text style={{
                                        color: 'black',
                                        alignSelf: 'center'
                                    }}>
                                        Bơm 3
                                    </Text></TouchableOpacity>
                            </View>
                            <View style={{
                                alignSelf: 'center',
                                padding: 12,
                                alignItems: 'center',
                            }}>
                                <TouchableOpacity onPress={addlight6} >
                                    <View style={{
                                        borderWidth: 2,
                                        alignItems: 'center',
                                        borderRadius: 50,
                                        width: 50,
                                        height: 50,
                                        backgroundColor: ColorBtn5
                                    }}>
                                        <Icon
                                            name={'faucet'}
                                            color={'black'}
                                            size={40}
                                        />
                                    </View>
                                    <Text style={{
                                        color: 'black',
                                        alignSelf: 'center'
                                    }}>
                                        Bơm 4
                                    </Text></TouchableOpacity>
                            </View>
                        </ScrollView>:
                        // 
                        // 
                        // AUTO
                        <ScrollView
                        horizontal
                        style={{
                            flex: 1,
                        }}>
                        <View style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                        }}>
                            <View>
                                <View style={{
                                    borderWidth: 2,
                                    alignItems: 'center',
                                    borderRadius: 50,
                                    width: 50,
                                    height: 50,
                                    backgroundColor: ColorBtn
                                }}>
                                    <Icon
                                        name={'lightbulb'}
                                        color={'black'}
                                        size={40}
                                    />
                                </View>
                                <Text style={{
                                    color: 'black',
                                    alignSelf: 'center'
                                }}>
                                    Đèn
                                </Text></View>
                        </View>
                        <View style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                        }}>
                            <View>
                                <View style={{
                                    borderWidth: 2,
                                    alignItems: 'center',
                                    borderRadius: 50,
                                    width: 50,
                                    height: 50,
                                    backgroundColor: ColorBtn1
                                }}>
                                    <Icon
                                        name={'fan'}
                                        color={'black'}
                                        size={40}
                                    />
                                </View>
                                <Text style={{
                                    color: 'black',
                                    alignSelf: 'center'
                                }}>
                                    Quạt
                                </Text></View>
                        </View>
                        <View style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                        }}>
                            <View>
                                <View style={{
                                    borderWidth: 2,
                                    alignItems: 'center',
                                    borderRadius: 50,
                                    width: 50,
                                    height: 50,
                                    backgroundColor: ColorBtn2
                                }}>
                                    <Icon
                                        name={'faucet'}
                                        color={'black'}
                                        size={40}
                                    />
                                </View>
                                <Text style={{
                                    color: 'black',
                                    alignSelf: 'center'
                                }}>
                                    Bơm 1
                                </Text></View>
                        </View>
                        <View style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                        }}>
                            <View>
                                <View style={{
                                    borderWidth: 2,
                                    alignItems: 'center',
                                    borderRadius: 50,
                                    width: 50,
                                    height: 50,
                                    backgroundColor: ColorBtn3
                                }}>
                                    <Icon
                                        name={'faucet'}
                                        color={'black'}
                                        size={40}
                                    />
                                </View>
                                <Text style={{
                                    color: 'black',
                                    alignSelf: 'center'
                                }}>
                                    Bơm 2
                                </Text></View>
                        </View>
                        <View style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                        }}>
                            <View>
                                <View style={{
                                    borderWidth: 2,
                                    alignItems: 'center',
                                    borderRadius: 50,
                                    width: 50,
                                    height: 50,
                                    backgroundColor: ColorBtn4
                                }}>
                                    <Icon
                                        name={'faucet'}
                                        color={'black'}
                                        size={40}
                                    />
                                </View>
                                <Text style={{
                                    color: 'black',
                                    alignSelf: 'center'
                                }}>
                                    Bơm 3
                                </Text></View>
                        </View>
                        <View style={{
                            alignSelf: 'center',
                            padding: 12,
                            alignItems: 'center',
                        }}>
                            <View >
                                <View style={{
                                    borderWidth: 2,
                                    alignItems: 'center',
                                    borderRadius: 50,
                                    width: 50,
                                    height: 50,
                                    backgroundColor: ColorBtn5
                                }}>
                                    <Icon
                                        name={'faucet'}
                                        color={'black'}
                                        size={40}
                                    />
                                </View>
                                <Text style={{
                                    color: 'black',
                                    alignSelf: 'center'
                                }}>
                                    Bơm 4
                                </Text></View>
                        </View>
                    </ScrollView>
                    }
                        <View style={{ height: 3, backgroundColor: 'gray' }} />

                    </View>
        </ScrollView>
    )
}