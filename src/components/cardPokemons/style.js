import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerPokemons: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 3, // Sombra para uma melhor aparência
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain', // Para garantir que a imagem não fique distorcida
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
