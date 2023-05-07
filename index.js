/**
 * @format
 */

import {AppRegistry, Dimensions} from 'react-native';

import { Welcome,Login,Register,FootList,App,Nhakinh,AppSocket,Setting,Profiles } from './Screens/index';
import React from 'react';
import {name as appName} from './app.json';
import AppNav from './navigation/App';
import io from "socket.io-client"
import UITabs from './navigation/UITab';

AppRegistry.registerComponent(appName, () => ()=> <Nhakinh/>)

this.socket = io ("http://192.168.137.100:1234", {jsonp:false}) 