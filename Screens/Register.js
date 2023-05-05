import React, { useEffect, useState } from 'react'
import { images, icons } from '../constants/index'
import { TextInput, Text, View, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Alert } from '../node_modules/react-native'
import { isValidatePass,isValidating} from '../utilies/validating'
export default RegisterSceens

function RegisterSceens(props) {
    useEffect(()=>{
        Keyboard.addListener('keyboardDidShow',()=> {
            setKeyboardDisShow(true)
        })
        Keyboard.addListener('keyboardDidHide',()=> {
            setKeyboardDisShow(false)
        })
    })
    const [KeyboardDisShow,setKeyboardDisShow]=useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const dismissKeyborad = () => { Keyboard.dismiss() }
    // states Validating
    const [errorEmail,setErroEmail]=useState('') 
    const [errorPassword,setErroPassword]=useState('')
    const [errorNumber,setErroNumber]=useState('')
    const isValidationOK = ()=> email.length>0&& password.length>0&& 
                                isValidatePass(password)==true&&
                                isValidating(email)==true&&
                                number.length>8&&name.length>1
    // states to store email/password
    
    return <TouchableWithoutFeedback onPress={dismissKeyborad}>
        <KeyboardAvoidingView style={{
            flex: 100,
            backgroundColor: 'white'
        }} behavior={Platform.OS=='ios'?'padding':'height'}>

            <View style={{
                flex: 5
            }}>
            </View>

            <View style={{
                flex: 17,
                flexDirection: 'row',
                
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                    width: 220,
                    marginStart: 10,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    color: 'black'
                }}>
                    Here`s your first step with us
                </Text>
                <Image
                    source={icons.computer_icon}
                    style={{
                        width: 150,
                        height: 150,
                        marginEnd: 10,
                        tintColor: "#FF3333"
                    }}
                >

                </Image>
            </View>

            
            <View style={{
                flex: 40,
                
            }}>
                <Text style={{
                    color:'red',padding:10
                }}>
                    Name:
                </Text>

                <TextInput style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                    }}
                placeholder='Enter your name'
                onChangeText={(text)=>{
                    setName(text)
                }}
                >
                </TextInput>

                <Text style={{
                    color: 'red',
                    padding: 10,

                }}>
                    Email:
                </Text>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                    }}
                    placeholder='example@gmail.com'
                    // value='Email:'  
                    onChangeText={(text)=>
                        {
                            // if (isValidating(text)==true){
                            //     setErroEmail('Email not in correct format')
                            // }
                            // else {
                            //     setErroEmail('')
                            // }
                            setErroEmail(isValidating(text)==(true&&text.length>0)?'':'Email not in correct format')
                            setEmail(text)
                        }
                    }
                    keyboardType="email-address">

                </TextInput>
                <Text style={{color:'red'}}>{errorEmail}</Text>
                
                <Text style={{
                    color:'red',padding:10
                }}>
                    Phone:
                </Text>

                <TextInput style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                    }}
                placeholder='Enter your number'
                onChangeText={
                    (text)=>{
                        setNumber(text)
                    }
                }
                keyboardType='numeric'
                >
                </TextInput>
                
                <Text style={{
                    color: 'red',
                    padding: 10,

                }}>
                    Password:
                </Text>

                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                    }}
                    placeholder='Enter your password'
                    // value='Email:'  
                    onChangeText={(text)=>
                        {
                            setErroPassword(isValidatePass(text)==(true&&text.length>0)?'':'Password not format')
                            setPassword(text)
                        }
                    }
                    // secureTextEntry={true}
                >
                </TextInput>
                <Text style={{color:'red'}}>{errorPassword}</Text>
            </View>

            {KeyboardDisShow==false&&<View style={{
                flex: 5,
                
            }}>
                <TouchableOpacity>
                    <Text style={{
                        backgroundColor: isValidationOK()==true?'#FF3333':'gray',
                        height: 40,
                        width: 200,
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white',
                        alignSelf: 'center',
                        textAlign: 'center',
                        borderRadius: 30
                    }} 
                    disabled={isValidationOK()== false }
                    onPress={()=>{alert(`Email= ${email},password= ${password}`)}}
                    
                    >
                        REGISTER
                    </Text>
                </TouchableOpacity>
            </View>}

            {KeyboardDisShow==false&&<View style={{
                flex: 13,

            }}>
                <View style={{
                    height: 40, flexDirection: 'row', alignItems: 'center',
                    marginHorizontal: 20
                }}>
                    <View style={{
                        height: 1, backgroundColor: 'black', flex: 1
                    }}>
                    </View>
                    <Text style={{
                        padding: 8,
                        color: 'black',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 10
                    }}>
                        USE other nethods?
                    </Text>
                    <View style={{
                        height: 1,
                        backgroundColor: 'black',
                        flex: 1
                    }}>
                    </View>
                </View>
                <View style={{
                    flexDirection:'row',
                    alignSelf:'center'
                }}>
                    <TouchableOpacity>
                    <Image source={icons.fb_icon} style={{
                        width:50,
                        height:50,
                    }}>
                    </Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={icons.gg_icon} style={{
                        height:50,
                        width:50
                    }}>
                    </Image>
                    </TouchableOpacity>
                </View>
            </View>}
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

}