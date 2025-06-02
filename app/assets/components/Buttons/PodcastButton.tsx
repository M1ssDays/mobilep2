import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text, ImageSourcePropType } from "react-native";

interface Props {
URLHH?: ImageSourcePropType;
tituloHH: string;
subtituloHH: string;
onPressHH?: () => void;
}

export default function PodcastButton(props:Props){
    return(
        <TouchableOpacity style={styles.containerHH} onPress={props.onPressHH}>
            <Image 
            style = {styles.imageHH}
            source = {props.URLHH || require('../../images/placeholder.png')}
            />
            <Text style = {styles.titleHH}>{props.tituloHH}</Text>
            <Text style = {styles.subtitleHH}>{props.subtituloHH}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerHH:{
        height: 180,
        width: 150,
        borderRadius: 10,
        flexDirection: 'column',
        gap: 5,
        alignItems: 'center',
        // justifyContent: 'center'
    },

    imageHH:{
        borderRadius: 10,
        height: 150,
        width: 150
    },

    titleHH:{
        fontSize: 16,
        color: '#fff'
    },

    subtitleHH:{
        fontSize: 12,
        color: '#aaa',
        textAlign: 'center',
    }
});