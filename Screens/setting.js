import React, { useEffect, useState } from 'react'
import { images, icons } from '../constants/index'
import { TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, FlatList, ScrollView } from '../node_modules/react-native'
import { BTNUI, UIHeader } from '../components/index'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Picker } from '@react-native-picker/picker'



function Setting(props) {
    const [showElement, setShowElement] = useState(false)
    const [showElement2, setShowElement2] = useState(false)
    const [i2cAddresses, setI2CAddresses] = useState([]);
    const [i2cAddresses2, setI2CAddresses2] = useState([]);

    useEffect(() => {
        socket.on("GET_I2C_DEVICE", (data1) => {
          const data = JSON.parse(data1);
          const length = data.lenght;
          const addresses = [];
          const addresses2 = [];
            if (data.HouseID==1){
          for (let i = 1; i <= data.lenght; i++) {
            // const i2cKey = `I2C_address_${i}`;
            // const i2cValue = data[i2cKey];
            const addressKey = `I2C_address_${i}`;
            const addressValue = parseInt(data[addressKey]);
            addresses.push(addressValue);
          }
          setI2CAddresses(addresses);
        }
        else if (data.HouseID==2){
            for (let i = 1; i <= data.lenght; i++) {
                // const i2cKey = `I2C_address_${i}`;
                // const i2cValue = data[i2cKey];
                const addressKey = `I2C_address_${i}`;
                const addressValue = parseInt(data[addressKey]);
                addresses2.push(addressValue);
              }
              setI2CAddresses2(addresses2);
        }
        });
      }, []);

    return <ScrollView style={{
        flex: 1,
    }}>
        <UIHeader title={'CẤU HÌNH'} />
        <View style={{
            marginHorizontal:10,
            minHeight:350,
            borderWidth:2,
            borderRadius:20,
            marginTop:10
        }}>
            <Text style={{
                color:'black',
                fontSize:20,
                alignSelf:'center',
                fontWeight:'bold',
            }}>
                NHA KINH 1
            </Text>
            <View>
                <TouchableOpacity onPress={()=>setShowElement(true)}>
                    <Text style={{
                        color:'black'
                    }}>SCAN I2C</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection:'row',
                marginTop:5,
                marginBottom:5
            }}>
                <View>
                <Text style={{
                    color:'black'
                }}>Nhập giá trị Read I2C</Text>
                <Text style={{
                    color:'black'
                }}>cho địa chỉ (Ms)</Text>
                </View>
                <TextInput 
                style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                        flex:1,
                        marginHorizontal:10,
                        
                    }}
                placeholder='Number'
                keyboardType={'numeric'}
                />
                <TouchableOpacity onPress={()=>console.log(selectedValue2)} style={{
                    
                }}>
                    <Text style={{
                        color:'black',
                        marginHorizontal:2,
                        borderWidth:2,
                        paddingHorizontal:5,
                        width:70,
                        height: 40,
                    }}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
           {showElement&&i2cAddresses.map((address, index) => (
                <View key={`View ${index}`} style={{flexDirection:'row'}}>
                    <View key={`View2 ${index}`}>
                    <Text key={`text ${index}`} style={{
                    color:'black'
                }}>Nhập giá trị Read I2C</Text>
                    <Text key={index} style={{
                    color:'black'
                }}>tại địa chỉ {address}</Text>
                    </View>
                    <TextInput
                    key={`inputText ${index}`}
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                        flex:1,
                        marginHorizontal:10
                    }}
                placeholder='Number'
                keyboardType={'numeric'}
                />
                <TouchableOpacity 
                onPress={()=>alert('SUBMIT'+ address)}>
                    <Text style={{
                        color:'black',
                        marginHorizontal:2,
                        borderWidth:2,
                        paddingHorizontal:5,
                        width:70,
                        height:40,
                    }}>SUBMIT</Text>
                </TouchableOpacity>

                </View>
            ))}
        
        </View>
        {/*  */}
        {/*  */}
        {/* NNHA KINH 2 */}
        <View style={{
            marginHorizontal:10,
            minHeight:350,
            borderWidth:2,
            borderRadius:20,
            marginTop:10
        }}>
            <Text style={{
                color:'black',
                fontSize:20,
                alignSelf:'center',
                fontWeight:'bold',
            }}>
                NHA KINH 2
            </Text>
            <View>
                <TouchableOpacity onPress={()=>setShowElement2(true)}>
                    <Text style={{
                        color:'black'
                    }}>SCAN I2C</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection:'row',
                marginTop:5,
                marginBottom:5
            }}>
                <View style={{width:160}}>
                <Text style={{
                    color:'black'
                }}>Nhập giá trị Read I2C</Text>
                <Text style={{
                    color:'black'
                }}>cho địa chỉ (Ms)</Text>
                </View>
                <TextInput 
                style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                        flex:1,
                        marginHorizontal:10,
                        
                    }}
                placeholder='Number'
                keyboardType={'numeric'}
                />
                <TouchableOpacity>
                    <Text style={{
                        color:'black',
                        marginHorizontal:2,
                        borderWidth:2,
                        paddingHorizontal:5,
                        width:70,
                        height:40,
                    }}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
           {showElement2&&i2cAddresses2.map((address, index) => (
                <View key={`View ${index}`} style={{flexDirection:'row'}}>
                    <View key={`View2 ${index}`} style={{width:160}}>
                    <Text key={`text ${index}`} style={{
                    color:'black'
                }}>Nhập giá trị Read I2C</Text>
                    <Text key={index} style={{
                    color:'black'
                }}>tại địa chỉ {address}</Text>
                    </View>
                    <TextInput
                    key={`inputText ${index}`}
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                        flex:1,
                        marginHorizontal:10
                    }}
                placeholder='Number'
                keyboardType={'numeric'}
                />
                <TouchableOpacity 
                onPress={()=>alert('SUBMIT'+ address)}>
                    <Text style={{
                        color:'black',
                        marginHorizontal:2,
                        borderWidth:2,
                        paddingHorizontal:5,
                        width:70,
                        height:40,
                    }}>SUBMIT</Text>
                </TouchableOpacity>

                </View>
            ))}
            <View style={{
                flexDirection:'row',
                marginTop:5,
                marginBottom:5
            }}>
                <View style={{width:160}}>
                <Text style={{
                    color:'black'
                }}>cài đặt thơi gian cho</Text>
                <Text style={{
                    color:'black'
                }}> NPK (Ms)</Text>
                </View>
                <TextInput 
                style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                        flex:1,
                        marginHorizontal:10,
                        
                    }}
                placeholder='Number'
                keyboardType={'numeric'}
                />
                <TouchableOpacity>
                    <Text style={{
                        color:'black',
                        marginHorizontal:2,
                        borderWidth:2,
                        paddingHorizontal:5,
                        width:70,
                        height:40,
                    }}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection:'row',
                marginTop:5,
                marginBottom:5
            }}>
                <View style={{width:160}}>
                <Text style={{
                    color:'black'
                }}>cài đặt thơi gian cho</Text>
                <Text style={{
                    color:'black'
                }}> pH (Ms)</Text>
                </View>
                <TextInput 
                style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                        flex:1,
                        marginHorizontal:10,
                        
                    }}
                placeholder='Number'
                keyboardType={'numeric'}
                />
                <TouchableOpacity>
                    <Text style={{
                        color:'black',
                        marginHorizontal:2,
                        borderWidth:2,
                        paddingHorizontal:5,
                        width:70,
                        height:40,
                    }}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection:'row',
                marginTop:5,
                marginBottom:5
            }}>
                <View style={{width:160}}>
                <Text style={{
                    color:'black'
                }}>cài đặt thơi gian cho</Text>
                <Text style={{
                    color:'black'
                }}> Độ Ẩm (Ms)</Text>
                </View>
                <TextInput 
                style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                        flex:1,
                        marginHorizontal:10,
                        
                    }}
                placeholder='Number'
                keyboardType={'numeric'}
                />
                <TouchableOpacity>
                    <Text style={{
                        color:'black',
                        marginHorizontal:2,
                        borderWidth:2,
                        paddingHorizontal:5,
                        width:70,
                        height:40,
                    }}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </View>

    </ScrollView>
}





export default Setting