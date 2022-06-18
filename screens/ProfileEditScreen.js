import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
import React from "react";
import { whiteColor } from "../constants/colors";
import InputBox from "../components/InputBox";

export default function ProfileEditScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 30, backgroundColor: "#38373A" }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          backgroundColor: "#38373A",
          height: 50,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
            style={{ marginRight: 10 }}
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
                  <Use xlinkHref="#image0_224_289" transform="scale(.01111)" />
                </Pattern>
                <Image
                  id="image0_224_289"
                  width={90}
                  height={90}
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAABP0lEQVR4nO3aMUoDYRgG4cTCKHhvLUTSpskhLII3shJEhZRjk05IttD52XWeE7xM8e0W/2qVJEmSJEmSWQE2wCPwBnwBO+B29K5FOUU+8NNu9LbFOBMZ4GP0vkW4EBngffTG2ZsQGeBp9M5Zmxj5AGxGb50t4Bp4vhD5BbgZvXW2iiwosqDIgiILiiwosqDIgiILiiwosqDIgiILiiwosqDIgiILiiwosqDIgiILiiwosqDIAnrc4gAeiiwAXv/rubgaPSB/ALjvdAj6GIro985TbFGxRcUWFVtUbFGxRcUWFVtUbFGxRcUWFVtUbFGxRcUWFVtUbFGxRcUWFVtUbFGxRcUW0SMdz8TY29E7F2FC7E9gPXrnIlyIfQR6TftbzsTej962OKfY29O5OAJ74G70rsUC1t3lJEmSJEkW7RubkwzNBeZK3gAAAABJRU5ErkJggg=="
                />
              </Defs>
            </Svg>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: whiteColor }}>Parametre</Text>
        </View>
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
      <ScrollView style={{ padding: 20 }}>
        <InputBox label="Nom d’utilisateur" variant="secondary" />
        <InputBox label="A Propos" multiline variant="secondary" />
        <InputBox label="Ville" variant="secondary" />
        <InputBox label="Pays" variant="secondary" />
      </ScrollView>
      <TouchableOpacity
        style={{
          flex: 1,
          maxHeight: 45,
          minHeight: 45,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          marginVertical: 20,
          marginHorizontal: 20,
          marginTop: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "#242424" }}>CONNECTEZ VOUS</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
