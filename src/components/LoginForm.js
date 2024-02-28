import React from "react";
import{TextInput, Button, View} from "react-native"

export default function LoginForm(){
    return(
        <View>
        <Text>Componente LoginForm</Text>
        <TextInput  placeholder="Email"/>
        <TextInput  placeholder="password"/>
        <Button title="Enviar" onPress={()=>console.log("Enviado")}/>
        </View>
    )
}