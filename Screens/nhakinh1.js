import React, { useState } from 'react'
import {
    TextInput, Text, View, ScrollView
} from '../node_modules/react-native'
import { Picker } from '@react-native-picker/picker'
import text from '../components/text'
import Chart from './chartmodul'
import Btndevices from '../components/btnmanual'
import Btndisdevices from '../components/btnauto'
import borders from '../components/borders'
export default Nhakinh
import io from "socket.io-client"


function Nhakinh(props) {
    const [selectedValue, setSelectedValue] = useState('1');
    const [selectedValue2, setSelectedValue2] = useState('manual');
    // this.socket = io ("http://192.168.1.11:3000", {jsonp:false})  

    return <ScrollView >

        <Text
            style={text.h1}

        >Nha Kinh 1</Text>
        <Text style={text.h3}>
            YEU TO MOI TRUONG
        </Text>
        <View style={{
            flexDirection: 'row',
            paddingTop: 20
        }}>
            <View style={borders.borderElementText}>
                <Text style={[text.h5]}>Nhiet Do</Text>
                <Text style={text.h6}>dalk</Text>
            </View>
            <View style={borders.borderElementText}>
                <Text style={text.h5}>Ánh Sáng</Text>
                <Text style={text.h6}>dalk</Text>
            </View>
            <View style={borders.borderElementText}>
                <Text style={text.h5}>Do Am</Text>
                <Text style={text.h6}>dalk</Text>
            </View>
        </View>
        <Text style={text.h3}>
            YEU TO TRONG DAT
        </Text>

        <View style={{
            flexDirection: 'row',
            paddingTop: 20
        }}>
            <View style={borders.borderElementText}>
                <Text style={text.h5}>PH</Text>
                <Text style={text.h6}>dalk</Text>
            </View>
            <View style={borders.borderElementText}>
                <Text style={text.h5}>NPK</Text>
                <Text style={text.h6}>dalk</Text>
            </View>
            <View style={borders.borderElementText}>
                <Text style={text.h5}>Do Am</Text>
                <Text style={text.h6}>dalk</Text>
            </View>
        </View>

        <View>
            <View style={{
                borderWidth: 2,
                width: 200,
                alignSelf: 'center',
                marginTop: 20
            }}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(itemValue)
                    }
                    style={{
                        width: 200,
                        alignSelf: 'center',

                    }}
                >
                    <Picker.Item label="5 Second" value="1" />
                    <Picker.Item label="10 Second" value="2" />
                </Picker>
            </View>
            <View style={{
                height: 250
            }}>
                {/* Bieu Do */}
                <Chart
                    datas={[20, 45, 28, 80, 99, 43]}
                    labels={['January', 'February', 'March', 'April', 'May', 'June']}
                    coment='xin chao' />
            </View>
        </View>
        {/* chon che do */}
        <View>
            <Text style={text.h3}>
                CHON CHE DO
            </Text>

            <View style={{
                borderWidth: 2,
                width: 200,
                alignSelf: 'center',
                marginTop: 20
            }}>
                <Picker
                    selectedValue={selectedValue2}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue2(itemValue)
                    }
                    style={{
                        width: 200,
                        alignSelf: 'center',
                    }}
                >
                    <Picker.Item label="MANUAL" value="manual" />
                    <Picker.Item label="AUTO" value="auto" />

                </Picker>
            </View>
        </View>
        {/* trang thai */}
        {selectedValue2 === 'manual' ? <Btndevices /> : <Btndisdevices />}
    </ScrollView>
}