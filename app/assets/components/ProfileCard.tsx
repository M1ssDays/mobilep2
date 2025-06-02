import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text, View } from "react-native";

interface Props {
URLHH?: string;
tituloHH: string;
buttonHH: string;
onPressHH?: () => void;
}

export default function ProfileCard(props:Props){
    return(
        <TouchableOpacity style={styles.containerHH} onPress={props.onPressHH}>
            <Image
            style = {styles.imageHH}
            source = {{uri: props.URLHH}}/>
            <Text style = {styles.titleHH}>{props.tituloHH}</Text>
            <TouchableOpacity style = {styles.buttonHH}>
                <Text style={{color: '#fff'}}>{props.buttonHH}</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <Text style={{textAlign: 'center', color: '#aaa'}}>7<br/>seguidores</Text>
                <Text style={{textAlign: 'center', color: '#aaa'}}>33<br/>seguindo</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerHH:{
        height: 200,
        width: 300,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 100,
        gap: 3
    },

    imageHH:{
        borderRadius: '50%',
        height: 150,
        width: 150,
        borderColor: '#000',
        borderWidth: 4
    },

    titleHH:{
        fontSize: 24,
        color: '#fff'
    },

    buttonHH:{
        height: 30,
        width: 90,
        backgroundColor: '#333',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'   
    }
});