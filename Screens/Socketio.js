import { Text,View,TouchableOpacity } from "react-native"
import React,{Component} from "react"
import io from "socket.io-client"

export default class AppSocket extends Component{
  constructor(props){
    super(props);
    // this.socket = io ("http://192.168.105.27:3000", {jsonp:false})
  }
render(){
  
  return <View>
    <TouchableOpacity onPress={()=>{this.socket.emit('den2on', '{"server":{"houseID":1,"request":"WriteDigital","lenght":"1","DO1":"0"}}');}}>
            <Text style={{color:'red'}}>nut nhan</Text>
    </TouchableOpacity>
  </View>
}


}