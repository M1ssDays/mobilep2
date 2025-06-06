import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";

interface PropsHH {
URLHH?: string
onPressHH?: () => void;
}

export default function IconButton(props:PropsHH){
    return(
        <TouchableOpacity style={styles.container} onPress={props.onPressHH}>
            <Image 
            style = {styles.image}
            source = {{uri: props.URLHH}}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        height: 35,
        width: 35,
    },

    image:{
        height: 35,
        width: 35
    },
});