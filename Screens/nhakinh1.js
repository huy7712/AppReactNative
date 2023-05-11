// import React, { useState,useEffect } from 'react'
// import {
//     TextInput, Text, View, ScrollView
// } from '../node_modules/react-native'
// import { Picker } from '@react-native-picker/picker'
// import text from '../components/text'
// import Chart from './chartmodul'
// import Btndevices from '../components/btnmanual'
// import Btndisdevices from '../components/btnauto'
// import borders from '../components/borders'
// import moment from 'moment'
// export default Nhakinh


// function Nhakinh(props) {
//     const [selectedValue, setSelectedValue] = useState('1');
//     const [selectedValue2, setSelectedValue2] = useState('manual');
//     const [humidity,setHumidity]=useState('')
//     // const [data, setData] = useState([]);
//     // this.socket = io ("http://192.168.1.11:3000", {jsonp:false})  

//     socket.on('S-ReadADC', (value) => {
        
//             setHumidity (value.toFixed(0) + "%")  
//     })

//     const [valueChart, setValueChart] = useState([0,0,0,0,0,0]);
//     const [timeChart, setTimeChart] = useState([0,0,0,0,0,0]);

// // useEffect(() => {
// //   function fetchData(){
// //     fetch('http://192.168.137.100:1234/api/adc1Start')
// //     .then(response => response.json())
// //     .then(json => {
// //       const data = json; // Lưu trữ dữ liệu vào biến trung gian
// //       const updatedValueChart = [];
// //       const updatedTimeChart = [];
// //       data.forEach((item) => {
// //         let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
// //         updatedValueChart.unshift(item.value);
// //         updatedTimeChart.unshift(localTime);
// //       });
// //       setValueChart(updatedValueChart);
// //       setTimeChart(updatedTimeChart);
// //       console.log(timeChart)
// //       console.log(valueChart)
// //       // Hiển thị updatedValueChart trong cảnh báo
// //     })
// //     .catch(error => console.error(error));
// // }
// //     setInterval(fetchData,5000)
// // }
// // , []);





//     return <ScrollView >

//         <Text
//             style={text.h1}

//         >Nha Kinh 1</Text>
//         <Text style={text.h3}>
//             YEU TO MOI TRUONG
//         </Text>
//         <View style={{
//             flexDirection: 'row',
//             paddingTop: 20
//         }}>
//             <View style={borders.borderElementText}>
//                 <Text style={[text.h5]}>Nhiet Do</Text>
//                 <Text style={text.h6}>dalk</Text>
//             </View>
//             <View style={borders.borderElementText}>
//                 <Text style={text.h5}>Ánh Sáng</Text>
//                 <Text style={text.h6}>dalk</Text>
//             </View>
//             <View style={borders.borderElementText}>
//                 <Text style={text.h5}>Do Am</Text>
//                 <Text style={text.h6}>dalk</Text>
//             </View>
//         </View>
//         <Text style={text.h3}>
//             YEU TO TRONG DAT
//         </Text>

//         <View style={{
//             flexDirection: 'row',
//             paddingTop: 20
//         }}>
//             <View style={borders.borderElementText}>
//                 <Text style={text.h5}>PH</Text>
//                 <Text style={text.h6}>dalk</Text>
//             </View>
//             <View style={borders.borderElementText}>
//                 <Text style={text.h5}>Do Am</Text>
//                 <Text style={text.h6}>{humidity}</Text>
//             </View>
//         </View>
//         <View style={{
//             flexDirection: 'row',
//             paddingTop: 10
//         }}>
//             <View style={borders.borderElementText}>
//                 <Text style={text.h5}>N</Text>
//                 <Text style={text.h6}>dalk</Text>
//             </View>
//             <View style={borders.borderElementText}>
//                 <Text style={text.h5}>P</Text>
//                 <Text style={text.h6}>dalk</Text>
//             </View>
//             <View style={borders.borderElementText}>
//                 <Text style={text.h5}>K</Text>
//                 <Text style={text.h6}>dalk</Text>
//             </View>
//         </View>

//         <View>
//             <View style={{
//                 borderWidth: 2,
//                 width: 200,
//                 alignSelf: 'center',
//                 marginTop: 20
//             }}>
//                 <Picker
//                     selectedValue={selectedValue}
//                     onValueChange={(itemValue, itemIndex) =>
//                         setSelectedValue(itemValue)
//                     }
//                     style={{
//                         width: 200,
//                         alignSelf: 'center',

//                     }}
//                 >
//                     <Picker.Item label="5 Second" value="1" />
//                     <Picker.Item label="10 Second" value="2" />
//                 </Picker>
//             </View>
//             <View style={{
//                 height: 250
//             }}>
//                 {/* Bieu Do */}
//                 <Chart
//                     datas={valueChart}
//                     labels={timeChart}
//                     coment='xin chao' />
//             </View>
//         </View>
//         {/* chon che do */}
//         <View>
//             <Text style={text.h3}>
//                 CHON CHE DO
//             </Text>

//             <View style={{
//                 borderWidth: 2,
//                 width: 200,
//                 alignSelf: 'center',
//                 marginTop: 20
//             }}>
//                 <Picker
//                     selectedValue={selectedValue2}
//                     onValueChange={(itemValue, itemIndex) =>
//                         setSelectedValue2(itemValue)
//                     }
//                     style={{
//                         width: 200,
//                         alignSelf: 'center',
//                     }}
//                 >
//                     <Picker.Item label="MANUAL" value="manual" />
//                     <Picker.Item label="AUTO" value="auto" />

//                 </Picker>
//             </View>
//         </View>
//         {/* trang thai */}
//         {selectedValue2 === 'manual' ? <Btndevices /> : <Btndisdevices />}
//     </ScrollView>
// }