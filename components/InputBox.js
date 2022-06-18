import React from 'react';
import {TextInput, View, Text} from 'react-native';
import {baseColor, whiteColor} from '../constants/colors';

export default function InputBox(props) {
  return (
    <View style={{width: '100%', marginBottom: 20}}>
      <Text style={{color: whiteColor, fontSize: 14, marginBottom: 5}}>
        {props.label}
      </Text>
      <View
        style={{
          width: '100%',
          backgroundColor: baseColor,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <View
          style={{
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {props.svg}
        </View>
        <TextInput
          style={{
            color: whiteColor,
            flex: 1,
            height: 45,
          }}
          {...props}
        />
      </View>
    </View>
  );
}
