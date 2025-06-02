import React, { useState } from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

interface SearchBarPropsHH {
    valueHH: string; 
    onChangeTextHH: (text: string) => void;
    placeholderHH?: string; 
}

export default function SearchBar({ valueHH, onChangeTextHH, placeholderHH = 'Procurar...' }: SearchBarPropsHH){
    return(
        <View style={styles.containerHH}>
            <View style={styles.subcontainerHH}>   
                <Image source={{uri: 'https://img.icons8.com/ios7/600/FFFFFF/search.png'}} style={styles.imageHH}/>
                <TextInput 
                    placeholder={placeholderHH} 
                    onChangeText={onChangeTextHH} 
                    value={valueHH} 
                    style={styles.inputHH}
                    placeholderTextColor="#aaa"
                />
            </View>
            <TouchableOpacity onPress={()=> {onChangeTextHH('')}}>
                <Image source={{uri: 'https://img.icons8.com/m_rounded/512/FFFFFF/delete-sign.png'}} style={styles.imageHH}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    containerHH:{
        width: '90%',
        height: 35,
        margin: 20,
        backgroundColor: '#281E41',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        alignItems: 'center',
    },

    subcontainerHH:{
        flexDirection: 'row',
        gap: 5,  
        justifyContent: 'center',
        alignItems: 'center',    
    },
    
    inputHH:{
        color: '#fff',
        width: '100%',
        fontSize: 16
    },

    imageHH:{
        width: 25,
        height: 25,
        marginHorizontal: 5
    }
})

