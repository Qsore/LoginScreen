import { View, Text, StyleSheet,Button } from 'react-native'
import React from 'react'
import Formulario from "../components/Formulario";

export default function Artista(props) {
    const {navigation} = props;
    const goToHome = () => {
        navigation.navigate("Home");
    }
    return(
        <View>
            <Formulario/>
            
            <Button  onPress={goToHome} title="Ir a Home"/>

        </View>
    )
}

