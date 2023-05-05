import React, { useState } from 'react'
import { TextInput, Text, View, Image, ImageBackground,} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import text from './text'
import borders from './borders'
import buttonOn from './buttonOn'

function Btndisdevices(){
    const [ColorBtn, setColorBtn] = useState('white');
    const [ColorBtn1, setColorBtn1] = useState('white');
    const [ColorBtn2, setColorBtn2] = useState('white');
    const [ColorBtn3, setColorBtn3] = useState('white');
    const [ColorBtn4, setColorBtn4] = useState('white');
    const [ColorBtn5, setColorBtn5] = useState('white');
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
            <View style={[buttonOn.btn_on,{backgroundColor:ColorBtn5}]}
        >
                <Text style={text.Textbtn}>ON</Text>
            </View>
        </View>
        {/* QUAT */}
        <View style={[{flex:25},borders.borderElementbtn]}>
            <Text style={text.BOM}>QUAT</Text>
            <View style={[buttonOn.btn_on,{backgroundColor:ColorBtn4}]}
        >
                <Text style={text.Textbtn}>ON</Text>
            </View>
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
        <View style={[buttonOn.btn_on,{backgroundColor:ColorBtn3}]}
        >
                <Text style={text.Textbtn}>ON</Text>
            </View>
        </View>
        {/* BOM2 */}
        <View style={[{flex:25},borders.borderElementbtn]}>
        <Text style={text.BOM}>BOM2</Text>
        <View style={[buttonOn.btn_on,{backgroundColor:ColorBtn2}]}
        >
                <Text style={text.Textbtn}>ON</Text>
            </View>
        </View>
        {/* BOM3 */}
        <View style={[{flex:25},borders.borderElementbtn]}>
        <Text style={text.BOM}>BOM3</Text>
        <View style={[buttonOn.btn_on,{backgroundColor:ColorBtn1}]}
        
        >
                <Text style={text.Textbtn}>ON</Text>
            </View>
        </View>
        {/* BOM4 */}
        <View style={[{flex:25},borders.borderElementbtn]}>
        <Text style={text.BOM}>BOM4</Text>
        <View 
        style={[
            buttonOn.btn_on,
            {backgroundColor:ColorBtn}]} 
                >
                <Text style={text.Textbtn}>ON</Text>
            </View>
        </View>
        
    </View>
    
</View>
}

export default Btndisdevices