import Route from './src/Routes/index'
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return(

    <NavigationContainer>
    <Route> </Route>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:"center"
    
    
  },
});
