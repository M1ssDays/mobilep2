import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";

interface PropsHH {
textHH: string
}

export default function ConfigButton(props:PropsHH){
    return(
        <TouchableOpacity style={styles.containerHH}>
            <Text style={styles.textHH}>{props.textHH}</Text>
            <Image source={{uri: 'https://streamline.imgix.net/3b6a532d-fc58-426a-b477-97183707d511/297c327f-b5de-415f-bfd9-2ff95f2deb6a/icon-arrows.png?ixlib=rb-1.1.0&or=0&w=720&h=720&fit=max&auto=format%2Ccompress&s=f271566223602ad361e105be2ad41716'}} style={styles.imageHH}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerHH:{
        height: 58,
        width: '90%',
        flexDirection: "row",
        justifyContent: 'space-between'
    },

    imageHH:{
        height: 20,
        width: 20
    },

    textHH:{
        fontSize: 18,
        color: '#fff',
    }
});