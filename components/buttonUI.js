import React, {Component} from "react"
import { TouchableOpacity, Text } from "react-native"
import FA5Style from  '../node_modules/react-native-vector-icons/FontAwesome5' 
function BTNUI(props) {
    const {title,Iselected,onPress}=props
    return <TouchableOpacity style={{
        borderColor: 'white',
        borderWidth: 2,
        height: 45,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Iselected==true?'white':null
    }}
        onPress={
            onPress
        }
        >
        
        {Iselected == true &&
        <FA5Style name={"check-circle"} size={25} style={{
        color: 'green',
        position: 'absolute',
        left: 10,
         }} />}
        <Text style={{
            color: Iselected==true?'#FF33FF':'white',
        }}>
            {title}
        </Text>
    </TouchableOpacity>
}
export default BTNUI;