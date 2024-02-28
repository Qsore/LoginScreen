import {View,Text} from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import HomeScreen from '../screens/Artista'
import HomeScreen from '../screens/PlayList'
const Tab = createBottomTabNavigator();
export default function NavigationTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Artista" component={Artista}/>
            <Tab.Screen name="PlayList" component={PlayList}/>
        </Tab.Navigator>
    )
}