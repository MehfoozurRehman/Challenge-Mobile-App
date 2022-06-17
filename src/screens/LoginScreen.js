import React from 'react';
import {height} from '../constants/constant';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';
import InputBox from '../components/InputBox';
import {
  SafeAreaView,
  ScrollView,
  Image as ImageComponent,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  baseColor,
  baseColorDark,
  primaryColor,
  whiteColor,
} from '../constants/colors';

export default function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: baseColor}}>
      <ScrollView
        style={{flex: 1, backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: baseColor,
            width: '100%',
            minHeight: height,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: baseColorDark,
              width: '100%',
              padding: 25,
              borderRadius: 40,
            }}>
            <Text
              style={{
                color: whiteColor,
                fontSize: 20,
                textAlign: 'center',
                marginBottom: 30,
              }}>
              Connectez Vous
            </Text>
            <InputBox
              label="Nom d’utilisateur"
              svg={
                <Svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink">
                  <Path fill="url(#pattern0)" d="M0 0H24V23.9166H0z" />
                  <Defs>
                    <Pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width={1}
                      height={1}>
                      <Use
                        xlinkHref="#image0_243_355"
                        transform="matrix(.01107 0 0 .01107 .002 0)"
                      />
                    </Pattern>
                    <Image
                      id="image0_243_355"
                      width={90}
                      height={90}
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAADi0lEQVR4nO2cTUtVURSGH9MiBUsqJYhMy8I+iAbRxASptBo47MsaBP2A/kKTIJoFFSH9C0chRaFWGEVUphlC2aiENAujLG2wrmAXO7dz7tlr7+tZD7yj+7H2etl337PXWWeDYRiGYRiGYRhGoJT5HkABmoCjQAvQDGwBqnOvTQPjwAjQD9wBxjyMsWSpAM4CD4H5mBoAuoBy9VGXGMeAUeIbnK8RoEN57CVBFXCb4g3OVzdQqZhH0NQBT0nf5AU9AWrVsgmUOuRn7srkxUtJZs2uwu1MXmpmr1bJLDBcrMmFdEsls4DoQN/kBR1XyC8IKkjnEi6phsnIdfY5/Jm8oNPOswyAR/g3ut95lp5pwr/J88Ac0Og4179YoRkMKRCFQBnKW3Rto1uU40XRqhlM2+idyvGiaNYMpm30ZuV4UdRrBtM2urrwW9RYoxlM+w7LvHK8Qqjlrz2jM4sZrYS20T+V40XxQzOYttFfleNFMa0ZTNvoD8rxohjXDKZt9GvleFEMawbTNnpAOV4Uy7qCtw2pnIVQvWtwnKt3knQgpa0+51kGQBf+jT7pPMsAKEenl+NfGiIj9wwB2vFn9CGF/IKiG32Tb6pkFhiVSPeQlsmPyWinEkg/nMZ6PQxsUMopWGqBQdzO5Mw2OOZTifTFuViTM7tcRHEE+ZkXa/AQGby6iEs5cAapRcTZrs8hO75TBHhDI/SnshqRRpdWpFUh/6ms98ifaR/yVNY7D2M0DMMwDMMwDMMobULcGa4FdgF7gN3ADmAdUJN7rSb3vqlFmgTeIDWOV0j/iGonUiFCMHojUgA6DLQBW1P63jHgPnAXuAd8TOl7S4p9wFVk9mncXZkDXgBXgL0K+XmlHrgIPEPH3EJl1EvAdqcZK3MQ6CGMDqWlZnov0EkYy2hsVgEXgJf4N/N/9Rw4D6x04IcTOoG3+DcuqUaBEwQ8ww8gd0V8G5WWHgD7U3WoSCqQP5Zf+Dcnbf0GrhHActKA9Dz7NsS1BpEDA7zQhuzKfJugpUmUnx8nF/B7kQMvRc2geHDAemDCcUIhawKpvcQiSZ/wZaQukVWqEN96XQfyefBUKIr9dFmSi/IZ7LzPb8Q8qSFJ69SnBJ9ZbsQuuSYxuifBZ5YbKh5sAj7jf530pSkUT9JpB744TihETeKhHbgRuIFchcwmHHgpaDaX43Wkm9UwDMMwDMMwDMMwDCPz/AHwMcyzZEtWEAAAAABJRU5ErkJggg=="
                    />
                  </Defs>
                </Svg>
              }
            />
            <InputBox
              label="Mot de pass"
              svg={
                <Svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink">
                  <Path
                    fill="url(#pattern0)"
                    d="M0 0.0357666H24V23.6071666H0z"
                  />
                  <Defs>
                    <Pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width={1}
                      height={1}>
                      <Use
                        xlinkHref="#image0_243_328"
                        transform="matrix(.01091 0 0 .01111 .009 0)"
                      />
                    </Pattern>
                    <Image
                      id="image0_243_328"
                      width={90}
                      height={90}
                      xlinkHref="data:image/png;base64,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"
                    />
                  </Defs>
                </Svg>
              }
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
              style={{
                width: '100%',
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: primaryColor,
                marginVertical: 20,
                marginTop: 10,
                borderRadius: 5,
              }}>
              <Text style={{color: whiteColor}}>CONNECTEZ VOUS</Text>
            </TouchableOpacity>
            <View
              style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{color: whiteColor}}>Pas de compte? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUpScreen');
                }}>
                <Text style={{color: primaryColor}}>s’enregistrer</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: whiteColor,
                textAlign: 'center',
                marginVertical: 20,
              }}>
              Connectez vous avec
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity>
                <ImageComponent
                  source={require('../assets/facebook.png')}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <ImageComponent
                  source={require('../assets/google.png')}
                  style={{width: 40, height: 40, marginLeft: 20}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
