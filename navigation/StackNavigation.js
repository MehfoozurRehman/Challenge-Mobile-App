import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomBar from "./BottomBar";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ProfileEditScreen from "../screens/ProfileEditScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
      <Stack.Screen name="HomeScreen" component={BottomBar} />
    </Stack.Navigator>
  );
}
