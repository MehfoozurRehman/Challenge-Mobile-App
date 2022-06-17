import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import {
  baseColorDark,
  primaryColor,
  secondaryColor,
  whiteColor,
} from '../constants/colors';

export default function FavoriteProfile({}) {
  return (
    <View
      style={{
        backgroundColor: baseColorDark,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
          style={{width: 70, height: 70, borderRadius: 50, marginRight: 10}}
        />
        <View style={{flex: 1, alignItems: 'flex-start'}}>
          <Text style={{color: secondaryColor, marginBottom: 10}}>
            Votes: 4.00 (25 personnes)
          </Text>
          <Rating
            imageSize={25}
            tintColor={baseColorDark}
            ratingColor={secondaryColor}
            type="custom"
            readonly={true}
          />
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 40,
                borderRadius: 5,
                borderColor: primaryColor,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <Text style={{color: whiteColor}}>+ Suivre</Text>
            </TouchableOpacity>
            <View style={{flex: 1, marginRight: 10}}>
              <Text
                style={{
                  textAlign: 'center',
                  color: whiteColor,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                787
              </Text>
              <Text style={{textAlign: 'center', color: whiteColor}}>
                Abonnement
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  textAlign: 'center',
                  color: whiteColor,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                787
              </Text>
              <Text style={{color: whiteColor, textAlign: 'center'}}>
                Abonnes
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={{color: whiteColor, fontSize: 20, fontWeight: 'bold'}}>
          @alienmoore
        </Text>
        <Text style={{color: '#f3f3f3', marginVertical: 5}}>A Propos:</Text>
        <Text style={{color: '#f3f3f3', marginBottom: 10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </Text>
      </View>
      <TouchableOpacity style={{flex: 1, marginBottom: 10}}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          style={{
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          locations={[0, 0.5, 0.6]}
          colors={['#4c669f', '#3b5998', '#192f6a']}>
          <View
            style={{
              width: '99%',
              borderRadius: 8,
              height: '95%',
              backgroundColor: baseColorDark,
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}>
            <Image
              source={require('../assets/instagram.png')}
              style={{width: 35, height: 35, marginRight: 10}}
            />
            <Text style={{color: whiteColor}}>
              <Text style={{fontWeight: 'bold'}}>Instagram:</Text> @king alien
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: whiteColor,
          borderRadius: 8,
          borderWidth: 1,
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}>
        <Image
          source={require('../assets/facebook.png')}
          style={{width: 30, height: 30, marginRight: 10}}
        />
        <Text>
          <Text>Facebook:</Text> Abdoul Ouakil Kanazoe
        </Text>
      </TouchableOpacity>
    </View>
  );
}
