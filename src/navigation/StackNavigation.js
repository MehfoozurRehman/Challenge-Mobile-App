import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomBar from './BottomBar';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to BottomBar"
        onPress={() => navigation.navigate('BottomBar')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BottomBar" component={BottomBar} />
    </Stack.Navigator>
  );
}
