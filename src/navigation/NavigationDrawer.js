import {View,Text} from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react"
import HomeScreen from '../screens/HomeScreen'
import HomeScreen from '../screens/Artista'
import HomeScreen from '../screens/PlayList'
const Drawer = createDrawerNavigator();
export default function NavigationDrawer(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Artista" component={Artista}/>
            <Drawer.Screen name="PlayList" component={PlayList}/>
        </Drawer.Navigator>
    )
}