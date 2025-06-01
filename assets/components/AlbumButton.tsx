import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";

interface Props {
URLHH?: string
textoHH: string;
onPressHH?: () => void;
}

export default function AlbumButton(props:Props){
    return(
        <TouchableOpacity style={styles.container} onPress={props.onPressHH}>
            <Image 
            style = {styles.image}
            source = {{uri: props.URLHH}}/>
            <Text style = {styles.text}>{props.textoHH}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        height: 75,
        width: 180,
        borderRadius: 10,
        backgroundColor: '#303030',
        flexDirection: "row",
        gap: 5,
        alignItems: 'center'
    },

    image:{
        borderRadius: 10,
        height: 75,
        width: 75
    },

    text:{
        fontSize: 16,
        color: '#fff'
    }
});