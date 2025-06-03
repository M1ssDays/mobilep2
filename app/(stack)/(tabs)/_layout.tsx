import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

const spotifyIconHH = require('../../../app/assets/images/spotify.png');

export default function TabsLayoutHH(){
    return(
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#1DB954', 
                tabBarInactiveTintColor: '#B3B3B3',
                tabBarStyle: styles.tabBarHH,
                tabBarLabelStyle: styles.tabBarLabelHH,
            }}
        >
            <Tabs.Screen
                name="index" 
                options={{
                    title: 'Início',
                    tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />,
                }}
            />

            <Tabs.Screen
                name="search" 
                options={{
                    title: 'Buscar',
                    tabBarIcon: ({ color }) => <MaterialIcons name="search" size={24} color={color} />,
                }}
            />

            <Tabs.Screen
                name="library" 
                options={{
                    title:'Sua Biblioteca',
                    tabBarIcon: ({ color }) => <MaterialIcons name="library-music" size={24} color={color} />, 
                }}
            />
            <Tabs.Screen
                name="premiun" 
                options={{
                    title: 'Premium', 
                    tabBarIcon: ({ }) => ( 
                        <Image
                            source={spotifyIconHH}
                            style={{width: 24, height: 24}}                         />
                    ),
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBarHH:{
        backgroundColor: '#000',
        borderTopWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        height: 60,
    },
    tabBarLabelHH:{
        fontSize: 12,
        marginBottom: 5,
    },
});