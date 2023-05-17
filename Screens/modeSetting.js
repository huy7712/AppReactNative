import React, { useState, useEffect, createContext, useContext } from 'react'
import { TextInput, Text, View, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { UIHeader } from '../components'
import { ModeContext } from './getMode'


function ModeScreen(props) {

    const [selectedValue, setSelectedValue] = useState('1')
    const [getMode1, setGetMode1] = useState('')
    const [getColor1, setGetColor1] = useState('')
    const [getMode2, setGetMode2] = useState('')
    const [getColor2, setGetColor2] = useState('')
    
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

    useEffect(() => {
        fetch('http://192.168.137.100:1234/api/getMode1')
            .then(response => response.json())
            .then(data => {
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
        fetch('http://192.168.137.100:1234/api/getMode2')
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
                <Picker.Item label="NHA KINH 1" value="1" />
                <Picker.Item label="NHA KINH 2" value="2" />

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
                            placeholder='Number'
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
                            placeholder='Number'
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
                            placeholder='Number'
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
                            placeholder='Number'
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
                            placeholder='Number'
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                SetGetlightlow1(text)
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
                            placeholder='Number'
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                SetGetlighthight1(text)
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
                            placeholder='Number'
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
                            placeholder='Number'
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
                            placeholder='Number'
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
                            placeholder='Number'
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
                            placeholder='Number'
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
                            placeholder='Number'
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
            socket.emit('getAutoValue', '{"lowHum1":' + gethumlow1 + ',"highHum1":' + gethumhight1 + ',"lowHum2":' + gethumlow2 + ',"highHum2":' + gethumhight2 + ',"lowLight1":' + getlightlow1 + ',"highLight1":' + getlighthight1 + ',"lowLight2":' + getlightlow2 + ',"highLight2":' + getlighthight2 + ',"lowTem1":' + gettemlow1 + ',"highTem1":' + gettemhight1 + ',"lowTem2":' + gettemlow2 + ',"highTem2":' + gettemhight2 + '}')
            // console.log('{"lowHum1":' + gethumlow1 + ',"highHum1":' + gethumhight1 + ',"lowHum2":' + gethumlow2 + ',"highHum2":' + gethumhight2 + ',"lowLight1":' + getlightlow1 + ',"highLight1":' + getlighthight1 + ',"lowLight2":' + getlightlow2 + ',"highLight2":' + getlighthight2 + ',"lowTem1":' + gettemlow1 + ',"highTem1":' + gettemhight1 + ',"lowTem2":' + gettemlow2 + ',"highTem2":' + gettemhight2 + '}')

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