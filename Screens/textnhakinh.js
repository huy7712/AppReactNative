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
    const [getMode,setGetMode]=useState('')

    const [temI2C1,setTemI2C1] = useState('0')
    const [humI2C1,setHumI2C1] = useState('0')
    const [lightI2C1,setLightI2C1] = useState('0')


    useEffect(()=>{
        fetch('http://192.168.137.100:1234/api/getMode1')
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
        setGetMode(item.mode)
    })})
    },[])

    useEffect(()=>{
        socket.on('S-RequestI2C', (value) => {
            let jsonData = JSON.parse(value);
            console.log(jsonData);
            switch (jsonData.i2ca) {
                case 23:
                    // lightI2C = (parseInt(jsonData.i2cd1.toString(16) + jsonData.i2cd2.toString(16), 16) / 1.2)
                    switch (jsonData.houseID) {
                        case 1:
                            setLightI2C1((parseInt(jsonData.i2cd1.toString(16) + jsonData.i2cd2.toString(16), 16) / 1.2).toFixed(2));
                            break
                    }
                    break
                case 68:
                    // temI2C = (parseInt(jsonData.i2cd1.toString(16) + jsonData.i2cd2.toString(16), 16) * 175 / 65535) - 45
                    // humI2C = (parseInt(jsonData.i2cd4.toString(16) + jsonData.i2cd5.toString(16), 16) * 100 / 65535)
                    switch (jsonData.houseID) {
                        case 1:
                            setTemI2C1(((parseInt(jsonData.i2cd1.toString(16) + jsonData.i2cd2.toString(16), 16) * 175 / 65535) - 45));
                            setHumI2C1((parseInt(jsonData.i2cd4.toString(16) + jsonData.i2cd5.toString(16), 16) * 100 / 65535));
                            break
                    }
                    break
            }
    
            // if (temI2C1||humI2C1||lightI2C1) {
            //     setTemI2C1(temI2C1.toFixed(0))
               
    
            //     setHumI2C1(humI2C1.toFixed(2))
               
    
            //     setLightI2C1(lightI2C1.toFixed(1))
            
            // }
        })
    },[])

    useEffect(()=>{
        socket.on('display1', (data) => {
            let jsonData = JSON.parse(data)
            //console.log(jsonData)
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
        fetch('http://192.168.137.100:1234/api/getButton')
        .then(response => response.json())
        .then(data => {
            data.forEach((item) => {
                let bit8 = item.bit8;
                let bit7 = item.bit7;
                let bit6 = item.bit6;
                let bit5 = item.bit5;
                let bit4 = item.bit4;
                let bit3 = item.bit3;
                console.log(data)
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
            socket.emit('den1on', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"0","value":"0"}}');
        }
        else {
            //console.log(0)
            socket.emit('den1off', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"0","value":"1"}}');
        }
    }
    function addlight2() {
        //bt_on2.classList.toggle('light');
        if (ColorBtn1 != 'red') {
            //console.log(1)
            socket.emit('den2on', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"1","value":"0"}}');
        }
        else {
            //console.log(0)
            socket.emit('den2off', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"1","value":"1"}}');
        }
    }
    function addlight3() {
        //bt_on3.classList.toggle('light');
        if (ColorBtn2 != 'red') {
            //console.log(1)
            socket.emit('den3on', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"2","value":"0"}}');
        }
        else {
            //console.log(0)
            socket.emit('den3off', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"2","value":"1"}}');
        }
    }
    function addlight4() {
        //bt_on4.classList.toggle('light');
        if (ColorBtn3 != 'red') {
            //console.log(1)
            socket.emit('den4on', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"3","value":"0"}}');
        }
        else {
            //console.log(0)
            socket.emit('den4off', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"3","value":"1"}}');
        }
    }

    function addlight5() {
        //bt_on5.classList.toggle('light');
        if (ColorBtn4 != 'red') {
            //console.log(1)
            socket.emit('den5on', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"4","value":"0"}}');
        }
        else {
            //console.log(0)
            socket.emit('den5off', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"4","value":"1"}}');
        }
    }

    function addlight6() {
        //bt_on6.classList.toggle('light');
        if (ColorBtn5 != 'red') {
            //console.log(1)
            socket.emit('den6on', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"5","value":"0"}}');
        }
        else {
            //console.log(0)
            socket.emit('den6off', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"5","value":"1"}}');
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
                    }}>NHA KINH 1</Text>
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
                                    }}>{temI2C1}
                                    </Text>
                                    <View style={{
                                        paddingTop: 4
                                    }}
                                    ></View>
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
                                    }}>{lightI2C1}
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
                                    }}>{humI2C1}%</Text>
                                </View>
                            </View>
                            <View style={{
                                flex: 60,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <ProGChart data={[humI2C1/100]} />
                                <Text style={{
                                    position: 'absolute',
                                    color: 'black',
                                    fontSize: 15
                                }}
                                >{humI2C1}</Text>
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
                                    }}>{dataH2.data * 100}%</Text>
                                </View>
                            </View>
                            <View style={{
                                flex: 60,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <ProGChart data={dataH2} />
                                <Text style={{
                                    position: 'absolute',
                                    color: 'black',
                                    fontSize: 15
                                }}
                                >{dataH2.data * 100}</Text>
                            </View>
                        </View>
                    </View>
                    {/*  */}
                    {/*  */}
                    {/* NPK */}
                    <View style={{
                        height: 130,
                        backgroundColor: 'white',
                        marginTop: 20,
                        marginHorizontal: 20,
                        borderWidth: 3,
                        borderRadius: 20,

                    }}>
                        <View style={{
                            flex: 30
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 20,
                                fontWeight: 'bold',
                                alignSelf: 'center'
                            }}>NPK</Text>
                        </View>
                        <View style={{
                            flex: 70,
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: 5
                        }}>
                            <View style={{
                                flex: 33.3333,
                                marginHorizontal: 5,
                                alignItems: 'center',
                                height: 70
                            }}>
                                <Text style={{
                                    color: 'black',
                                }}>Nitrogen:</Text>
                                <Text style={{
                                    color: 'black',
                                }}>NaN</Text>
                            </View>
                            <View style={{
                                flex: 33.3333,
                                marginHorizontal: 5,
                                alignItems: 'center',
                                height: 70
                            }}>
                                <Text style={{
                                    color: 'black',
                                }}>Phosphorus:</Text>
                                <Text style={{
                                    color: 'black',
                                }}>NaN</Text>
                            </View>
                            <View style={{
                                flex: 33.3333,
                                marginHorizontal: 5,
                                alignItems: 'center',
                                height: 70
                            }}>
                                <Text style={{
                                    color: 'black',
                                }}>Potassium:</Text>
                                <Text style={{
                                    color: 'black',
                                }}>NaN</Text>
                            </View>
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