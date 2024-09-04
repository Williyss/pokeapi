import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import Kanto from '../screens/Kanto/index.js';
import Route from './stack.js'
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    
      
    
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen options={{headerShown: false}} name="Home" component={Route} />
        <Drawer.Screen options={{headerShown: false}} name="Kanto" component={Kanto} />
      </Drawer.Navigator>
  
  );
}

