import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomBar from './BottomBar';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={BottomBar} />
    </Stack.Navigator>
  );
}
