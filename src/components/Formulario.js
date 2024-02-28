import {View, Text, StyleSheet, TextInput, Button} from 'react-native'
import React, {useState} from 'react'

export default function Formulario(){
    return(
    <View style={styles.container}>
    <Text style={styles.h1}>Registro Del Estudiante:</Text>
    <Text style={styles.label}>Nombre:</Text>
    <TextInput
        style={styles.input}
        placeholder="Ingresar tu nombre"
    />

    <Text style={styles.label}>Email:</Text>
        <TextInput
            style={styles.input}
            placeholder="Ingresar tu Email"
        />

    <Text style={styles.label}>Edad:</Text>
        <TextInput
            style={styles.input}
            placeholder="Ingresar tu Edad"
        />

    <Text style={styles.label}>Carrera:</Text>
        <TextInput
            style={styles.input}
            placeholder="Ingresar tu Carrera"
        />
    <Button title='Registrarse'></Button>

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
    padding: 40,
    paddingBottom:100,
    },
    label:{
        fontSize:16,
        fontWeight:"bold",
        marginBottom:8,
    },
    input:{
        height:40,
        borderColor:"gray",
        borderWidth:1,
        marginBottom:16,
        paddingHorizontal:8,
    },
    buttom:{
        height:50,
    },
    h1:{
        fontSize:20,
        paddingBottom:10,
    },
  });