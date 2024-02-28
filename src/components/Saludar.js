import { Text } from "react-native"
import React from "react"

export default function Saludar(props){
    const { firstName,
            lastName} = props;
    return(
        <Text>Saludar { firstName } { lastName }</Text>
    )
}
Saludar.defaultProps = {
        firstName : "Juan",
        lastName : "Jose"   
}