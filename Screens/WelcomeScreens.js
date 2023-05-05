import React,{useState} from 'react'
import { Alert, Text, View, Image, ImageBackground, TouchableOpacity } from '../node_modules/react-native'
import { images,icons } from '../constants/index'

export default WelcomeScreens
import { BTNUI } from '../components/index'
// component-function
function WelcomeScreens(props) {
    const [accountTypes,setAccountTypes]=useState([
        {name:'Influencer',
        Iselected:true},
        {
            name:'Business',
            Iselected:false
        },
        {
            name:'Individual',
            Iselected:false
        }
    ])

    // debugger
    // naivgation
    const {navigation,route}=props
    // funtion of navigate to/back
    const {navigate,goback}=navigation
    
    return <View style={{
        backgroundColor: 'white',
        flex: 1,

    }}>
        {/* <Text style={{color:'black'}}>x= {props.x} y= {props.y}</Text>
        <Text style={{color:'black'}}>ten:{person.name}</Text>
        <Text style={{color:'black'}}>tuoi:{person.age}</Text>
        <Text style={{color:'black'}}>Tong x,y:{sum2Number(3,4)}</Text>
        <Text style={{color:'black'}}>Hieu x,y:{sub2Number(3,4)}</Text>
        <Text style={{color:'black'}}>So PI:{PI}</Text>
        
        {Produce.map(eachProduce => <Text style={{color:'black'}}>{eachProduce.name},{eachProduce.age}</Text>)} */}
        <ImageBackground
            source={images.background}
            resizeMode='cover'
            style={{
                flex: 100
            }}
        >

            <View style={{
                flex: 15,
            }}>
                <View style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: 60,
                }}>
                    <Image
                        source={icons.fire_icon}
                        style={{
                            width: 30,
                            height: 30,
                            marginStart: 10,
                            marginEnd: 5
                        }}
                    />
                    <Text style={{ color: "white", fontSize:17 }}>DHDKTD15A</Text>
                    <View style={{ flex: 1 }} />
                    <Image
                        source={icons.question_icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: 'white',
                            marginEnd: 10,
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    />
                </View>
            </View>
            <View style={{
                flex: 25,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text style={{ 
                    color: "white",
                    marginBottom:5
                    }}>
                    WELLCOME TO
                </Text>
                <Text style={{ 
                    color: "white",
                    marginBottom:10,
                    fontWeight:'bold'
                    }}>
                    IOT APP ANDROID
                </Text>
                <Text style={{ 
                    color: "white",
                    marginBottom:5
                    }}>
                    Please select your account type
                </Text>
            </View>
            <View style={{
                flex: 50,
                
            }}>
                {accountTypes.map((accountType,index) => 
                    <BTNUI
                    key={index}
                    onPress = {()=>{
                        setAccountTypes(accountTypes.map(eachAccountType=>{
                            return {
                                ...eachAccountType,
                                Iselected:eachAccountType.name==accountType.name
                            }
                        }))
                        
                    }}
                    
                    title={accountType.name}
                    Iselected={accountType.Iselected}
                    />)}



                
            </View>
            <View style={{
                flex: 25,
                
            }}>
                <BTNUI 
                title='LOGIN'
                onPress={()=>{
                    navigate('LoginSceens')
                }}
                />
                <Text style={{ 
                    color: "white",
                    marginBottom:5,
                    alignSelf:"center"
                    }}>
                    Want to register new Account
                </Text>
                <TouchableOpacity 
                onPress={()=>alert('trang dang nhap')}>
                    <Text style={{ 
                    color: "white",
                    marginBottom:5,
                    alignSelf:"center",
                    textDecorationLine:'underline'
                    }}>
                    Register
                </Text>
                    
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
}
