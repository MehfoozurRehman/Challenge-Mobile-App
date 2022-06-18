import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {whiteColor} from '../constants/colors';
import Svg, {
  Path,
  Defs,
  Pattern,
  Use,
  Image as ImageSvg,
} from 'react-native-svg';

export default function FavoriteUser({onClick}) {
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        padding: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
          alignItems: 'center',
        }}>
        <Svg
          width={24}
          height={24}
          style={{
            marginLeft: 12,
            marginRight: 10,
          }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <Path fill="url(#pattern0)" d="M0 0H24V24H0z" />
          <Defs>
            <Pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}>
              <Use xlinkHref="#image0_230_558" transform="scale(.01111)" />
            </Pattern>
            <ImageSvg
              id="image0_230_558"
              width={90}
              height={90}
              xlinkHref="data:image/png;base64,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"
            />
          </Defs>
        </Svg>
        <Text
          style={{
            color: whiteColor,
          }}>
          55
        </Text>
      </View>
      <TouchableOpacity
        onPress={onClick}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              borderColor: whiteColor,
              borderWidth: 2,
            }}
          />
          <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            style={{
              position: 'absolute',
              bottom: -5,
              right: -5,
            }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <Path fill="url(#pattern0)" d="M0 0H24V24H0z" />
            <Defs>
              <Pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}>
                <Use xlinkHref="#image0_230_555" transform="scale(.01111)" />
              </Pattern>
              <ImageSvg
                id="image0_230_555"
                width={90}
                height={90}
                xlinkHref="data:image/png;base64,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"
              />
            </Defs>
          </Svg>
        </View>
        <View
          style={{
            marginLeft: 10,
          }}>
          <Text
            style={{
              color: whiteColor,
            }}>
            33 votes
          </Text>
          <Text
            style={{
              color: whiteColor,
            }}>
            alexis_diamon
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
