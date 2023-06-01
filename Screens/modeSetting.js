import React, { useState, useEffect, createContext, useContext } from 'react'
import { TextInput, Text, View, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { UIHeader } from '../components'
import { ModeContext } from './getMode'


function ModeScreen(props) {

    const [selectedValue, setSelectedValue] = useState('1')
    const [getMode1, setGetMode1] = useState('toggle-off')
    const [getColor1, setGetColor1] = useState('black')
    const [getMode2, setGetMode2] = useState('toggle-off')
    const [getColor2, setGetColor2] = useState('black')
    
    // const {setMode,setMode2}=useContext(ModeContext)

    const [gethumlow1,SetGethumlow1]=useState('')
    const [gethumhight1,SetGethumhight1]=useState('')
    
    const [gettemlow1,SetGettemlow1]=useState('')
    const [gettemhight1,SetGettemhight1]=useState('')
    
    const [getlightlow1,SetGetlightlow1]=useState('')
    const [getlighthight1,SetGetlighthight1]=useState('')
    
    const [gethumlow2,SetGethumlow2]=useState('')
    const [gethumhight2,SetGethumhight2]=useState('')
    
    const [gettemlow2,SetGettemlow2]=useState('')
    const [gettemhight2,SetGettemhight2]=useState('')
    
    const [getlightlow2,SetGetlightlow2]=useState('')
    const [getlighthight2,SetGetlighthight2]=useState('')

    // 
    const [getviewhumlow1,SetGetViewhumlow1]=useState('Number')
    const [getviewhumhight1,SetGetViewhumhight1]=useState('Number')
    
    const [getviewtemlow1,SetGetViewtemlow1]=useState('Number')
    const [getviewtemhight1,SetGetViewtemhight1]=useState('Number')
    
    const [getviewlightlow1,SetGetViewlightlow1]=useState('Number')
    const [getviewlighthight1,SetGetViewlighthight1]=useState('Number')
    
    const [getviewhumlow2,SetGetViewhumlow2]=useState('Number')
    const [getviewhumhight2,SetGetViewhumhight2]=useState('Number')
    
    const [getviewtemlow2,SetGetViewtemlow2]=useState('Number')
    const [getviewtemhight2,SetGetViewtemhight2]=useState('Number')
    
    const [getviewlightlow2,SetGetViewlightlow2]=useState('Number')
    const [getviewlighthight2,SetGetViewlighthight2]=useState('Number')

    useEffect(() => {
        fetch('https://raspi.iotgreenhouse.tech/api/getMode1')
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                data.forEach((item) => {
                    if (item.mode==1){
                        setGetMode1('toggle-on')
                        setGetColor1('blue')
                    }
                    else {
                        setGetMode1('toggle-off')
                        setGetColor1('black')
                    }
                })
            })
    }, [])

    useEffect(() => {
        fetch('https://raspi.iotgreenhouse.tech/api/getMode2')
            .then(response => response.json())
            .then(data => {
                data.forEach((item) => {
                    if (item.mode==1){
                        setGetMode2('toggle-on')
                        setGetColor2('blue')
                    }
                    else{
                        setGetMode2('toggle-off')
                        setGetColor2('black')
                    }
                })
            })
    }, [])

    useEffect(()=>{
        socket.on('displaymode1',(data)=>{
            switch (data){
                case 'auto':
                    setGetMode1('toggle-on')
                    setGetColor1('blue')
                    break;
                case 'manual':
                    setGetMode1('toggle-off')
                    setGetColor1('black')
                    break;
            }
        })
    })
    
    useEffect(()=>{
        socket.on('displaymode2',(data)=>{
            switch (data){
                case 'auto':
                    setGetMode2('toggle-on')
                    setGetColor2('blue')
                    break;
                case 'manual':
                    setGetMode2('toggle-off')
                    setGetColor2('black')
                    break;
            }
        })
    })


    function MODE1() {
        if (getMode1 == 'toggle-off') {
            setGetMode1('toggle-on')
            setGetColor1('blue')
            // setMode(1)
            socket.emit('mode1', "auto");
        }
        else if (getMode1 == 'toggle-on') {
            setGetMode1('toggle-off')
            setGetColor1('black')
            socket.emit('mode1', "manual");
            // setMode(0)
        }
    }
    function MODE2() {
        if (getMode2 == 'toggle-off') {
            setGetMode2('toggle-on')
            setGetColor2('blue')
            socket.emit('mode2', "auto");
            // setMode2(1)
        }
        else if (getMode2 == 'toggle-on') {
            setGetMode2('toggle-off')
            setGetColor2('black')
            socket.emit('mode2', "manual");
            // setMode2(0)
        }
    }
    // LẤY GIÁ TRỊ NGƯỠNG
    useEffect (()=>{
        socket.on('defaultValue',(data)=>{
            let jsonData = JSON.parse(data)
            SetGetViewhumlow1(jsonData.lowHum1)
            SetGetViewhumhight1(jsonData.highHum1)
            SetGetViewhumlow2(jsonData.lowHum2)
            SetGetViewhumhight2(jsonData.highHum2)
            SetGethumlow1(jsonData.lowHum1)
            SetGethumlow2(jsonData.lowHum2)
            SetGethumhight1(jsonData.highHum1)
            SetGethumhight2(jsonData.highHum2)

            SetGetViewlightlow1(jsonData.lowLight1)
            SetGetViewlighthight1(jsonData.highLight1)
            SetGetViewlightlow2(jsonData.lowLight2)
            SetGetViewlighthight2(jsonData.highLight2)
            SetGetlightlow1(jsonData.lowLight1)
            SetGetlightlow2(jsonData.lowLight2)
            SetGetlighthight1(jsonData.highLight1)
            SetGetlighthight2(jsonData.highLight2)

            SetGetViewtemlow1(jsonData.lowTem1)
            SetGetViewtemlow2(jsonData.lowTem2)
            SetGetViewtemhight1(jsonData.highTem1)
            SetGetViewtemhight2(jsonData.highTem2)
            SetGettemlow1(jsonData.lowTem1)
            SetGettemlow2(jsonData.lowTem2)
            SetGettemhight1(jsonData.highTem1)
            SetGettemhight2(jsonData.highTem2)
        })
    })

    return <View style={{
        flex: 1,
        backgroundColor: '#F5F5F5',
    }}>
        <UIHeader title={"CÀI ĐẶT NGƯỠNG"} />
        <View style={{
            borderWidth: 2,
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 20
        }}>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                }
                style={{
                    width: 200,
                    alignSelf: 'center',

                }}
            >
                <Picker.Item label="NHÀ KÍNH 1" value="1" />
                <Picker.Item label="NHÀ KÍNH 2" value="2" />

            </Picker>
        </View>
        {/* Nha Kinh 1 */}
        {selectedValue == 1 && <View>
            <View style={{
                marginTop: 10,
                marginBottom: 10,
                flexDirection: 'row'
            }}>
                <Text style={{
                    color: 'black',
                    alignSelf: 'center'

                }}>MANUAL</Text>
                <View style={{flex:1}}/>
                <Icon onPress={MODE1}
                    name={getMode1?getMode1:'toggle-off'}
                    size={50}
                    color={getColor1?getColor1:'black'}
                    style={{ marginEnd: 10, alignSelf: 'center' }}
                />
                <View style={{flex:1}}/>
                <Text style={{
                    color: 'black',
                    alignSelf: 'center'

                }}>AUTO</Text>
            </View>
            <View style={{
                borderWidth: 2,
                borderRadius: 20,
                marginHorizontal: 10,
                backgroundColor: 'white',
                height: 100
            }}>

                <Text style={{
                    color: 'black',
                    paddingLeft: 10,
                    fontWeight: 'bold',
                    marginTop: 10
                }}>
                    ĐỘ ẨM ĐẤT
                </Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            color: 'black',
                            paddingLeft: 10
                        }}>THẤP:</Text>
                        <TextInput style={{
                            width: 100,
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 2
                        }}
                            placeholder={`${getviewhumlow1}`}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                SetGethumlow1(text)
                            }}
                        />
                        <Text style={{
                            alignSelf: 'center'
                        }}>
                            %
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 20
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            color: 'black'
                        }}>CAO:</Text>
                        <TextInput style={{
                            width: 100,
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 2
                        }}
                            placeholder={`${getviewhumhight1}`}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                SetGethumhight1(text)
                            }}
                        />
                        <Text style={{
                            alignSelf: 'center'
                        }}>
                            %
                        </Text>
                    </View>
                </View>
            </View>
            {/*  */}
            {/*  */}
            {/* NHIET DO */}
            <View style={{
                borderWidth: 2,
                borderRadius: 20,
                marginHorizontal: 10,
                marginTop: 20,
                backgroundColor: 'white',
                height: 100
            }}>
                <Text style={{
                    color: 'black',
                    paddingLeft: 10,
                    fontWeight: 'bold',
                    marginTop: 10
                }}>
                    NHIỆT ĐỘ
                </Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            color: 'black',
                            paddingLeft: 10
                        }}>THẤP:</Text>
                        <TextInput style={{
                            width: 100,
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 2
                        }}
                            placeholder={`${getviewtemlow1}`}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                SetGettemlow1(text)
                            }}
                        />
                        <Text style={{
                            alignSelf: 'center'
                        }}>
                            °C
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 20
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            color: 'black'
                        }}>CAO:</Text>
                        <TextInput style={{
                            width: 100,
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 2
                        }}
                            placeholder={`${getviewtemhight1}`}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                SetGettemhight1(text)
                            }}
                        />
                        <Text style={{
                            alignSelf: 'center'
                        }}>
                            °C
                        </Text>
                    </View>
                </View>
            </View>
            {/*  */}
            {/*  */}
            {/* ÁNH SÁNG */}
            <View style={{
                borderWidth: 2,
                borderRadius: 20,
                marginHorizontal: 10,
                marginTop: 20,
                backgroundColor: 'white',
                height: 100
            }}>
                <Text style={{
                    color: 'black',
                    paddingLeft: 10,
                    fontWeight: 'bold',
                    marginTop: 10
                }}>
                    ÁNH SÁNG
                </Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            color: 'black',
                            paddingLeft: 10
                        }}>THẤP:</Text>
                        <TextInput style={{
                            width: 100,
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 2
                        }}
                            placeholder={`${getviewlightlow1}`}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                SetGetlightlow1(text)
                            }}
                        />
                        <Text style={{
                            alignSelf: 'center'
                        }}>
                            lux
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 20
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            color: 'black'
                        }}>CAO:</Text>
                        <TextInput style={{
                            width: 100,
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 2
                        }}
                            placeholder={`${getviewlighthight1}`}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                SetGetlighthight1(text)
                            }}
                        />
                        <Text style={{
                            alignSelf: 'center'
                        }}>
                            lux
                        </Text>
                    </View>
                </View>
            </View>
        </View>}
        {/*  */}
        {/*  */}
        {/* NHA KINH 2 */}
        {selectedValue == 2 && <View>
            <View style={{
                marginTop: 10,
                marginBottom: 10,
                flexDirection: 'row'
            }}>
                <Text style={{
                    color: 'black',
                    alignSelf: 'center'

                }}>MANUAL</Text>
                <View style={{flex:1}}/>
                <Icon onPress={MODE2}
                    name={getMode2?getMode2:'toggle-off'}
                    size={50}
                    color={getColor2?getColor2:'black'}
                    style={{ marginEnd: 10, alignSelf: 'center' }}
                />
                <View style={{flex:1}}/>
                <Text style={{
                    color: 'black',
                    alignSelf: 'center'

                }}>AUTO</Text>
            </View>
            <View style={{
                borderWidth: 2,
                borderRadius: 20,
                marginHorizontal: 10,
                backgroundColor: 'white',
                height: 100
            }}>
                <Text style={{
                    color: 'black',
                    paddingLeft: 10,
                    fontWeight: 'bold',
                    marginTop: 10
                }}>
                    ĐỘ ẨM ĐẤT
                </Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            color: 'black',
                            paddingLeft: 10
                        }}>THẤP:</Text>
                        <TextInput style={{
                            width: 100,
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 2
                        }}
                            placeholder={`${getviewhumlow2}`}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                SetGethumlow2(text)
                            }}
                        />
                        <Text style={{
                            alignSelf: 'center'
                        }}>
                            %
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 20
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            color: 'black'
                        }}>CAO:</Text>
                        <TextInput style={{
                            width: 100,
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 2
                        }}
                            placeholder={`${getviewhumhight2}`}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                SetGethumhight2(text)
                            }}
                        />
                        <Text style={{
                            alignSelf: 'center'
                        }}>
                            %
                        </Text>
                    </View>
                </View>
            </View>
            {/*  */}
            {/*  */}
            {/* NHIET DO */}
            <View style={{
                borderWidth: 2,
                borderRadius: 20,
                marginHorizontal: 10,
                marginTop: 20,
                backgroundColor: 'white',
                height: 100
            }}>
                <Text style={{
                    color: 'black',
                    paddingLeft: 10,
                    fontWeight: 'bold',
                    marginTop: 10
                }}>
                    NHIỆT ĐỘ
                </Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            color: 'black',
                            paddingLeft: 10
                        }}>THẤP:</Text>
                        <TextInput style={{
                            width: 100,
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 2
                        }}
                            placeholder={`${getviewtemlow2}`}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                SetGettemlow2(text)
                            }}
                        />
                        <Text style={{
                            alignSelf: 'center'
                        }}>
                            °C
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 20
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            color: 'black'
                        }}>CAO:</Text>
                        <TextInput style={{
                            width: 100,
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 2
                        }}
                            placeholder={`${getviewtemhight2}`}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                SetGettemhight2(text)
                            }}
                        />
                        <Text style={{
                            alignSelf: 'center'
                        }}>
                            °C
                        </Text>
                    </View>
                </View>
            </View>
            {/*  */}
            {/*  */}
            {/* ÁNH SÁNG */}
            <View style={{
                borderWidth: 2,
                borderRadius: 20,
                marginHorizontal: 10,
                marginTop: 20,
                backgroundColor: 'white',
                height: 100
            }}>
                <Text style={{
                    color: 'black',
                    paddingLeft: 10,
                    fontWeight: 'bold',
                    marginTop: 10
                }}>
                    ÁNH SÁNG
                </Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            color: 'black',
                            paddingLeft: 10
                        }}>THẤP:</Text>
                        <TextInput style={{
                            width: 100,
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 2
                        }}
                            placeholder={`${getviewlightlow2}`}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                SetGetlightlow2(text)
                            }}
                        />
                        <Text style={{
                            alignSelf: 'center'
                        }}>
                            lux
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 20
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            color: 'black'
                        }}>CAO:</Text>
                        <TextInput style={{
                            width: 100,
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 2
                        }}
                            placeholder={`${getviewlighthight2}`}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                SetGetlighthight2(text)
                            }}
                        />
                        <Text style={{
                            alignSelf: 'center'
                        }}>
                            lux
                        </Text>
                    </View>
                </View>
            </View>
        </View>}
        <View style={{ flex: 1 }}></View>
        <TouchableOpacity 
        onPress={()=>{
            if (gethumlow1==gethumhight1||gethumlow2==gethumhight2||getlightlow1==getlighthight1||
                getlightlow2==getlighthight2||gettemlow1==gettemhight1||gettemlow2==gettemhight2){
                    Alert.alert('Cảnh Báo:','Có 1 ngưỡng đang trùng nhau')
                }
            else{
            socket.emit('getAutoValue', '{"lowHum1":' + gethumlow1 + ',"highHum1":' + gethumhight1 + ',"lowHum2":' + gethumlow2 + ',"highHum2":' + gethumhight2 + ',"lowLight1":' + getlightlow1 + ',"highLight1":' + getlighthight1 + ',"lowLight2":' + getlightlow2 + ',"highLight2":' + getlighthight2 + ',"lowTem1":' + gettemlow1 + ',"highTem1":' + gettemhight1 + ',"lowTem2":' + gettemlow2 + ',"highTem2":' + gettemhight2 + '}')
            console.log('{"lowHum1":' + gethumlow1 + ',"highHum1":' + gethumhight1 + ',"lowHum2":' + gethumlow2 + ',"highHum2":' + gethumhight2 + ',"lowLight1":' + getlightlow1 + ',"highLight1":' + getlighthight1 + ',"lowLight2":' + getlightlow2 + ',"highLight2":' + getlighthight2 + ',"lowTem1":' + gettemlow1 + ',"highTem1":' + gettemhight1 + ',"lowTem2":' + gettemlow2 + ',"highTem2":' + gettemhight2 + '}')
        }
        }}
        style={{
            marginBottom: 90,
            alignSelf: 'flex-end',
            marginHorizontal: 20,
            borderWidth: 2,
            borderRadius: 20,
            width: 170,
            height: 50,
            justifyContent: 'center',
        }}>
            <Text style={{
                alignSelf: 'center',
                color: 'black',
                fontWeight: 'bold'
            }}>LƯU THAY ĐỔI</Text>
        </TouchableOpacity>
    </View>
}


export default ModeScreen