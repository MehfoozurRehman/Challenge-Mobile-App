import * as React from 'react';
import {Text, View, Button, Image as ImageComponent} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';
import {whiteColor} from '../constants/colors';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          height: 50,
        },
      }}>
      <Tab.Screen
        name="Favorite"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? <Text style={{fontSize: 10}}>Favorite</Text> : null,
          tabBarIcon: focused => (
            <Svg
              width={25}
              height={25}
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <Path fill="url(#pattern0)" d="M0 0H25V25H0z" />
              <Defs>
                <Pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}>
                  <Use xlinkHref="#image0_227_522" transform="scale(.01111)" />
                </Pattern>
                <Image
                  id="image0_227_522"
                  width={90}
                  height={90}
                  xlinkHref="data:image/png;base64,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"
                />
              </Defs>
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? <Text style={{fontSize: 10}}>Search</Text> : null,
          tabBarIcon: focused => (
            <Svg
              width={25}
              height={25}
              viewBox="0 0 25 25"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <Path fill="url(#pattern0)" d="M0 0H25V25H0z" />
              <Defs>
                <Pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}>
                  <Use xlinkHref="#image0_227_521" transform="scale(.01111)" />
                </Pattern>
                <Image
                  id="image0_227_521"
                  width={90}
                  height={90}
                  xlinkHref="data:image/png;base64,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"
                />
              </Defs>
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={SettingsScreen}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? <Text style={{fontSize: 10}}>Add</Text> : null,
          tabBarIcon: focused => (
            <Svg
              width={25}
              height={25}
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <Path fill="url(#pattern0)" d="M0 0H25V25H0z" />
              <Defs>
                <Pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}>
                  <Use xlinkHref="#image0_227_520" transform="scale(.01111)" />
                </Pattern>
                <Image
                  id="image0_227_520"
                  width={90}
                  height={90}
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACPUlEQVR4nO3cQU4UQRSH8a/EBBNxrwM3wMjSS3CCSdjKDcCt3gLX4g08hDuIxhOYsNcxcdw8F91uYGbxHszrqpr/L2EBoejHl0kzdCUFIiIiIiIiIiL9KNGFZvYEOAXmwCHw9KGGqsxv4BvwCbgopSwjPyQU2swOgM/Aq8j6hl0Dx6WUH96F7tDjK/kL2xf5v2vgtfeV/ShwoVO2NzLAEfDGuygSeh5Y0xt3g8it4xew513XmUUp5ZlnQSS0edf0qJTiahe5dUiAQidR6CQKnUShk7QUegmcA/vjx1vg76QTbZJN52zFLOdTDePt1tL76Fkp5ebWLM+BmzXfv1He99HNhF73i9U2zzot3aObptBJFDqJQidR6CQKnUShkyh0EoVOotBJFDqJQidR6CQKXavAM/I/ZnZmZrOpZ7/NzGY2bB4sN/3gPzKc152dkdpYYKfGe42MB/93dkZqY4GdGj34j9nZ9AUyQp8kXOO+6psxcI/WH0O0ORume3SlFDqJQidR6CQKnUShkyh0EoVOotBJFDqJQidR6CQKnUShkzQT2sxerPja/hSzRDQTmtW7IPXtjKzxeOoBHN6Pz/g/jp+fAO+mG8enmR2W2miHpVIKnUShkyh0EoVOEgm9ePAp2vPTuyAS+ntgTW/cDSKhLwNreuNuEPmHZZfhENgj79pOXDEcAus6Zsj9ih5PmT1mOHV221wxHGvsPsvpPgd17zKcOjsHXtLveaUL4CvDQd0fIpFFRERERERERHrzD2oLsfk/VMayAAAAAElFTkSuQmCC"
                />
              </Defs>
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={SettingsScreen}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? <Text style={{fontSize: 10}}>Notification</Text> : null,
          tabBarIcon: focused => (
            <Svg
              width={25}
              height={25}
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <Path fill="url(#pattern0)" d="M0 0H25V25H0z" />
              <Defs>
                <Pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}>
                  <Use xlinkHref="#image0_227_519" transform="scale(.01111)" />
                </Pattern>
                <Image
                  id="image0_227_519"
                  width={90}
                  height={90}
                  xlinkHref="data:image/png;base64,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"
                />
              </Defs>
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={SettingsScreen}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? <Text style={{fontSize: 10}}>Home</Text> : null,
          tabBarIcon: focused => (
            <ImageComponent
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}
              style={{
                width: 28,
                height: 28,
                borderRadius: 50,
                borderColor: whiteColor,
                borderWidth: 2,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
