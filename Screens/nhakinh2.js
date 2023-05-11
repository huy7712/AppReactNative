import React, { useState, useEffect } from 'react'
import {
    TextInput, Text, View, ScrollView, Image, ImageBackground,
    FlatList,TouchableOpacity
} from '../node_modules/react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { icons, images } from '../constants'
import WeatherScreen from '../utilies/UpdateLocalData'
import moment from 'moment'
import ProGChart from './chartmodule/progresschart'
export default Nhakinh2


function Nhakinh2(props) {
    const dataH = {
        data: [0.42]
    }
    const dataH2 = {
        data: [0.38]
    }

    const [menu,setmenu]=useState([
        {
            name:'Lamp',
            icon:'lightbulb'
        },
        {
            name:'Fan',
            icon:'fan'
        },
        {
            name:'Pump1',
            icon:'faucet'
        },
        {
            name:'Pump2',
            icon:'faucet'
        },
        {
            name:'Pump3',
            icon:'faucet'
        },
        {
            name:'Pump4',
            icon:'faucet' 
        },
    ])



    return <ScrollView style={{
        flex: 1,
        backgroundColor: '#F5F5F5',
    }}>
        <Text style={{
            color:'black',
            fontSize:23,
            fontWeight:'bold',
            alignSelf:'center',
            marginTop:10,
            marginBottom:10
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

                    }}>Temperature:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{
                            color: 'black',
                            fontWeight: 'bold',
                            marginEnd: 3
                        }}>32
                        </Text>
                        <View style={{
                            paddingTop: 4
                        }}
                        ><Icon name={'circle'} size={7} /></View>
                        <Text style={{
                            color: 'black',
                            fontWeight: 'bold'
                        }}>C
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
                    }}>LINGHT:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{
                            color: 'black',
                            fontWeight: 'bold',
                            marginEnd: 3
                        }}>32 lux
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
                        }}>HUMIDITY:</Text>
                        <Text style={{
                            color: 'black'
                        }}>{dataH.data * 100}%</Text>
                    </View>
                </View>
                <View style={{
                    flex: 60,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ProGChart data={dataH} />
                    <Text style={{
                        position: 'absolute',
                        color: 'black',
                        fontSize: 15
                    }}
                    >{dataH.data * 100}</Text>
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
                        }}>Soil Moisture:</Text>
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
            height:130,
            backgroundColor:'white',
            marginTop:20,
            marginHorizontal:20,
            borderWidth:3,
            borderRadius:20,
            
        }}>
            <View style={{
                flex:30
            }}>
                <Text style={{
                    color:'black',
                    fontSize:20,
                    fontWeight:'bold',
                    alignSelf:'center'
                }}>NPK</Text>
            </View>
            <View style={{
                flex:70,
                flexDirection:'row',
                alignItems:'center',
                marginHorizontal:5
                }}>
                    <View style={{
                flex:33.3333,
                marginHorizontal:5,
                alignItems:'center',
                height:70
            }}>
                <Text style={{
                    color:'black',
                }}>Nitrogen:</Text>
                <Text style={{
                    color:'black',
                }}>41</Text>
            </View>
            <View style={{
                flex:33.3333,
                marginHorizontal:5,
                alignItems:'center',
                height:70  
            }}>
                <Text style={{
                    color:'black',
                }}>Phosphorus:</Text>
                <Text style={{
                    color:'black',
                }}>40</Text>
            </View>
            <View style={{
                flex:33.3333,
                marginHorizontal:5,
                alignItems:'center',
                height:70
                }}>
                    <Text style={{
                    color:'black',
                }}>Potassium:</Text>
                    <Text style={{
                    color:'black',
                }}>41</Text>
            </View>
            </View>
        </View>
         {/*  */}
            {/*  */}
            {/* DEVICES */}
            <View style={{
                height:30,
                marginTop:20,
            }}>
                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    color:'black',
                    marginHorizontal:20
                }}
                
                >DEVICES</Text>
            </View>
            {/* <ScrollView style={{
                height:90,
                backgroundColor:'red',
                marginTop:5,
                marginStart:20,
                flexDirection:'row'
            }}> 
                <View style={{
                    alignItems:'center',
                    marginHorizontal:10
                }}>
                <View style={{
                    borderWidth:2,
                    height:55,
                    width:55,
                    alignItems:'center',
                    borderRadius:50
                }}>
                <Icon name={'lightbulb'} size={45} color={'black'}/>
                </View>
                <Text style={{
                    color:'black',
                    fontSize:15,
                    marginTop:5
                }}>Lamp</Text>
                
                </View>
                
            </ScrollView> */}
            <View style={{
        height:100
    }}>
        <View style={{height:3, backgroundColor:'gray'}}/>
        <FlatList 
        style={{
            flex:1,
            backgroundColor:'white'
        }}
        data={menu}
        keyExtractor={item => item.name}
        horizontal
        renderItem={({item})=>{
            return <View style={{
                alignSelf:'center',
                padding:12,
                alignItems:'center',
            }}>
                <TouchableOpacity onPress={()=>{alert(`click ${item.name}`)}}>
                <View style={{
                    borderWidth:2,
                    alignItems:'center',
                    borderRadius:50,
                    width:50,
                    height:50,
                    // backgroundColor:'#0099FF'
                }}>
                <Icon 
                name={item.icon} 
                color={'black'}
                size={40}
                />
                </View>
                <Text style={{
                    color:'black',
                    alignSelf:'center'
                }}>
                    {item.name}
                </Text></TouchableOpacity>
            </View>
        }}
        >

        </FlatList>
        <View style={{height:3, backgroundColor:'gray'}}/>

    </View>
    </ScrollView>
}