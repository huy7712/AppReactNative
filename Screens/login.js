import React, { useState,useEffect,createContext,useContext } from 'react'
import { images, icons } from '../constants/index'
import { TextInput, Text, View, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Alert } from 'react-native'
import { isValidatePass,isValidating } from '../utilies/validating'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Spinner from 'react-native-loading-spinner-overlay/lib'
import { DataContext } from './getdata'
import bcrypt from 'react-native-bcrypt'
export {LoginSceens
}



function LoginSceens(props) {
    const [email, setEmail] = useState('');
    const [user,setUser]=useState('null')
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const dismissKeyborad = () => { Keyboard.dismiss() }
    // states Validating
    const [errorEmail,setErroEmail]=useState('') 
    const [errorPassword,setErroPassword]=useState('')
    const isValidationOK = ()=> email.length>0&& password.length>0&& 
                                isValidatePass(password)==true&&
                                isValidating(email)==true
    // states to store email/password
        // // naivgation
        // const {navigation,route}=props
        // // funtion of navigate to/back
        // const {navigate,goback}=navigation

        const { navigation } = props;
        const { navigate } = navigation;
    
        const { setProfileData } = useContext(DataContext)
    // get data from github
    const [data, setData] = useState([]);
    const customRandomFallback = (size) => {
        const buffer = require('react-native-randombytes').randomBytes(size);
        return buffer.toString('hex');
      };
    bcrypt.setRandomFallback(customRandomFallback)


  useEffect(() => {
    fetch('http://52.76.44.17:3000/api/user')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);


    return (
    <TouchableWithoutFeedback onPress={dismissKeyborad}>
        <KeyboardAvoidingView style={{
            flex: 100,
            backgroundColor: 'white'
        }} behavior={Platform.OS=='ios'?'padding':'height'}>

            <View style={{
                flex: 5
            }}>
            </View>

            <View style={{
                flex: 20,
                flexDirection: 'row'
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
                    Already have an Account?
                </Text>
                <Icon
                name={'tv'}
                size={120}
                color='red'
                style={{marginEnd:10,alignSelf:'center'}}
                />

                
            </View>

            <View style={{
                flex: 30,
            }}>
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
                            setErroEmail(isValidating(text)==(true&&text.length>0)?'':'Email not in correct format')
                            setEmail(text)                           
                        }              
                    }
                    onEndEditing={()=>{
                        setUser(data.find(item=> item.email===email)) 
                        console.log(data.find(item=> item.email===email))      
                    }}
                    
                    keyboardType="email-address">

                </TextInput>
                <Text style={{color:'red'}}>{errorEmail}</Text>
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
                    secureTextEntry={true}
                >
                </TextInput>
                <Text style={{color:'red'}}>{errorPassword}</Text>
            </View>
            
            <View style={{
                flex: 10,
            }}>
<TouchableOpacity
  disabled={isValidationOK() === false}
  onPress={() => {

    if (data.find(item => item.email === email)) {  
        setProfileData(user)
      setLoading(true);
      bcrypt.compare(password, user.password, function(err, result) {
        if (err) {
          setLoading(false);
          Alert.alert('Warning', 'Something went wrong');
        } else if (result) {
          setLoading(false);
          navigate('UITabs');
        } else {
          setLoading(false);
          Alert.alert(
            'Warning',
            'Something went wrong \n Please check your \n Email and Password',
          );
        }
      }); 
    } else {
      alert('kiem tra email');
    }
  }}>
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
  }}>LOGIN</Text>
  <Spinner
    visible={loading}
    textContent={'Waiting...'}
    textStyle={{ color: 'red' }}
  />
</TouchableOpacity>

                
                <TouchableOpacity onPress={()=>{
                    // navigate('Register')
                }}>
                    <Text style={{
                        padding: 8,
                        alignSelf: 'center',
                        color: '#FF3333'
                    }}>
                        New uses? Register now
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 15,

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
                    <Icon
                    name={'facebook'}
                    size={45}
                    color='blue'
                    style={{marginEnd:10}}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={icons.gg_icon} style={{
                        height:50,
                        width:50
                    }}>
                    </Image>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    )
}