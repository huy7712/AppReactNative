/**
 * @format
 */

import {AppRegistry, Dimensions} from 'react-native';

import { Welcome,Login,Register,FootList,App,Nhakinh,
    AppSocket,Setting,Profiles,HomeScreen,TestNhaKinh,
    ChartScreens,ModeScreen,SettingScreen,Nhakinh2 } from './Screens/index';
import React from 'react';
import {name as appName} from './app.json';
import AppNav from './navigation/App';
import io from "socket.io-client"
import UITabs from './navigation/UITab';
import { UpdateUser } from './utilies/UpdateLocalData';
import WeatherScreen from './utilies/UpdateLocalData';
import Geolocation from 'react-native-geolocation-service';
import Chartnhakinh2 from './Screens/chartmodule/chartnhakinh2';

AppRegistry.registerComponent(appName, () => ()=> <AppNav/>)

this.socket = io ("https://raspi.iotgreenhouse.tech/", {jsonp:false}) 