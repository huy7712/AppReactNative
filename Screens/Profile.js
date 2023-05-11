import React, { useContext } from 'react';
import { DataContext } from './getdata';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { images } from '../constants';

const Profile = () => {
  const { profileData } = useContext(DataContext);
  // Sử dụng dữ liệu profileData trong màn hình profiles
  // { username: 'JohnDoe', email: 'johndoe@example.com' }
  return <View style={{
    flex: 1
  }}>
    {/* <Text>User Name: {profileData.name}</Text>
      <Text>Name: {profileData.name}</Text>
      <Text>Email: {profileData.email}</Text> */}
    <ImageBackground source={images.ProfileBackground}
      resizeMode='cover'
      style={{
        flex: 1,
      }}>
      <View style={{
        alignSelf: 'center',
        borderWidth: 2,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: 'white'
      }}>
        <Text style={{
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold'
        }}>THONG TIN DANG NHAP</Text>
      </View>
      <View style={{
        backgroundColor: 'red',
        width: 150,
        height: 150,
        borderRadius: 150,
        alignSelf: 'center',
        top: 100,
        zIndex: 1
      }}>
      </View>
      <View style={{
        backgroundColor: 'white',
        width: 350,
        height: 400,
        position: 'absolute',
        alignSelf: 'center',
        top: 235,
        borderRadius: 50
      }}>
        <View style={{
          height: 90,
        }} />
        <View style={{
          height: 40,
          justifyContent: 'center',
          marginHorizontal: 20
        }}>
          <Text style={{
            color: 'black'
          }}>Name: {profileData.name}</Text>
        </View>
        <View style={{
          backgroundColor:'gray',
          width:2,
        }}/>
        <View style={{
          height: 40,
          justifyContent: 'center',
          marginHorizontal: 20
        }}>
          <Text style={{
            color: 'black'
          }}>User Name: {profileData.name}</Text>
        </View>
        <View style={{
          height: 40,
          justifyContent: 'center',
          marginHorizontal: 20
        }}>
          <Text style={{
            color: 'black'
          }}>Email: {profileData.email}</Text>
        </View>
        <View style={{flex:1}}/>
        <TouchableOpacity style={{
          backgroundColor:'yellow',
          paddingHorizontal:20,
          borderWidth:2,
          alignSelf:'center',
          borderRadius:20,
          marginBottom:20
        }}>
          <Text style={{
            color:'black',
            fontSize:20,
            fontWeight:'bold'
          }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>



  </View>
  // ...
};

export default Profile
