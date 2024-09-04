import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style'; // Certifique-se de que o estilo está apropriado para os Pokémon

export default function CardPokemons({ nome, imagem }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.containerPokemons}
      onPress={() => navigation.navigate('Details', { nome, imagem })}
    >
      <Image
        style={styles.image}
        source={{ uri: imagem }}
      />
      <Text style={styles.name}>{nome}</Text>
    </TouchableOpacity>
  );
}
