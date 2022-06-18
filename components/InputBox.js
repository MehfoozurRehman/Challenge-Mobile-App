import React from "react";
import { TextInput, View, Text } from "react-native";
import { baseColor, whiteColor } from "../constants/colors";

export default function InputBox(props) {
  return (
    <View style={{ width: "100%", marginBottom: 20 }}>
      <Text
        style={{
          color: whiteColor,
          fontSize: 14,
          marginBottom: 5,
        }}
      >
        {props.label}
      </Text>
      <View
        style={{
          width: "100%",
          backgroundColor:
            props.variant === "secondary" ? "transparent" : baseColor,
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 8,
          borderWidth: props.variant === "secondary" ? 1 : 0,
          borderColor: whiteColor,
        }}
      >
        {props.svg ? (
          <View
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.svg}
          </View>
        ) : null}

        <TextInput
          style={{
            color: whiteColor,
            flex: 1,
            height: props.multiline ? 150 : 45,
            textAlignVertical: props.multiline ? "top" : "center",
            paddingHorizontal: props.svg ? 0 : 20,
            paddingVertical: props.multiline ? 20 : 0,
          }}
          {...props}
        />
      </View>
    </View>
  );
}
