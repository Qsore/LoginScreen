import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Artista from '../screens/Artista';
import PlayList from '../screens/PlayList';

const Stack = createStackNavigator();

export default function NavigationStack(){
    return(
        <Stack.Navigator initialRouteName = "Home">
            <Stack.Screen name="Artista" component={Artista}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="PlayList" component={PlayList}/>
        </Stack.Navigator>
    )
}