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
    const [sour1, setSour1] = useState(images.backgroundHomeScreen)
    const dataL = {
        data: [0.34]
    };
    const dataT = {
        data: [0.39]
    }
    const dataH = {
        data: [0.42]
    }

    function changeBackground() {
        if (sour === images.backgroundHomeScreen) {
            setSour(images.backgroundHomeScreen2)
        }
        if (sour === images.backgroundHomeScreen2) {
            setSour(images.backgroundHomeScreen3)
        }
        if (sour === images.backgroundHomeScreen3) {
            setSour(images.backgroundHomeScreen)
        }
    }
    function changeBackground1() {
        if (sour1 === images.backgroundHomeScreen) {
            setSour1(images.backgroundHomeScreen2)
        }
        if (sour1 === images.backgroundHomeScreen2) {
            setSour1(images.backgroundHomeScreen3)
        }
        if (sour1 === images.backgroundHomeScreen3) {
            setSour1(images.backgroundHomeScreen)
        }
    }

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
                >
                    <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                        <TouchableOpacity
                            onPress={changeBackground}
                            key={1}
                        >
                            <Icon name="chevron-right" color="black" size={50} />
                        </TouchableOpacity>
                    </View>
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
                }}>NHA KINH 1</Text>
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
                }}>BASIC PARAMETERS</Text>
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
                        width: 90,
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
                            NHIET DO</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 13
                        }}>
                            {dataT.data * 100}
                        </Text>
                    </View>
                </View>
                <View style={{
                    flex: 33.333333,
                    alignItems: 'center'
                }}>
                    <View style={{
                        alignItems: 'center',
                        width: 90,
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
                        }}>ANH SANG</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 13
                        }}>
                            {dataL.data * 100}
                        </Text>
                    </View>
                </View>
                <View style={{
                    flex: 33.333333,
                    alignItems: 'center'
                }}>
                    <View style={{
                        alignItems: 'center',
                        width: 90,
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
                        }}>DO AM DAT</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 13
                        }}>
                            {dataH.data * 100}
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
                        marginHorizontal:5
                    }}>SHOW MORE</Text>
                    <Icon name="arrow-right" color="black" size={20}></Icon>
                </TouchableOpacity>
            </View>

        </View>
        {/* NHA KINH 2 */}
        <View style={{
            height: 375,
            marginHorizontal: 3,
            borderWidth: 4,
            marginTop:2
        }}>
            <Animatable.View
                animation="zoomIn"
                delay={1000}
                style={{ flex: 50 }}>
                <ImageBackground
                    source={sour1}
                    resizeMode='cover'
                    style={{
                        flex: 50,
                        marginHorizontal: 5,
                        marginTop: 3
                    }}
                >
                    <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                        <TouchableOpacity
                            onPress={changeBackground1}
                            key={1}
                        >
                            <Icon name="chevron-right" color="black" size={50} />
                        </TouchableOpacity>
                    </View>
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
                }}>NHA KINH 2</Text>
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
                }}>BASIC PARAMETERS</Text>
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
                        width: 90,
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
                            NHIET DO</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 13
                        }}>
                            {dataT.data * 100}
                        </Text>
                    </View>
                </View>
                <View style={{
                    flex: 33.333333,
                    alignItems: 'center'
                }}>
                    <View style={{
                        alignItems: 'center',
                        width: 90,
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
                        }}>ANH SANG</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 13
                        }}>
                            {dataL.data * 100}
                        </Text>
                    </View>
                </View>
                <View style={{
                    flex: 33.333333,
                    alignItems: 'center'
                }}>
                    <View style={{
                        alignItems: 'center',
                        width: 90,
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
                        }}>DO AM DAT</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 13
                        }}>
                            {dataH.data * 100}
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
                        marginHorizontal:5
                    }}>SHOW MORE</Text>
                    <Icon name="arrow-right" color="black" size={20}></Icon>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
}

export default HomeScreen