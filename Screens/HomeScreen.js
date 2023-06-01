import React, { useState, useEffect } from 'react'
import {
    TextInput, Text, View, ScrollView, Image, TouchableOpacity, ImageBackground
} from '../node_modules/react-native'
import { images } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ProGChart from './chartmodule/progresschart'
import * as Animatable from 'react-native-animatable';

function HomeScreen(props) {

    // naivgation
    const {navigation,route}=props
    // funtion of navigate to/back
    const {navigate,goback}=navigation

    const [sour, setSour] = useState(images.backgroundHomeScreen)
    const [sour1, setSour1] = useState(images.backgroundHomeScreen2)

    // 
    // 
    // NHIỆT ĐỘ ÁNH SÁNG ĐỘ ẨM
    const [temI2C1,setTemI2C1] = useState('0')
    const [humI2C1,setHumI2C1] = useState('0')
    const [lightI2C1,setLightI2C1] = useState('0')
    const [temI2C2,setTemI2C2] = useState('0')
    const [humI2C2,setHumI2C2] = useState('0')
    const [lightI2C2,setLightI2C2] = useState('0')
    socket.on('S-RequestI2C', (value) => {
        let jsonData = JSON.parse(value);
        // console.log(jsonData);
        switch (jsonData.i2ca) {
            case 35:
                //lightI2C = (parseInt(jsonData.i2cd1.toString(16) + jsonData.i2cd2.toString(16), 16) / 1.2)
                switch (jsonData.houseID) {
                    case 1:
                        setLightI2C1((((jsonData.i2cd1 << 8) | jsonData.i2cd2) / 1.2).toFixed(2));
                        break
                    case 2:
                        setLightI2C2((((jsonData.i2cd1 << 8) | jsonData.i2cd2) / 1.2).toFixed(1))
                        break
                }
                break
            case 68:
                // temI2C = (parseInt(jsonData.i2cd1.toString(16) + jsonData.i2cd2.toString(16), 16) * 175 / 65535) - 45
                // humI2C = (parseInt(jsonData.i2cd4.toString(16) + jsonData.i2cd5.toString(16), 16) * 100 / 65535)
                switch (jsonData.houseID) {
                    case 1:
                            setTemI2C1(((((jsonData.i2cd1 << 8) | jsonData.i2cd2) * 175 / 65535) - 45).toFixed(0));
                            setHumI2C1(((((jsonData.i2cd4 << 8) | jsonData.i2cd5) * 100 / 65535)).toFixed(2));
                        break
                    case 2:
                            setTemI2C2(((((jsonData.i2cd1 << 8) | jsonData.i2cd2) * 175 / 65535) - 45).toFixed(0));
                            setHumI2C2(((((jsonData.i2cd4 << 8) | jsonData.i2cd5) * 100 / 65535)).toFixed(2));
                        break
                }
                break
        }

    })

    const [status,setstatus]=useState(false)
    const [status1,setstatus1]=useState(false)
    socket.on('S-status', (data) => {
        let jsonData = JSON.parse(data);
        switch (jsonData.houseID) {
            case 1:
                switch (jsonData.msg) {
                    case 'Lora_Offline':
                        setstatus(true)
                        break
                    case 'Lora_Online':
                        setstatus(false)
                        break
                }
                break
            case 2:
                switch (jsonData.msg) {
                    case 'Lora_Offline':
                        setstatus1(true)
                        break
                    case 'Lora_Online':
                        setstatus1(false)
                        break
                }
                break
        }
    })

    // function changeBackground() {
    //     if (sour === images.backgroundHomeScreen) {
    //         setSour(images.backgroundHomeScreen2)
    //     }
    //     if (sour === images.backgroundHomeScreen2) {
    //         setSour(images.backgroundHomeScreen3)
    //     }
    //     if (sour === images.backgroundHomeScreen3) {
    //         setSour(images.backgroundHomeScreen)
    //     }
    // }
    // function changeBackground1() {
    //     if (sour1 === images.backgroundHomeScreen) {
    //         setSour1(images.backgroundHomeScreen2)
    //     }
    //     if (sour1 === images.backgroundHomeScreen2) {
    //         setSour1(images.backgroundHomeScreen3)
    //     }
    //     if (sour1 === images.backgroundHomeScreen3) {
    //         setSour1(images.backgroundHomeScreen)
    //     }
    // }

    return <ScrollView style={{
        flex: 1,
        backgroundColor: '#F5F5F5'
    }}>
        <Text style={{
            color: 'black',
            fontSize: 25,
            fontWeight: 'bold',
            alignSelf: 'center',
            marginTop: 7
        }}>HomeScreen</Text>
        <View style={{
            height: 375,
            marginHorizontal: 3,
            borderWidth: 4
        }}>
            <Animatable.View
                animation="zoomIn"
                delay={1000}
                style={{ flex: 50 }}>
                <ImageBackground
                    source={sour}
                    resizeMode='cover'
                    style={{
                        flex: 50,
                        marginHorizontal: 5,
                        marginTop: 3
                    }}
                    onPress={()=>{
                        navigate('NhaKinh1')
                    }}
                >
                    {status==true?<View style={{
                        alignItems:'center',
                        flex:1,
                        justifyContent:'center',
                        backgroundColor:'white'
                    }}>
                        <Text style={{
                            color:'black',
                            fontWeight:'bold',
                            fontSize:16
                        }}>NHÀ 1 MẤT KẾT NỐI</Text>
                    </View>:
                    <TouchableOpacity style={{
                        flex:1,
                    }}
                    onPress={()=>{
                        navigate('NhaKinh1')
                    }}/>}
                    {/* <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                        <TouchableOpacity
                            onPress={()=>navigate('NhaKinh1')}
                            key={1}
                        >
                            <Icon name="chevron-right" color="black" size={50} />
                        </TouchableOpacity>
                    </View> */}
                </ImageBackground>
            </Animatable.View>
            <View style={{
                height: 35,
                alignSelf: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>NHÀ KÍNH 1</Text>
            </View>
            <View style={{
                flex:50,
                marginHorizontal:10,
                borderWidth:1,
                borderRadius:20,
                backgroundColor:'white'
            }}>
            <View style={{
                flex: 10,
                flexDirection: 'row',
                alignContent: 'center',
                alignSelf: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginStart: 10,
                }}>THÔNG SỐ CƠ BẢN</Text>
            </View>
            <View style={{
                flex: 40,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={{
                    flex: 33.33333,
                    alignItems: 'center'
                }}>
                    <View style={{
                        alignItems: 'center',
                        width: 110,
                        height: 70,
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 10,
                        backgroundColor: 'white'

                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: 'black',
                            fontSize: 13,
                            fontFamily: 'Loto-Sans'
                        }}>
                            NHIỆT ĐỘ</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 13
                        }}>
                            {temI2C1} °C
                        </Text>
                    </View>
                </View>
                <View style={{
                    flex: 33.333333,
                    alignItems: 'center'
                }}>
                    <View style={{
                        alignItems: 'center',
                        width: 110,
                        height: 70,
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 10,
                        backgroundColor: 'white'

                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: 'black',
                            fontSize: 13
                        }}>ÁNH SÁNG</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 13
                        }}>
                            {lightI2C1} lux
                        </Text>
                    </View>
                </View>
                <View style={{
                    flex: 33.333333,
                    alignItems: 'center'
                }}>
                    <View style={{
                        alignItems: 'center',
                        width: 110,
                        height: 70,
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 10,
                        backgroundColor: 'white'

                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: 'black',
                            fontSize: 13
                        }}>ĐỘ ẨM</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 13
                        }}>
                            {humI2C1} %
                        </Text>
                    </View>
                </View>
            </View>
            </View>
            <View style={{
                flex:10,
            }}>
            <TouchableOpacity 
                onPress={()=>{
                    navigate('NhaKinh1')
                }}
                style={{
                    alignSelf:'center',
                    flexDirection:'row',
                }}>
                    <Text style={{
                        color: 'black',
                        marginHorizontal:5,
                        fontWeight:'bold'
                    }}>SHOW MORE</Text>
                    <Icon name="arrow-right" color="black" size={20}></Icon>
                </TouchableOpacity>
            </View>

        </View>
        {/* NHÀ KÍNH 2 */}
        <View style={{
            height: 375,
            marginHorizontal: 3,
            borderWidth: 4,
            marginTop:2
        }}>
            <Animatable.View
                animation="zoomIn"
                delay={1000}
                style={{ flex: 50 }}
                >
                <ImageBackground
                    source={sour1}
                    resizeMode='cover'
                    style={{
                        flex: 50,
                        marginHorizontal: 5,
                        marginTop: 3
                    }}   
                >
                    {status1==true?<View style={{
                        alignItems:'center',
                        flex:1,
                        justifyContent:'center',
                        backgroundColor:'white'
                    }}>
                        <Text style={{
                            color:'black',
                            fontWeight:'bold',
                            fontSize:16
                        }}>NHÀ 2 MẤT KẾT NỐI</Text>
                    </View>:
                    <TouchableOpacity style={{
                        flex:1,
                    }}
                    onPress={()=>{
                        navigate('NhaKinh2')
                    }}/>
                    }
                    {/* <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                        <TouchableOpacity
                            onPress={()=>navigate('NhaKinh2')}
                            key={1}
                        >
                            <Icon name="chevron-right" color="black" size={50} />
                        </TouchableOpacity>
                    </View> */}
                </ImageBackground>
            </Animatable.View>
            <View style={{
                height: 35,
                alignSelf: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>NHÀ KÍNH 2</Text>
            </View>
            <View style={{
                flex:50,
                marginHorizontal:10,
                borderWidth:1,
                borderRadius:20,
                backgroundColor:'white'
            }}>
            <View style={{
                flex: 10,
                flexDirection: 'row',
                alignContent: 'center',
                alignSelf: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginStart: 10,
                }}>THÔNG SỐ CƠ BẢN</Text>
            </View>
            <View style={{
                flex: 40,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={{
                    flex: 33.33333,
                    alignItems: 'center'
                }}>
                    <View style={{
                        alignItems: 'center',
                        width: 110,
                        height: 70,
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 10,
                        backgroundColor: 'white'

                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: 'black',
                            fontSize: 13,
                            fontFamily: 'Loto-Sans'
                        }}>
                            NHIỆT ĐỘ</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 13
                        }}>
                            {temI2C2} °C
                        </Text>
                    </View>
                </View>
                <View style={{
                    flex: 33.333333,
                    alignItems: 'center'
                }}>
                    <View style={{
                        alignItems: 'center',
                        width: 110,
                        height: 70,
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 10,
                        backgroundColor: 'white'

                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: 'black',
                            fontSize: 13
                        }}>ÁNH SÁNG</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 13
                        }}>
                            {lightI2C2} lux
                        </Text>
                    </View>
                </View>
                <View style={{
                    flex: 33.333333,
                    alignItems: 'center'
                }}>
                    <View style={{
                        alignItems: 'center',
                        width: 110,
                        height: 70,
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 10,
                        backgroundColor: 'white'

                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: 'black',
                            fontSize: 13
                        }}>ĐỘ ẨM</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 13
                        }}>
                            {humI2C2} %
                        </Text>
                    </View>
                </View>
            </View>
            </View>
            <View style={{
                flex:10,
            }}>
            <TouchableOpacity 
                onPress={()=>{
                    navigate('NhaKinh2')
                }}
                style={{
                    alignSelf:'center',
                    flexDirection:'row',
                }}>
                    <Text style={{
                        color: 'black',
                        marginHorizontal:5,
                        fontWeight:'bold'
                    }}>SHOW MORE</Text>
                    <Icon name="arrow-right" color="black" size={20}></Icon>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
}

export default HomeScreen