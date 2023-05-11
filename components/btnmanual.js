// import React, { useState } from 'react'
// import { Text, View, TouchableOpacity} from 'react-native'
// import { Picker } from '@react-native-picker/picker'
// import text from './text'
// import borders from './borders'
// import buttonOn from './buttonOn'


// function Btndevices(){
//     socket.on('display1', (data) => {
//         let jsonData = JSON.parse(data)
//         let value = parseInt(jsonData.data, 16).toString(2)
//         console.log(value)
//         let bitsArray = value.split("");
//         let bit1 = bitsArray[0];
//         let bit2 = bitsArray[1];
//         let bit3 = bitsArray[2];
//         let bit4 = bitsArray[3];
//         let bit5 = bitsArray[4];
//         let bit6 = bitsArray[5];
//         let bit7 = bitsArray[6];
//         let bit8 = bitsArray[7];
//         //console.log(bit8 + " " + bit7 + " " + bit6 + " " + bit5 + " " + bit4 + " " + bit3)
//         switch (bit8.toString()) {
//             case "1":
//                 setColorBtn5('white')
//                 break;
//             case "0":

//                 setColorBtn5('red')
//                 break;
//         }
//         switch (bit7.toString()) {
//             case "1":
//                 setColorBtn4('white')
//                 break;
//             case "0":
//                     setColorBtn4('red')
//                 break;
//         }
//         switch (bit6.toString()) {
//             case "1":
//                 setColorBtn3('white');
//                 break;
//             case "0":
//                 setColorBtn3('red')
//                 break;
//         }
//         switch (bit5.toString()) {
//             case "1":
//                 setColorBtn2('white')
//                 break;
//             case "0":
//                 setColorBtn2('red')
//                 break;
//         }
//         switch (bit4.toString()) {
//             case "1":
//                 setColorBtn1('white')
//                 break;
//             case "0":
//                 setColorBtn1('red')
//                 break;
//         }
//         switch (bit3.toString()) {
//             case "1":
//                 setColorBtn('white')
//                 break;
//             case "0":
//                 setColorBtn('red')
//                 break;
//         }
//     })


//     const [ColorBtn, setColorBtn] = useState('white');
//     const [ColorBtn1, setColorBtn1] = useState('white');
//     const [ColorBtn2, setColorBtn2] = useState('white');
//     const [ColorBtn3, setColorBtn3] = useState('white');
//     const [ColorBtn4, setColorBtn4] = useState('white');
//     const [ColorBtn5, setColorBtn5] = useState('white');
//     const handlePress = () => {
//         if (ColorBtn=='white'){
//             setColorBtn('red')
//             socket.emit('den6on', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"5","value":"0"}}');
//         }
//         if (ColorBtn=='red'){
//             setColorBtn('white')
//             socket.emit('den6off', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"5","value":"1"}}');
//         }
//     };
//     const handlePress1 = () => {
//         if (ColorBtn1=='white'){
//             setColorBtn1('red')
//             socket.emit('den5on', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"4","value":"0"}}');
//         }
//         if (ColorBtn1=='red'){
//             setColorBtn1('white')
// socket.emit('den5off', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"4","value":"1"}}');
//         }
//     };
//     const handlePress2 = () => {
//         if (ColorBtn2=='white'){
//             setColorBtn2('red')
//             socket.emit('den4on', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"3","value":"0"}}');
//         }
//         if (ColorBtn2=='red'){
//             setColorBtn2('white')
//             socket.emit('den4off', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"3","value":"1"}}');
//         }
//     };
//     const handlePress3 = () => {
//         if (ColorBtn3=='white'){
//             setColorBtn3('red')
//             socket.emit('den3on', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"2","value":"0"}}');
//         }
//         if (ColorBtn3=='red'){
//             setColorBtn3('white')
//             socket.emit('den3off', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"2","value":"1"}}');
//         }
//     };
//     const handlePress4 = () => {
//         if (ColorBtn4=='white'){
//             setColorBtn4('red')
//             socket.emit('den2on', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"1","value":"0"}}')
//         }
//         if (ColorBtn4=='red'){
//             setColorBtn4('white')
//             socket.emit('den2off', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"1","value":"1"}}');
//         }
//     };
//     const handlePress5 = () => {
//         if (ColorBtn5=='white'){
//             setColorBtn5('red')
//             socket.emit('den1on', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"0","value":"0"}}');
//         }
//         else{
//             setColorBtn5('white')
//             socket.emit('den1off', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"2","DO":"0","value":"1"}}');
//         }
//     };
//     return <View>
//     <Text style={text.h3}>
//         TRANG THAI 
//     </Text>
//     {/* Den Quat */}
//     <View style={{
//         flexDirection:'row',
        
//     }}>
//         {/* DEN */}
//         <View style={[{flex:25},borders.borderElementbtn]}>
//             <Text style={text.BOM}>DEN</Text>
//             <TouchableOpacity style={[buttonOn.btn_on,{backgroundColor:ColorBtn5}]}
//         onPress={handlePress5} >
//                 <Text style={text.Textbtn}>ON</Text>
//             </TouchableOpacity>
//         </View>
//         {/* QUAT */}
//         <View style={[{flex:25},borders.borderElementbtn]}>
//             <Text style={text.BOM}>QUAT</Text>
//             <TouchableOpacity style={[buttonOn.btn_on,{backgroundColor:ColorBtn4}]}
//         onPress={handlePress4} >
//                 <Text style={text.Textbtn}>ON</Text>
//             </TouchableOpacity>
//         </View>
//     </View>
    
//     {/* BOM */}
//     <View style={{
//         flexDirection:'row',
//         marginTop:20
//     }}>
//         {/* BOM1 */}
//         <View style={[{flex:25},borders.borderElementbtn]}>
//         <Text style={text.BOM}>BOM1</Text>
//         <TouchableOpacity style={[buttonOn.btn_on,{backgroundColor:ColorBtn3}]}
//         onPress={handlePress3}>
//                 <Text style={text.Textbtn}>ON</Text>
//             </TouchableOpacity>
//         </View>
//         {/* BOM2 */}
//         <View style={[{flex:25},borders.borderElementbtn]}>
//         <Text style={text.BOM}>BOM2</Text>
//         <TouchableOpacity style={[buttonOn.btn_on,{backgroundColor:ColorBtn2}]}
//         onPress={handlePress2}>
//                 <Text style={text.Textbtn}>ON</Text>
//             </TouchableOpacity>
//         </View>
//         {/* BOM3 */}
//         <View style={[{flex:25},borders.borderElementbtn]}>
//         <Text style={text.BOM}>BOM3</Text>
//         <TouchableOpacity style={[buttonOn.btn_on,{backgroundColor:ColorBtn1}]}
//         onPress={handlePress1}
//         >
//                 <Text style={text.Textbtn}>ON</Text>
//             </TouchableOpacity>
//         </View>
//         {/* BOM4 */}
//         <View style={[{flex:25},borders.borderElementbtn]}>
//         <Text style={text.BOM}>BOM4</Text>
//         <TouchableOpacity 
//         style={[
//             buttonOn.btn_on,
//             {backgroundColor:ColorBtn}]} 
//         onPress={handlePress}
//         >
//                 <Text style={text.Textbtn}>ON</Text>
//             </TouchableOpacity>
//         </View>
        
//     </View>
    
// </View>
// }

// export default Btndevices