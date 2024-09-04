import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import {View, Text,Image, TouchableOpacity} from 'react-native'
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



// instalar a biblioteca das starts : npm install react-native-stars --save

export default function Details(){
 const route = useRoute();
 const navigation = useNavigation();
    return(
            <View style ={styles.viewContainer}>

          <Image resizeMode='stretch' style={styles.imageBanner} source ={route.params.imagem} />
          <TouchableOpacity style ={styles.backButton} onPress={navigation.goBack}> 
          <AntDesign  name="leftcircle" size={35} color="white" /> 
          </TouchableOpacity>
          <View style={{marginTop:350}}>
            </View>
          <Text style ={styles.textBanner}> {route.params?.nome}</Text>
            </View> 
    
        )


}
