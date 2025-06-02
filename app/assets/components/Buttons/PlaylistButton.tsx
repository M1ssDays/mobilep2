import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text, View } from "react-native";

interface Props {
URLHH?: string
textoHH: string;
subtextoHH: string;
onPressHH?: () => void;
}

export default function AlbumButton(props:Props){
    return(
        <TouchableOpacity style={styles.containerHH} onPress={props.onPressHH}>
            <View style = {styles.subcontainerHH}>
                <Image 
                style = {styles.imageHH}
                source = {{uri: props.URLHH}}/>
                <View style={{flexDirection: 'column', gap: 3}}>
                    <Text style = {styles.textHH}>{props.textoHH}</Text>
                    <Text style = {styles.subtextHH}>{props.subtextoHH}</Text>
                </View>
            </View>
            <Image source={{uri: 'https://streamline.imgix.net/3b6a532d-fc58-426a-b477-97183707d511/297c327f-b5de-415f-bfd9-2ff95f2deb6a/icon-arrows.png?ixlib=rb-1.1.0&or=0&w=720&h=720&fit=max&auto=format%2Ccompress&s=f271566223602ad361e105be2ad41716'}} style={{width: 20, height: 20}}/>           
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerHH:{
        height: 50,
        width: '90%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    subcontainerHH:{
        flexDirection: "row",
        gap: 8,
        alignItems: 'center',
    },

    imageHH:{
        borderRadius: 5,
        height: 50,
        width: 50
    },

    textHH:{
        fontSize: 16,
        color: '#fff',
    },

    subtextHH:{
        fontSize: 12,
        color: '#aaa',
    }
});