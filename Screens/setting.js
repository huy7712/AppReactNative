import React, { useEffect, useState } from 'react'
import { images, icons } from '../constants/index'
import { TextInput, Text, View, Image, Switch, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Alert, ScrollView } from '../node_modules/react-native'
import { BTNUI, UIHeader } from '../components/index'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Picker } from '@react-native-picker/picker'



function Setting(props) {
    const [selectedValue2, setSelectedValue2] = useState('')
    return <View style={{
        flex: 1,
    }}>
        <UIHeader title={'Settings'} />
        <View style={{
            flexDirection: 'row',
            marginTop: 20,
        }}>
            <View style={{
                flex: 25,
                marginStart:5,
                height: 60,
                alignItems: 'center',
                flexDirection: 'row'
            }}>

                <Icon
                    name={'check-circle'}
                    size={20}
                    color='black'
                    style={{ marginEnd: 5 }}
                />


                <Text style={{
                    color: 'black'
                }}>ADC:</Text>
            </View>
            <View style={{
                borderWidth: 2,
                alignSelf: 'center',
                width: 150,
                height: 60
            }}>
                <Picker
                    selectedValue={selectedValue2}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue2(itemValue)
                    }
                    style={{
                        width: 150,
                        alignSelf: 'center',
                        borderWidth: 2
                    }}
                >
                    <Picker.Item label="5 second" value="5" />
                    <Picker.Item label="1 min" value="60" />
                    <Picker.Item label="10 min" value="600" />
                    <Picker.Item label="1 hour" value="3600" />
                </Picker>
            </View>
            <TouchableOpacity style={{
                flex: 15,
                height: 60,

                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 5,
                borderWidth: 2
            }}>
                <Text style={{


                }}>
                    <Text style={{}}>SUBMIT</Text>
                </Text>
            </TouchableOpacity>
        </View>
        <View style={{
            flexDirection: 'row',
            marginTop: 20,
        }}>
            <View style={{
                flex: 25,
                marginStart:5,
                height: 60,
                alignItems: 'center',
                flexDirection: 'row'
            }}>

                <Icon
                    name={'check-circle'}
                    size={20}
                    color='black'
                    style={{ marginEnd: 5 }}
                />


                <Text style={{
                    color: 'black'
                }}>I2C:</Text>
            </View>
            <View style={{
                borderWidth: 2,
                alignSelf: 'center',
                width: 150,
                height: 60
            }}>
                <Picker
                    selectedValue={selectedValue2}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue2(itemValue)
                    }
                    style={{
                        width: 150,
                        alignSelf: 'center',
                        borderWidth: 2
                    }}
                >
                    <Picker.Item label="5 second" value="5" />
                    <Picker.Item label="1 min" value="60" />
                    <Picker.Item label="10 min" value="600" />
                    <Picker.Item label="1 hour" value="3600" />
                </Picker>
            </View>
            <TouchableOpacity style={{
                flex: 15,
                height: 60,

                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 5,
                borderWidth: 2
            }}>
                <Text style={{


                }}>
                    <Text style={{}}>SUBMIT</Text>
                </Text>
            </TouchableOpacity>
        </View>
        <View style={{
            flexDirection: 'row',
            marginTop: 20,
        }}>
            <View style={{
                flex: 25,
                marginStart:5,
                height: 60,
                alignItems: 'center',
                flexDirection: 'row'
            }}>

                <Icon
                    name={'check-circle'}
                    size={20}
                    color='black'
                    style={{ marginEnd: 5 }}
                />


                <Text style={{
                    color: 'black'
                }}>RS485:</Text>
            </View>
            <View style={{
                borderWidth: 2,
                alignSelf: 'center',
                width: 150,
                height: 60
            }}>
                <Picker
                    selectedValue={selectedValue2}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue2(itemValue)
                    }
                    style={{
                        width: 150,
                        alignSelf: 'center',
                        borderWidth: 2
                    }}
                >
                    <Picker.Item label="5 second" value="5" />
                    <Picker.Item label="1 min" value="60" />
                    <Picker.Item label="10 min" value="600" />
                    <Picker.Item label="1 hour" value="3600" />
                </Picker>
            </View>
            <TouchableOpacity style={{
                flex: 15,
                height: 60,

                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 5,
                borderWidth: 2
            }}>
                <Text style={{


                }}>
                    <Text style={{}}>SUBMIT</Text>
                </Text>
            </TouchableOpacity>
        </View>
        <View style={{
            flexDirection: 'row',
            marginTop: 20,
        }}>
            <View style={{
                flex: 25,
                marginStart:5,
                height: 60,
                alignItems: 'center',
                flexDirection: 'row'
            }}>

                <Icon
                    name={'check-circle'}
                    size={20}
                    color='black'
                    style={{ marginEnd: 5 }}
                />


                <Text style={{
                    color: 'black'
                }}>EXTENSION:</Text>
            </View>
            <View style={{
                borderWidth: 2,
                alignSelf: 'center',
                width: 150,
                height: 60
            }}>
                <Picker
                    selectedValue={selectedValue2}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue2(itemValue)
                    }
                    style={{
                        width: 150,
                        alignSelf: 'center',
                        borderWidth: 2
                    }}
                >
                    <Picker.Item label="5 second" value="5" />
                    <Picker.Item label="1 min" value="60" />
                    <Picker.Item label="10 min" value="600" />
                    <Picker.Item label="1 hour" value="3600" />
                </Picker>
            </View>
            <TouchableOpacity style={{
                flex: 15,
                height: 60,

                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 5,
                borderWidth: 2
            }}>
                <Text style={{


                }}>
                    <Text style={{}}>SUBMIT</Text>
                </Text>
            </TouchableOpacity>
        </View>

    </View>
}


export default Setting