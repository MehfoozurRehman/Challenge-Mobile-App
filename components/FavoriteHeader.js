import * as React from "react";
import { View, Text } from "react-native";
import { whiteColor } from "../constants/colors";
import Svg, {
  Path,
  Defs,
  Pattern,
  Use,
  Image as ImageSvg,
} from "react-native-svg";

export default function FavoriteHeader({}) {
  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        top: 30,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Svg
        width={30}
        height={30}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <Path fill="url(#pattern0)" d="M0 0H30V30H0z" />
        <Defs>
          <Pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <Use xlinkHref="#image0_227_533" transform="scale(.01111)" />
          </Pattern>
          <ImageSvg
            id="image0_227_533"
            width={90}
            height={90}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAGw0lEQVR4nO2dW4xdVRnHf19bbA2iiCYKEkFMS9AApuKTCFqMpUSQhkq8QWpMvEQSIUaffPBJTfQBieiTTyaYoKK1CcXUNhAvMdFiJqkSTLBopFSoKRcNben058M6o5PDnDNr7cvZe4b9SyaTzKz17W/95zvr+u01MDAwMDAwMDAwMDAw0FOiawfGUdcCm4HLgIuBTcBFwJnAa0ffBZ4DngeOAUeAg6OvPwEHI+LFmTs/hV4IrZ4P7ACuAa4CXl3T5PPAXmAPsCcinqhpb+WivlK9Rd2rztsep9V96k3quq7bPTPUs9Qvq0daFHcST6hfUV/VtQ6toZ6hfkn9VwcCj3NE/ayrLcLVq9WD3Wq7JI+oV3WtT23UDerdpn6yr8yr31BfUdi29aN6T46+im00grpRfbgr9SrwsLoxs23r1fuXsPH1tnUdd+T96rOzVKkhjqrvXqZtG1xaZNXDk+qtaUHk7cBu6s+Fu+B1wD71o0v90tQ13Atsm1Dfthwbd+TTtjsnnhXz6s6xtk2L5AW+NguRb3Z1iLzAi+qNBSLfr65vW+Qt6vGWG94FJ9Tr1d3LlHtA3TBNo9p9tGmk/inQ7l+zG06TNrHeNqXMHuBDEXG8NS9M05wDLUdVV5xQrx+18wqX/sQuG8lNCX33LFs+Q15Qrx1r6+1jZdrvk0cPfo/9XvFV5X+RPNbeNepvR2VmFsnr1LmOhGiTJUVe1O5LTQNjschVd6/uIJ2ArCaOA9sj4oEpZd4E/LjKwFd8wmLay32ctIpaLZwEdkTE7kkF1A8Au4CngI0RcbLkAVWmd5/n5SvyBuDNwC2temRaIR3urAdtnql98oLIplnIYh63cEu0NKI/DJxbWKevHCctNKZF8rX8P5IXcwGwveRhpULfWli+r5wEbp428KlbSSveSTOMT5Y8MHswNKUE/I0WtlZnzLKzi1EkTxMZ0vL8/Ih4MuehJaLtKCzfR5oSGZIWN+Q+uES4awrK9pEmRV5g6kC6mKyuw5SmdRQ4O9dwz8iZwm0Ffka+yJDS0s6JiPnlCuZG9GZWrsi5s4tSkSEd112aUzBX6MsLHegLTcwulmNzTqFcoTdVdKJL2uouxnl7TqHcTaWLazjSBTkD3zbgPuqJDJlBmBvRF9ZwZNbMUmRIO3rLkhvRdXM0fgXcM3reTuCdNe1NYtYiA7yxITtgyuCpyj3qmkW21qnfr2FvEi85flqiHdt86QZRXZ5tUugTNRy5YAl7a2xW7K5EVi3al25L6Hn1jAk2mxK7S5FVm0szsF7X8b4pduuK3bXIqk83KfShGo48qr6+BbH7ILLqX5sUuu6J95zNip0r8izS1P7YpNC7GnDoz+rEqZAa6ncz7OQcP221/Uhe4L4cDXMXLI9mlpvGJcB+J4gdEZIOfr83xcasltUlNKFNQv1UgxFQNbL7FskL7JzmU6nQ72rYudI+u0998jhZu3e5Qq9VjzXsYG5k9zWSNWmytjGhR435eQuO5kT21L1w9Tq7S4LPGgih7MxwX0HZXC4jvZyzpNgRcToi5iZVVq8jbRB1lQSfrUlJusF5wN+BZj8qiUeALRFxpMCf0oPUppknpRtk+Zwd0RFxGNhf1atlmDr1G6cHIgPsLQmM0jyNHxSWLyFL7J6IDIVaFKXtmhKwHwPOK6lXyMRupEciHwEuiogXcisURfQoAfvOUq8KuQT4hfqGxT9UP8hsV3zT+GaJyFAtEf0sUiL6OaV1C3kK+A5pAH4vKcGyDylpR4ELI+I/JZUq3amkfhH4VpW6q4DbI+LbpZWqCr0O+AMrN7GmKgeBzVVuIKv0UYyIU8BtzOpt/n4gcFvVa94q93kR8WtSH/py4a6IeKhq5Vr33pneHP0N7eVp9IXfA1eWvom1mNoXDKpvBQ4Ar6lrq6c8Q+qXD9UxUnu6FBGPATeSsoRWGwvZqLVEhobmpRHxIPAR0kbLauE08ImI2NuEscYWABGxC/gcycGVzjzwmYj4UVMGG78E1nQ9zg/px1K5CieAWyPi3iaNtnLbrrqFtCG/0gbIZ0jZqA82bbiVvYOI2E9aNf6uDfstcQC4og2RW8d0FdBd9vsCldPqnXZx3WXTqFfaz4tU5lzm5sYVhykB/Q716W61VZMPX3C1XWu8GPXMUSP/0YHA/1S/qq7E6zyrYbr74+Omi6BOtSjuKXWP+jFnceHUBPryzxTOBW4ivW9+Nem/U9ThGPAQ8EvgJyWn1W3RC6EXY0qxuhx4B+kdvk3AW0hvhp0NLNzP/2/SvPc54BDwF1Jm5xwwl/N+9sDAwMDAwMDAwMDAwADwX0ywXgzDfAtgAAAAAElFTkSuQmCC"
          />
        </Defs>
      </Svg>
      <Text
        style={{
          color: whiteColor,
          marginLeft: 10,
        }}
      >
        Challenge Original
      </Text>
    </View>
  );
}
