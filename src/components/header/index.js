import React from   'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons';
import styles from './style'
import { useNavigation } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';

export default function Header(){

    const navigation = useNavigation();

    return(
            <View style = {styles.viewHeader}>

                  <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                     <Feather style ={{marginLeft:-70}} name = 'menu' size= {36} color = "#FFF" />

                </TouchableOpacity>
                
                <Text style={styles.textHeader}>   POKÉDEX   </Text>
            
            </View>
    );

}