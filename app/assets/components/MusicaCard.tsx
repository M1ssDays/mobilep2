import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface PropsHH {
    urlHH: ImageSourcePropType;
    tituloHH?: string;
    artistaHH?: string;
    onPressHH?: () => void;
};

export default function MusicaHH(props:PropsHH){
    return(
         <TouchableOpacity style={styles.cardHH} onPress={props.onPressHH}>
            {props.urlHH && <Image source={props.urlHH} style={styles.imagemHH}/>}

            <View style={styles.textoHH}>
                <Text style={styles.tituloHH}>{props.tituloHH}</Text>
                <Text style={styles.artistaHH}>{props.artistaHH}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardHH:{
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'#282828',
        padding:10,
        borderRadius:10,
        marginBottom:10,

    },
    imagemHH:{
        width: 60,
        height: 60,
        borderRadius:8,
        marginRight:10,
    },
    tituloHH:{
        fontSize: 28,
        fontWeight: 700,
        color: '#fff'
    },
    artistaHH:{
        fontSize: 14,
        color: '#ccc',
    },
    textoHH: {
        flex: 1,
        justifyContent: 'center',
    },
})