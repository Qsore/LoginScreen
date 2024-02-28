import { View, Text,Button,StyleSheet } from 'react-native'
import React from 'react'

export default function HomeScreen(props){
    const {navigation} = props;
    const goToPage = () => {
        navigation.navigate("Artista")
    }
    console.log(props);
    return(
        <View>
            <Text style={styles.h1}> Bienvenido a la pagina principal</Text>

            <Button onPress={goToPage} title="Ir al registro"/>
        </View>
    )
}
const styles = StyleSheet.create({
    h1:{
        fontSize:20,
        margin:20,
    },
  });