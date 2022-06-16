import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Svg, {
  Path,
  Defs,
  Pattern,
  Use,
  Image as ImageSvg,
} from 'react-native-svg';
import CommentriesEntry from './CommentriesEntry';

export default function Commentries({onClose}) {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#ffffff',
        zIndex: 999,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
      <View
        style={{
          borderBottomColor: '#D6D6D6',
          borderBottomWidth: 1,
          paddingVertical: 10,
          paddingHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
            }}>
            Commentaries:
          </Text>{' '}
          24
        </Text>
        <TouchableOpacity onPress={onClose}>
          <Svg
            width={24}
            height={24}
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
                <Use xlinkHref="#image0_233_250" transform="scale(.01111)" />
              </Pattern>
              <ImageSvg
                id="image0_233_250"
                width={90}
                height={90}
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAB9klEQVR4nO2cS24CMRBES1mEnDzMebJAuVBCbgGL0BIiw4SPu101rid5w+r5CQwDQwPGGGOMMcYYY4wxZo4NgAnA/rSm02MqSPi/AvgAcLhYnwDeOnrdioT/NUlK2Rkk/P+TpJKdQcL/VkkK2Rkk/O+VZIst4b8BsHtAMtYOfd/NZfynJyR7x342cqxthey+gWiPY+TR42Ju/VQItwpdGbtl5AOArwJnbBsKVxwjrY6L8/We6JsqnhVbyXWW1i/FjGNEwfEmmDfC7PYQjBtidGoC08aYXFJg2CCDQwk9NzpM5KDHhoeLHFRufNjIQUWA4SMHmSEc+YKsS2Dpy+osMp59fiZfgTX2qiIHbLFXGTlgib3qyEHv2ENEDnrFHipyUB17yMhBVeyhIwfZsR35jKzYNJFfeguYOnx0FOA3wwL88a4AX7AU4EvwAnpHHiI2S+RVx2aLvMrYrJFXFds/zhbg2w0K8A00BfiWsAJ8k2MBvm23AIaNMjikwrRBJpemMG6M0ekpmDfE7HYXChtRcFxE6W+/Sq5/aDGvo1I8I7bUvI7Kl2LrY0RqXofyYBSZeR3qo34k5nX0/u5Xyl9inNkCUv4SA/oWkPKXGDm5gJS/xBDVBaT8JcYCLyDlv8HvR7/v09pC65dldX9jjDHGGGOMMcaYMo5GWlFN6GAqrAAAAABJRU5ErkJggg=="
              />
            </Defs>
          </Svg>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          padding: 15,
          height: 300,
        }}>
        <CommentriesEntry />
        <CommentriesEntry />
        <CommentriesEntry />
        <CommentriesEntry />
        <CommentriesEntry />
        <CommentriesEntry />
        <CommentriesEntry />
        <CommentriesEntry />
        <CommentriesEntry />
        <CommentriesEntry />
      </ScrollView>
      <View
        style={{
          borderTopColor: '#D6D6D6',
          borderTopWidth: 1,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 14,
          }}>
          Ajoutez votre commentaire...
        </Text>
      </View>
    </View>
  );
}
