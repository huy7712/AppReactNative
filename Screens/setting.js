import React, { useEffect, useState } from 'react'
import { images, icons } from '../constants/index'
import { TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, FlatList, ScrollView } from '../node_modules/react-native'
import { BTNUI, UIHeader } from '../components/index'
import text from '../components/text'
import style from '../components/style'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Picker } from '@react-native-picker/picker'



function Setting(props) {

    socket.emit('ResendValue2','a')

    const [showElement, setShowElement] = useState(false)
    const [showElement2, setShowElement2] = useState(false)
    const [i2cAddresses, setI2CAddresses] = useState([]);
    const [i2cAddresses2, setI2CAddresses2] = useState([]);

    const [inputValue, setInputValue] = useState()


    const [getTimeADC,setGettimeADC]=useState('')
    const [getTimeADC2,setGettimeADC2]=useState('')
    const [getTimeI2C,setGettimeI2C]=useState(['',''])
    const [getTimeI2C2,setGettimeI2C2]=useState(['',''])
    const [getTimeNPK,setGettimeNPK]=useState('')
    const [getTimepH,setGettimepH]=useState('')
    const [getTimeRs485_moisture,setGettimeRs485_moisture]=useState('')

    const handleInputChange = (index, value) => {
        const newInputs = [...getTimeI2C];
        newInputs[index] = value;
        setGettimeI2C(newInputs*1000);
      };
    const handleInputChange2 = (index, value) => {
        const newInputs = [...getTimeI2C2];
        newInputs[index] = value;
        setGettimeI2C2(newInputs*1000);
      };


    useEffect(() => {
        socket.on("GET_I2C_DEVICE", (data1) => {
          const data = JSON.parse(data1);
          const length = data.lenght;
          const addresses = [];
          const addresses2 = [];
        // console.log(data)
            if (data.houseID==1){
          for (let i = 1; i <= data.lenght; i++) {
            // const i2cKey = `I2C_address_${i}`;
            // const i2cValue = data[i2cKey];
            const addressKey = `i2ca${i}`;
            const addressValue = parseInt(data[addressKey]);
            addresses.push(addressValue);
          }
        //   console.log(addresses)
          setI2CAddresses(addresses);
          
        }
        else if (data.houseID==2){
            for (let i = 1; i <= data.lenght; i++) {
                // const i2cKey = `I2C_address_${i}`;
                // const i2cValue = data[i2cKey];
                const addressKey = `i2ca${i}`;
                const addressValue = parseInt(data[addressKey]);
                addresses2.push(addressValue);
              }
              setI2CAddresses2(addresses2);
        }
        });
      }, []);

      function sendData2(addressValue,getTimeI2C) {
        var i2cd;
        var nob;
        // getTimeI2C.preventDefault();
        let i2cInput = getTimeI2C;
        if (addressValue == 68) {
            i2cd = "44,6";
            nob = 6;
        }
        if (addressValue == 35) {
            i2cd = "0,0";
            nob = 2;
        }
        //let hexString = i2cInput.toString(16).padStart(4, '0');
        //let hexBytes = [hexString.substr(0, 2), hexString.substr(2, 2)];
        socket.emit("configI2C", '{"Client":{"houseID":1,"request":"WriteCMD","cmdAuto":"RequestI2C","i2ca":' + addressValue + ',"i2cd":"' + i2cd + '","NoB":' + nob + ',"Delay":20,"cmdID":' + addressValue + ',"time":' + i2cInput + '}}');
        // console.log('"i2ca":' + addressValue + ',"i2cd":"' + i2cd + '","NoB":' + nob + ',"cmdID":' + addressValue + ',"time":' + i2cInput + '}');
 
    }

    function sendData3(getTimeI2C2, addressValue) {
        let i2cd;
        var nob;
        // event.preventDefault();
        let i2cInput = getTimeI2C2;
        if (addressValue == 68) {
            i2cd = "44,6";
            nob = 6;
        }
        if (addressValue == 35) {
            i2cd = "0,0";
            nob = 2;
        }
        //let hexString = i2cInput.toString(16).padStart(4, '0');
        //let hexBytes = [hexString.substr(0, 2), hexString.substr(2, 2)];
        socket.emit("configI2C", '{"Client":{"houseID":2,"request":"WriteCMD","cmdAuto":"RequestI2C","i2ca":' + addressValue + ',"i2cd":"' + i2cd + '","NoB":' + nob + ',"Delay":20,"cmdID":' + addressValue + ',"time":' + i2cInput + '}}');
        // console.log('"i2ca":' + addressValue + ',"i2cd":"' + i2cd + '","NoB":' + nob + ',"cmdID":' + addressValue + ',"time":' + i2cInput + '}}');
 
    }

    const [valueADC,setValueADC]=useState('Number')
    const [valueNPK,setValueNPK]=useState('Number')
    const [valuePh,setValuePh]=useState('Number')
    const [valuehum485,setValuehum485]=useState('Number')

    socket.on('getValueTimer', (data) => {
        let jsonData = JSON.parse(data)
        console.log(jsonData)
        setValueADC(jsonData.adc / 1000);
        setValueNPK(jsonData.npk485 / 1000);
        setValuePh(jsonData.pH / 1000);
        setValuehum485(jsonData.hum / 1000);
    })

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
                NHÀ KÍNH 1
            </Text>
            <View>
                <TouchableOpacity onPress={()=>{
                    setShowElement(true)
                    socket.emit('scan_i2c', '{"Client":{"houseID":1,"request":"ScanI2C"}}')
                    // console.log(i2c)
                }}>
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
                <View style={{
                    width:170
                }}>
                <Text style={{
                    color:'black'
                }}>Nhập giá trị Read ADC</Text>
                <Text style={{
                    color:'black'
                }}>cho địa chỉ (giây)</Text>
                </View>
                <TextInput 
                style={text.TextInput}
                placeholder={`${valueADC}`}
                keyboardType={'numeric'}
                onChangeText={(text)=>{
                    setGettimeADC(text*1000)
                }}

                />
                <TouchableOpacity 
                onPress={()=>{
                    socket.emit("config", '{"Client":{"houseID":1,"request":"WriteCMD","cmdAuto":"ReadAdc","adc":"0,1,2,3","cmdID":20,"time":' + getTimeADC + '}}')
                }} 
                style={{
                    
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
           {showElement&&
           i2cAddresses.map((address, index) => (
                <View key={`View ${index}`} style={{flexDirection:'row'}}>
                    <View key={`View2 ${index}`} style={{width:170}}>
                    <Text key={`text ${index}`} 
                    style={{
                    color:'black'
                }}>
                    Nhập giá trị Read I2C
                    </Text>
                    <Text key={index} style={{
                    color:'black'
                }}>
                    tại địa chỉ {address}
                    </Text>
                    </View>
                    <TextInput
                    key={`inputText ${index}`}
                    style={text.TextInput}
                placeholder='Number'
                keyboardType={'numeric'}
                value={inputValue}
                onChangeText={(value)=>{
                    handleInputChange(index,value)
                }}
                />
                <TouchableOpacity 
                key={index}
                onPress={()=>{
                    sendData2(address,getTimeI2C[index])

                }
                }>
                    <Text style={text.TextSubmit}>SUBMIT</Text>
                </TouchableOpacity>

                </View>
            ))}       
        </View>
        {/*  */}
        {/*  */}
        {/* NNHÀ KÍNH 2 */}
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
                NHÀ KÍNH 2
            </Text>
            <View>
                <TouchableOpacity onPress={()=>{
                    socket.emit('scan_i2c', '{"Client":{"houseID":2,"request":"ScanI2C"}}')
                    setShowElement2(true)
                }}>
                    <Text style={{
                        color:'black'
                    }}>SCAN I2C</Text>
                </TouchableOpacity>
            </View>
           {showElement2&&i2cAddresses2.map((address, index) => (
                <View key={`View ${index}`} style={{flexDirection:'row'}}>
                    <View key={`View2 ${index}`} style={{width:170}}>
                    <Text key={`text ${index}`} style={{
                    color:'black'
                }}>Nhập giá trị Read I2C</Text>
                    <Text key={index} style={{
                    color:'black'
                }}>tại địa chỉ {address}</Text>
                    </View>
                    <TextInput
                    key={`inputText ${index}`}
                    style={text.TextInput}
                placeholder='Number'
                keyboardType={'numeric'}
                onChangeText={(value)=>{
                    handleInputChange2(index,value)
                    
                }}
                />
                <TouchableOpacity 
                onPress={() => sendData3(getTimeI2C2[index], address)}>
                    <Text style={text.TextSubmit}>SUBMIT</Text>
                </TouchableOpacity>

                </View>
            ))}

            {/*  */}
            {/*  */}
            {/* NPK */}
            <View style={{
                flexDirection:'row',
                marginTop:5,
                marginBottom:5
            }}>
                <View style={{width:170}}>
                <Text style={{
                    color:'black'
                }}>Cài đặt thơi gian cho</Text>
                <Text style={{
                    color:'black'
                }}> NPK (giây)</Text>
                </View>
                <TextInput 
                style={text.TextInput}
                placeholder={`${valueNPK}`}
                keyboardType={'numeric'}
                onChangeText={(text)=>{
                    setGettimeNPK(text*1000)
                }}
                />
                <TouchableOpacity 
                onPress={()=>{
                    socket.emit("configRS485", '{"Client":{"houseID":2,"request":"WriteCMD","cmdAuto":"RS485","RS485a":1,"RS485 Funtion code":3,"register start address":"0,30","register lenght":"0,3","NoB":11,"cmdID":41,"time":' + getTimeNPK + '}}');
                }}
                >
                    <Text style={text.TextSubmit}
                    >SUBMIT</Text>
                </TouchableOpacity>
            </View>
            {/*  */}
            {/*  */}
            {/* pH */}
            <View style={{
                flexDirection:'row',
                marginTop:5,
                marginBottom:5
            }}>
                <View style={{width:170}}>
                <Text style={{
                    color:'black'
                }}>Cài đặt thơi gian cho</Text>
                <Text style={{
                    color:'black'
                }}> pH (giây)</Text>
                </View>
                <TextInput 
                style={text.TextInput}
                placeholder={`${valuePh}`}
                keyboardType={'numeric'}
                onChangeText={(text)=>{
                    setGettimepH(text*1000)
                }}
                />
                <TouchableOpacity 
                onPress={()=>{
                    socket.emit("configRS485", '{"Client":{"houseID":2,"request":"WriteCMD","cmdAuto":"RS485","RS485a":1,"RS485 Funtion code":3,"register start address":"0,6","register lenght":"0,1","NoB":7,"cmdID":42,"time":' + getTimepH + '}}');
                }}
                >
                    <Text style={text.TextSubmit}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection:'row',
                marginTop:5,
                marginBottom:5
            }}>
                <View style={{width:170}}>
                <Text style={{
                    color:'black'
                }}>Cài đặt thơi gian cho</Text>
                <Text style={{
                    color:'black'
                }}> Độ Ẩm (giây)</Text>
                </View>
                <TextInput 
                style={text.TextInput}
                placeholder={`${valuehum485}`}
                keyboardType={'numeric'}
                onChangeText={(text)=>{
                    setGettimeRs485_moisture(text*1000)
                }}
                />
                <TouchableOpacity
                onPress={()=>{
                    socket.emit("configRS485", '{"Client":{"houseID":2,"request":"WriteCMD","cmdAuto":"RS485","RS485a":1,"RS485 Funtion code":3,"register start address":"0,18","register lenght":"0,1","NoB":7,"cmdID":43,"time":' + getTimeRs485_moisture + '}}');
                }}
                >
                    <Text style={text.TextSubmit}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </View>

    </ScrollView>
}
export default Setting