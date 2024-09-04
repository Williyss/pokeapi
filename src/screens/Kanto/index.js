import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar/index'
import CardPokemons from '../../components/cardPokemons/index';
import regions from '../Home/index'

export default function Kanto() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function buscarPokemons() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${regions.kanto}`);
      const data = await response.json();
      const pokemonDetails = await Promise.all(data.results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        return await pokemonResponse.json();
      }));
      setPokemons(pokemonDetails);
    }
    buscarPokemons();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <View style={{ width: '90%' }}>
        <FlatList
        vertical={true}
        data={pokemons}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          
            <CardPokemons
              nome={item.name}
              imagem={item.sprites.front_default}
            />
          )}
        />  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center',
  },
  listContainer: {
    backgroundColor: '#050521', // Cor de fundo azul
    alignItems: 'center',
    padding: 10,
  },
});