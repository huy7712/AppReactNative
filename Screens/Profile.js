import { Nhakinh,Setting } from "../Screens";
import React, { useState,useEffect } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons } from "../constants";
import Icon from 'react-native-vector-icons/FontAwesome5'
import { SafeAreaView } from "react-native-safe-area-context";
import {TextInput, Text, View, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Alert, ScrollView, FlatList } from 'react-native'
import {
    user as UserRepository,
    population as PopulationRepository
} from '../repositories'
import ART from 'react-native'


// function Profiles(){
//     UserRepository.getUseeDetail()
//     return <SafeAreaView style={{
//         flex:1,
//         backgroundColor:'green'
//     }}>
//         <Text>This is profile</Text>
//     </SafeAreaView>
// }

export default Profiles

const { Path, Shape, Surface } = ART;
function Profiles({ route }){
    
    // UserRepository.getUseeDetail()
    // return<View style={{
    //     flex:1,
        
    // }}>
    //     <Text >This is profile</Text>
    // </View>
//     const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://raw.githubusercontent.com/huy7712/datajsonrandom/main/datatest%20(1).json')
//       .then(response => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error));
//   }, []);

  return (
    <View>
      <Text>API Data:</Text>
      
      {/* <FlatList
        data={data}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Text>{item.email}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      /> */}
      
    </View>
  );
};
