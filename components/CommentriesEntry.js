import React from 'react';
import {View, Text} from 'react-native';

export default function CommentriesEntry({}) {
  return (
    <View
      style={{
        backgroundColor: '#FFF3C9',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
      }}>
      <View style={{marginBottom: 5}}>
        <Text
          style={{
            color: '#000000',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
            }}>
            Alexis
          </Text>{' '}
          il y'a 2h
        </Text>
      </View>
      <Text
        style={{
          color: '#000000',
        }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis odit
        accusamus et ea velit, voluptatibus aspernatur fuga doloribus commodi
        adipisci, quae iure cupiditate cumque, repudiandae placeat excepturi
        temporibus. Tenetur, incidunt!
      </Text>
    </View>
  );
}
