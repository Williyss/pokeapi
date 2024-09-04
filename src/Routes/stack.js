import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/index'
import Details from '../screens/details/index';

export default function Route(){
const stack = createStackNavigator();
return (
  
    <stack.Navigator >
      <stack.Screen options={{headerShown: false}} name="Home" component={Home}></stack.Screen>
      <stack.Screen options={{headerShown: false}} name="Details" component={Details}></stack.Screen>
    </stack.Navigator>

 
);
}