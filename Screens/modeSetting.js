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
    const {setMode,setMode2}=useContext(ModeContext)

    function MODE1() {
        if (getMode1 == 'toggle-off') {
            setGetMode1('toggle-on')
            setGetColor1('blue')
            setMode(1)
        }
        else if (getMode1 == 'toggle-on') {
            setGetMode1('toggle-off')
            setGetColor1('black')
            setMode(0)
        }
    }
    function MODE2() {
        if (getMode2 == 'toggle-off') {
            setGetMode2('toggle-on')
            setGetColor2('blue')
            setMode2(1)
        }
        else if (getMode2 == 'toggle-on') {
            setGetMode2('toggle-off')
            setGetColor2('black')
            setMode2(0)
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
        <View style={{ flex: 1 }}></View>
        <TouchableOpacity style={{
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