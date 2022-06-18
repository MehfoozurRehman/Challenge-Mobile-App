import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-ratings';
import {primaryColor} from '../constants/colors';

export default function FavoriteRating() {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: 150,
        right: 60,
        width: 180,
        padding: 15,
        borderRadius: 5,
      }}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10}}>
        <Text style={{color: '#000000', justifyContent: 'center'}}>Note </Text>
        <TouchableOpacity>
          <Text style={{color: primaryColor, fontWeight: 'bold'}}>
            alexis_diamon
          </Text>
        </TouchableOpacity>
        <Text style={{color: '#000000', justifyContent: 'center'}}>
          avec le nombre d’etoile sur 5
        </Text>
      </View>
      <Rating imageSize={30} />
    </View>
  );
}
