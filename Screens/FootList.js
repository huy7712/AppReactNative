// import React, { useState } from 'react'
// import { images, icons } from '../constants/index'
// import { TextInput, Text, View, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Alert, ScrollView, FlatList } from '../node_modules/react-native'
// import { BTNUI } from '../components/index'
// import Icon from 'react-native-vector-icons/FontAwesome5'
// import { isValidatePass,isValidating } from '../utilies/validating'
// import FootItem from './FootItem/footItem'
// export default FootList


// function FootList(props){

//     const [searchText,setSearchText]=useState('0')
//     const [food,setFood]=useState([
//         {
//             name:'Bánh pía',
//             image:require('../image/hình/banh_pia.jpg'),
//             status:'Bánh pía 500g khoảng 50.000 đồng',
//             place:'Đại lý bánh pía Tân Huê Viên: 189 Lê Quang Sung, Phường 6, Quận 6, Thành phố Hồ Chí Minh.',
//             socialNetwords:
//                 {
//                     facebook:'https://www.facebook.com/',
//                     twitter:'1',
//                     instagram:'1',
//                 }
            
//         },
//         {
//             name:'Bánh dừa nướng',
//             image:require('../image/hình/banh-dua-nuong.jpg'),
//             status:'Khoảng 40.000 đồng/ gói 250g.',
//             place:'Bánh Dừa Nướng Viconut: 67 Trương Định, Phường Mân Thái, Quận Sơn Trà, Đà Nẵng.',
//             socialNetwords:
//                 {
                    
//                     twitter:'2',
//                     instagram:'2'
//                 }
            
//         },
//         {
//             name:'Bánh tét lá cẩm',
//             image:require('../image/hình/banh-tet-la-cam.jpg'),
//             status:' khoảng 80.000-90.000 đồng/ cây.',
//             place:'Đặc sản miền Tây: 195 Đường Ngô Tất Tố, Phường 22, Quận Bình Thạnh, Thành phố Hồ Chí Minh.',
//             socialNetwords:
//                 {
//                     facebook:'',
                    
//                     instagram:''
//                 }
            
//         },
//         {
//             name:'Trà Phúc Long',
//             image:require('../image/hình/tra-phuc-long.jpg'),
//             status:'Khoảng 25.000-100.000 đồng/ hộp. ',
//             place:'Các địa chỉ Phúc Long Coffee & Tea tại Thành phố Hồ Chí Minh.',
//             socialNetwords:
//                 {
//                     facebook:'',
//                     twitter:'',
//                     instagram:''
//                 }
            
//         },
//         {
//             name:'Hạt điều tươi rang muối',
//             image:require('../image/hình/hat-dieu.jpg'),
//             status:'khoảng 135.000-180.000 đồng/kg. ',
//             place:'Kimmy Farm: 20A Lê Văn Khương, Tân Thới An, Quận 12, Thành phố Hồ Chí Minh',
//             socialNetwords:
//                 {
//                     facebook: '',
//                     twitter: '',
                    
//                 }
            
//         },
       
//     ])

//     const [menu,setMenu]=useState([
//         {
//             name:'BBQ',
//             image:icons.BBQ
//         },
//         {
//             name:'BreakFast',
//             image:icons.BreakFast
//         },
//         {
//             name:'COFFE',
//             image:icons.COFFE
//         },
//         {
//             name:'Noodle',
//             image:icons.noodle
//         },
//         {
//             name:'HotDog',
//             image:icons.HotDog
//         },
//         {
//             name:'Dinner',
//             image:icons.Dinner
//         },
//         {
//             name:'Beverage',
//             image:icons.Beverage
//         },
//         {
//             name:'FastFood',
//             image:icons.FastFood 
//         },
//         {
//             name:'Donut',
//             image:icons.Donut
//         },
         
//     ])
//     return <View style={{
//         flex:1,
//         backgroundColor:'white',
        
//     }}> 
//     <View style={{height:60,
//     marginHorizontal:10,
//     paddingTop:10,
//     flexDirection:'row'
//     }}>
//         <Image source={icons.Kinhlup} style={{
//             width:20,
//             height:20,
//             position:'absolute',
//             marginTop:20,
//             marginLeft:10,
            
//         }}/>
//         <TextInput 
//         autoCorrect={false}
//         onChangeText={(text)=>setSearchText(text)}
//         style={{backgroundColor:'gray',
//     height:40, flex:1, marginHorizontal:5,
//     borderRadius:5, opacity:0.8,
//     paddingStart:30,
//     }}/>
//     <Image source={icons.Bars} style={{
//         width:40,
//         height:40
//     }}/>
        


//     </View>
    
//     <View style={{
//         height:100
//     }}>
//         <View style={{height:1, backgroundColor:'gray'}}/>
//         <FlatList 
//         style={{
//             flex:1,
            
//         }}
//         data={menu}
//         keyExtractor={item => item.name}
//         horizontal
//         renderItem={({item})=>{
//             return <View style={{
//                 alignSelf:'center',
//                 padding:10,
//                 alignItems:'center',
//                 backgroundColor:'red'
//             }}>
//                 <TouchableOpacity onPress={()=>{alert(`click ${item.name}`)}}>
//                 <Image 
//                 source={item.image} 
//                 style={{
//                     width:50,
//                     height:50,
//                     borderRadius:50,
//                     backgroundColor:'white',
//                     borderWidth:1,
//                     borderColor:'black'
//                 }}/>
//                 <Text style={{
//                     color:'white'
//                 }}>
//                     {item.name}
//                 </Text></TouchableOpacity>
//             </View>
//         }}
//         >

//         </FlatList>
        
//         <View style={{height:1, backgroundColor:'gray'}}/>

//     </View>
    
//     {/* <ScrollView>
//         {food.map(eachFood=><FootItem 
//         food={eachFood} 
//         key={eachFood.name}
//         />)}
//         </ScrollView> */}
//         <FlatList
//             data={food.filter(eachFood=>eachFood.name.toLowerCase()
//                     .includes(searchText.toLowerCase()))}
//             renderItem={({item})=><FootItem
//             food={item} 
//             key={item.name}/>}
//             keyExtractor={eachFood=>eachFood.name}
//             />
//     </View>

// }