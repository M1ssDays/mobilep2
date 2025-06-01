import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";

export default function PodcastButton(){
    return(
        <TouchableOpacity style = {styles.container} onPress={() => alert("pressionado")}>
            <Image style = {styles.image}/>
            <Text style = {styles.text}></Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        
    },

    image:{

    },

    text:{

    }
});