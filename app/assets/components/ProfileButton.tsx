import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text, View } from "react-native";

interface Props {
URLHH?: string;
tituloHH: string;
subtituloHH: string;
onPressHH?: () => void;
}

export default function ProfileButton(props:Props){
    return(
        <TouchableOpacity style={styles.containerHH} onPress={props.onPressHH}>
            <View style={styles.subcontainerHH}>
                <Image
                style = {styles.imageHH}
                source = {{uri: props.URLHH}}/>

                <View style={{flexDirection:'column', gap: 5}}>
                    <Text style = {styles.titleHH}>{props.tituloHH}</Text>
                    <Text style = {styles.subtitleHH}>{props.subtituloHH}</Text>
                </View>
            </View>
            <Image source={{uri: 'https://streamline.imgix.net/3b6a532d-fc58-426a-b477-97183707d511/297c327f-b5de-415f-bfd9-2ff95f2deb6a/icon-arrows.png?ixlib=rb-1.1.0&or=0&w=720&h=720&fit=max&auto=format%2Ccompress&s=f271566223602ad361e105be2ad41716'}} style={{width: 20, height: 20}}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerHH:{
        height: 90,
        width: '90%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },

    subcontainerHH:{
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
    },

    imageHH:{
        borderRadius: '50%',
        height: 90,
        width: 90
    },

    titleHH:{
        fontSize: 24,
        color: '#fff'
    },

    subtitleHH:{
        fontSize: 18,
        color: '#aaa',
    }
});