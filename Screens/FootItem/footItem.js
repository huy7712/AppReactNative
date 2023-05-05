import FootList from "../FootList"
import React, { useState } from 'react'
import { icons,images } from "../../constants"
import { TextInput, Text, View, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Alert } from '../../node_modules/react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function FootItem (props){
    let {name,place,image,status,socialNetwords}=props.food
    const onPress=props
    return <TouchableOpacity onPress={()=>alert(name)}>
        <View style={{
        height:170,
        padding:10,
        flexDirection:'row',
        marginBottom:20
    }}>
        <Image 
        source={image} 
        style={{
            width:100,
            height:100,
            resizeMode:'cover',
            borderRadius:10,
            marginRight:5,
            alignSelf:'center'
        }}>
        </Image> 
        <View style={{
            flex:1,
            
        }}>
            <Text style={{
                color:'black',
                fontWeight:'bold',
                fontSize:17
            }}>
                {name}
            </Text>
            <View style={{
                height:1,
                backgroundColor:'black',
                marginTop:5,
                
            }}/>
            <View style={{
                flexDirection:'row',
                flexWrap:'wrap'
            }}>
                <Text style={{
                    color:'black',
                    fontWeight:'bold'
                }}>States:</Text>
                <Text style={{
                    color:'black',
                }} numberOfLines={2}>{status}</Text>
            </View>

            <View style={{
                flexDirection:'row',
                flexWrap:'wrap'
            }}>
                <Text style={{
                    color:'black',
                    fontWeight:'bold'
                }}>Place:</Text>
                <Text style={{
                    color:'black',
                    
                }} numberOfLines={2}>{place}</Text>
            </View>
            <View style={{
                flexDirection:'row'
            }}>
                {socialNetwords['facebook'] != undefined &&<Image source={icons.fb_icon} style={{
                    width:24,
                    height:24,
                    marginRight:3
                }}/>}
                {socialNetwords['twitter'] != undefined &&<Image source={icons.twitter} style={{
                    width:24,
                    height:24,
                    borderRadius:10,
                    marginRight:3
                }}/>}
                {socialNetwords['instagram'] != undefined &&<Image source={icons.insta} style={{
                    width:24,
                    height:24,
                    borderRadius:10,
                    marginRight:3
                }}/>}
            </View>
        </View>   
    </View>
    </TouchableOpacity>
}

export default FootItem