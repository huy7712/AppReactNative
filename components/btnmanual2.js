import React, { useState } from 'react'
import { Text, View, TouchableOpacity} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import text from './text'
import borders from './borders'
import buttonOn from './buttonOn'


function Btndevices2(){
    socket.on('display2', (data) => {
        let jsonData = JSON.parse(data)
        let value = parseInt(jsonData.data, 16).toString(2)
        console.log(value)
        let bitsArray = value.split("");
        let bit1 = bitsArray[0];
        let bit2 = bitsArray[1];
        let bit3 = bitsArray[2];
        let bit4 = bitsArray[3];
        let bit5 = bitsArray[4];
        let bit6 = bitsArray[5];
        let bit7 = bitsArray[6];
        let bit8 = bitsArray[7];
        //console.log(bit8 + " " + bit7 + " " + bit6 + " " + bit5 + " " + bit4 + " " + bit3)
        switch (bit8.toString()) {
            case "1":
                setColorBtn7('white')
                break;
            case "0":

                setColorBtn7('red')
                break;
        }
        switch (bit7.toString()) {
            case "1":
                setColorBtn8('white')
                break;
            case "0":
                    setColorBtn8('red')
                break;
        }
        switch (bit6.toString()) {
            case "1":
                setColorBtn9('white');
                break;
            case "0":
                setColorBtn9('red')
                break;
        }
        switch (bit5.toString()) {
            case "1":
                setColorBtn10('white')
                break;
            case "0":
                setColorBtn10('red')
                break;
        }
        switch (bit4.toString()) {
            case "1":
                setColorBtn11('white')
                break;
            case "0":
                setColorBtn11('red')
                break;
        }
        switch (bit3.toString()) {
            case "1":
                setColorBtn12('white')
                break;
            case "0":
                setColorBtn12('red')
                break;
        }
    })


    const [ColorBtn12, setColorBtn12] = useState('white');
    const [ColorBtn11, setColorBtn11] = useState('white');
    const [ColorBtn10, setColorBtn10] = useState('white');
    const [ColorBtn9, setColorBtn9] = useState('white');
    const [ColorBtn8, setColorBtn8] = useState('white');
    const [ColorBtn7, setColorBtn7] = useState('white');
    const handlePress = () => {
        if (ColorBtn12=='white'){
            setColorBtn12('red')
           socket.emit('den12on', '{"server":{"houseID":2,"request":"WriteDigital","lenght":"2","DO":"5","value":"0"}}');
        }
        if (ColorBtn12=='red'){
            setColorBtn12('white')
           socket.emit('den12off', '{"server":{"houseID":2,"request":"WriteDigital","lenght":"2","DO":"5","value":"1"}}');
        }
       
    };
    const handlePress1 = () => {
        if (ColorBtn11=='white'){
            setColorBtn11('red')
            ssocket.emit('den11on', '{"server":{"houseID":2,"request":"WriteDigital","lenght":"2","DO":"4","value":"0"}}');
        }
        if (ColorBtn11=='red'){
            setColorBtn11('white')
            ssocket.emit('den11off', '{"server":{"houseID":2,"request":"WriteDigital","lenght":"2","DO":"4","value":"1"}}');
        }
    };
    const handlePress2 = () => {
        if (ColorBtn10=='white'){
            setColorBtn10('red')
            socket.emit('den10on', '{"server":{"houseID":2,"request":"WriteDigital","lenght":"2","DO":"3","value":"0"}}');
        }
        if (ColorBtn10=='red'){
            setColorBtn10('white')
            socket.emit('den10off', '{"server":{"houseID":2,"request":"WriteDigital","lenght":"2","DO":"3","value":"1"}}');
        }
    };
    const handlePress3 = () => {
        if (ColorBtn9=='white'){
            setColorBtn9('red')
            socket.emit('den9on', '{"server":{"houseID":2,"request":"WriteDigital","lenght":"2","DO":"2","value":"0"}}');
        }
        if (ColorBtn9=='red'){
            setColorBtn9('white')
            socket.emit('den9off', '{"server":{"houseID":2,"request":"WriteDigital","lenght":"2","DO":"2","value":"1"}}');
        }
    };
    const handlePress4 = () => {
        if (ColorBtn8=='white'){
            setColorBtn8('red')
            socket.emit('den8on', '{"server":{"houseID":2,"request":"WriteDigital","lenght":"2","DO":"1","value":"0"}}');
            
        }
        if (ColorBtn8=='red'){
            setColorBtn8('white')
            socket.emit('den8off', '{"server":{"houseID":2,"request":"WriteDigital","lenght":"2","DO":"1","value":"1"}}');
        }
    };
    const handlePress5 = () => {
        if (ColorBtn7=='white'){
            setColorBtn7('red')
            socket.emit('den7on', '{"server":{"houseID":2,"request":"WriteDigital","lenght":"2","DO":"0","value":"0"}}');
            
        }
        else{
            setColorBtn7('white')
            socket.emit('den7off', '{"server":{"houseID":2,"request":"WriteDigital","lenght":"2","DO":"0","value":"1"}}');
        }
    };
    return <View>
    <Text style={text.h3}>
        TRANG THAI 
    </Text>
    {/* Den Quat */}
    <View style={{
        flexDirection:'row',
        
    }}>
        {/* DEN */}
        <View style={[{flex:25},borders.borderElementbtn]}>
            <Text style={text.BOM}>DEN</Text>
            <TouchableOpacity style={[buttonOn.btn_on,{backgroundColor:ColorBtn7}]}
        onPress={handlePress5} >
                <Text style={text.Textbtn}>ON</Text>
            </TouchableOpacity>
        </View>
        {/* QUAT */}
        <View style={[{flex:25},borders.borderElementbtn]}>
            <Text style={text.BOM}>QUAT</Text>
            <TouchableOpacity style={[buttonOn.btn_on,{backgroundColor:ColorBtn8}]}
        onPress={handlePress4} >
                <Text style={text.Textbtn}>ON</Text>
            </TouchableOpacity>
        </View>
    </View>
    
    {/* BOM */}
    <View style={{
        flexDirection:'row',
        marginTop:20
    }}>
        {/* BOM1 */}
        <View style={[{flex:25},borders.borderElementbtn]}>
        <Text style={text.BOM}>BOM1</Text>
        <TouchableOpacity style={[buttonOn.btn_on,{backgroundColor:ColorBtn9}]}
        onPress={handlePress3}>
                <Text style={text.Textbtn}>ON</Text>
            </TouchableOpacity>
        </View>
        {/* BOM2 */}
        <View style={[{flex:25},borders.borderElementbtn]}>
        <Text style={text.BOM}>BOM2</Text>
        <TouchableOpacity style={[buttonOn.btn_on,{backgroundColor:ColorBtn10}]}
        onPress={handlePress2}>
                <Text style={text.Textbtn}>ON</Text>
            </TouchableOpacity>
        </View>
        {/* BOM3 */}
        <View style={[{flex:25},borders.borderElementbtn]}>
        <Text style={text.BOM}>BOM3</Text>
        <TouchableOpacity style={[buttonOn.btn_on,{backgroundColor:ColorBtn11}]}
        onPress={handlePress1}
        >
                <Text style={text.Textbtn}>ON</Text>
            </TouchableOpacity>
        </View>
        {/* BOM4 */}
        <View style={[{flex:25},borders.borderElementbtn]}>
        <Text style={text.BOM}>BOM4</Text>
        <TouchableOpacity 
        style={[
            buttonOn.btn_on,
            {backgroundColor:ColorBtn12}]} 
        onPress={handlePress}
        >
                <Text style={text.Textbtn}>ON</Text>
            </TouchableOpacity>
        </View>
        
    </View>
    
</View>
}

export default Btndevices2