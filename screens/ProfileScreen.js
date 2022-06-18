import React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
import { Camera } from "react-native-feather";
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  Image as ImageComponent,
} from "react-native";
import {
  baseColor,
  baseColorDark,
  secondaryColor,
  whiteColor,
} from "../constants/colors";

export default function ProfileScreen() {
  const images = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1532798442725-41036acc7489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1532798442725-41036acc7489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1532798442725-41036acc7489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1532798442725-41036acc7489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  ];
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 30, backgroundColor: baseColor }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          backgroundColor: baseColor,
          height: 50,
        }}
      >
        <Text style={{ fontSize: 20, color: whiteColor }}>Mon Profile</Text>
        <TouchableOpacity>
          <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <Path fill="url(#pattern0)" d="M0 0H24V24H0z" />
            <Defs>
              <Pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
              >
                <Use xlinkHref="#image0_220_346" transform="scale(.01111)" />
              </Pattern>
              <Image
                id="image0_220_346"
                width={90}
                height={90}
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAABlElEQVR4nO3aPU5CURBAYeM2tDERVyEUolvQtakr0D2IoHtAN2BlpNHaY+GjISbyYO7c98j5EhqKyTAh4Sdnb0+SJEmSJEmpgAvgFngFvprHC3ADnNfer/eAE2DG/6bAoPa+vQSMgMUaR15aAMPae/dK805uc+SlD+C49v69AUw2OPLSrPb+vcDvB9+2xrVfx6r92gv84SpgxmXAjFBdPPRpwIxRwIxQXTz0QcCMw4AZobp46AjftRdY1cVDv3VkRqguHvo5YMZTwIxQXTz0XcCM+4AZuw942OI79LT2/r0BHAHvGxzZn+BtAcPmcG2O7J9KmwAGwOMaR574Tg4AjIFrYA58No9589xZ7f0kSZLUCnYdZWHXUR52HeVh15EDu47ysOtIY9eRxK4jiV1Hj9h1rMGuI4ldRxK7jizYdeTAriMPdh15sOvIhV2HJEnSLsGuoyzsOsrDrqM87DpyYNdRHnYdaew6kth1JLHr6BG7jjXYdSSx60hi15EFu44c2HXkwa4jD3YdubDrkCRJkiRJ6pQf+I3c5NlGgzUAAAAASUVORK5CYII="
              />
            </Defs>
          </Svg>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            backgroundColor: baseColor,
          }}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              marginTop: 100,
              backgroundColor: baseColorDark,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
          >
            <View
              style={{
                position: "absolute",
                top: -50,
                width: "100%",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ position: "relative" }}>
                <ImageComponent
                  source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  }}
                  style={{ width: 100, height: 100, borderRadius: 50 }}
                />
                <TouchableOpacity
                  style={{ position: "absolute", top: 0, right: 0 }}
                >
                  <Camera
                    width={20}
                    height={20}
                    stroke={baseColor}
                    fill="#242424"
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: "#271800",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  minWidth: 120,
                  marginLeft: 20,
                  justifyContent: "center",
                }}
              >
                <Svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <Path fill="url(#pattern0)" d="M0 0H24V24H0z" />
                  <Defs>
                    <Pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width={1}
                      height={1}
                    >
                      <Use
                        xlinkHref="#image0_212_323"
                        transform="scale(.01111)"
                      />
                    </Pattern>
                    <Image
                      id="image0_212_323"
                      width={90}
                      height={90}
                      xlinkHref="data:image/png;base64,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"
                    />
                  </Defs>
                </Svg>
                <Text
                  style={{
                    fontSize: 20,
                    color: secondaryColor,
                    fontWeight: "bold",
                  }}
                >
                  3.45
                </Text>
                <Text style={{ fontSize: 14, color: whiteColor }}>
                  567 votes
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                marginTop: 70,
                width: "80%",
                marginLeft: "10%",
              }}
            >
              <Text
                style={{ color: whiteColor, fontSize: 20, fontWeight: "bold" }}
              >
                @alienmoore
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginVertical: 5,
                  alignItems: "center",
                }}
              >
                <Svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <Path fill="url(#pattern0)" d="M0 0H24V24H0z" />
                  <Defs>
                    <Pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width={1}
                      height={1}
                    >
                      <Use
                        xlinkHref="#image0_218_331"
                        transform="scale(.01111)"
                      />
                    </Pattern>
                    <Image
                      id="image0_218_331"
                      width={90}
                      height={90}
                      xlinkHref="data:image/png;base64,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"
                    />
                  </Defs>
                </Svg>
                <Text
                  style={{
                    color: "#706F70",
                    fontSize: 14,
                    marginLeft: 10,
                  }}
                >
                  Lorem ipsum dolor sit amet.
                </Text>
              </View>
              <Text
                style={{ color: "#f6f6f6", fontSize: 12, textAlign: "center" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur recusandae ipsa neque omnis nisi! Aliquam minus nostrum
                magni provident accusantium?
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                marginLeft: "10%",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              <View style={{ width: "33%", alignItems: "center" }}>
                <Text
                  style={{
                    color: whiteColor,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  32
                </Text>
                <Text style={{ color: "#f6f6f6" }}>Participation</Text>
              </View>
              <View style={{ width: "33%", alignItems: "center" }}>
                <Text
                  style={{
                    color: whiteColor,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  3k
                </Text>
                <Text style={{ color: "#f6f6f6" }}>Abonnes</Text>
              </View>
              <View style={{ width: "33%", alignItems: "center" }}>
                <Text
                  style={{
                    color: whiteColor,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  27
                </Text>
                <Text style={{ color: "#f6f6f6" }}>Abonnement</Text>
              </View>
            </View>
            <View
              style={{
                flexWrap: "wrap",
                paddingHorizontal: 20,
                paddingVertical: 25,
                flexDirection: "row",
                width1: "100%",
                paddingRight: 5,
              }}
            >
              {images.map((image, i) => (
                <TouchableOpacity
                  key={JSON.stringify(i)}
                  style={{
                    width: "30%",
                    marginRight: "3%",
                    height: 120,
                    marginBottom: 10,
                  }}
                >
                  <ImageComponent
                    source={{
                      uri: image,
                    }}
                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
