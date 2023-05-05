import axios from "axios"
import fetch from 'cross-fetch';

const getUseeDetail = ()=>{
   try {
    debugger
    // let response=axios.get('http://192.168.105.47:123/api/home')
    // alert(response[1].link);   
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error(error));
}
catch(error){
    
    throw error
   }}

// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));}

export default {
    getUseeDetail,
    
}