import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Svg, {
  Path,
  Defs,
  Pattern,
  Use,
  Image as ImageSvg,
} from 'react-native-svg';
import {whiteColor} from '../constants/colors';

export default function FavoriteActions({onMessage, onRating}) {
  return (
    <View
      style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        padding: 20,
      }}>
      <TouchableOpacity
        onPress={onRating}
        style={{
          alignItems: 'center',
        }}>
        <Svg
          width={30}
          height={30}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <Path fill="url(#pattern0)" d="M0 0H30V30H0z" />
          <Defs>
            <Pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}>
              <Use xlinkHref="#image0_227_530" transform="scale(.01111)" />
            </Pattern>
            <ImageSvg
              id="image0_227_530"
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
          3.25
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onMessage}
        style={{
          marginVertical: 10,
          alignItems: 'center',
        }}>
        <Svg
          width={30}
          height={30}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <Path fill="url(#pattern0)" d="M0 0H30V30H0z" />
          <Defs>
            <Pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}>
              <Use xlinkHref="#image0_227_531" transform="scale(.01111)" />
            </Pattern>
            <ImageSvg
              id="image0_227_531"
              width={90}
              height={90}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAFT0lEQVR4nO2dW4hVVRjHf5/3Mpu8ZRGYRhSRZQZFRNBDVNLFIvI56mUqQ6QLBlJ0NesxMSzy0oMgFRRdJIsIEQyapMyohwpR8TIzOhYzmprOv4d1gsHc17P22XPWrB+cp3U5H7+z2Hvttdf6DkQikUgkEolEIpHIMMXqDmAoksYA1wBzgdmNz2XARcB4YCIwqVG9HzgKnAAOALuGfHYAO83sVCvjT6NW0ZJGA7cAdwE3A9cD53rq/hiwHdgGfA5sM7PTnvoe/kgaJWm+pHWSetU6eiStlXSnpFF1e6gMSTMkLZX0RwvlJrFX0guSLqzbizckTZO0QtKxWtWenROS3pZ0cd2eSiNpkqTXJA3UqjIf/ZKWSzqvbm+FkHS3pN31uivFPkkP1O0vE0lTJH1QsywfbJQ02acbb9M7SfOAD3Hz3hDYAyw0s+98dOZlmiPpEdx8NRTJADOBLZIe9tFZ06IlLQXWABOaD2fYMQFYK2lFsx2VvnRIMuB14Jlmg2gT3gSWmJnKNG5mRI8kyQCLgVfLNi41oiV1AqvLfmmbs9jMVhZtVFi0pHuAj4HRRdsGwmlggZltKtKokGhJl+CWIKcWaRcgh4C5ZrY/b4Pc12i5Fa/3iJIBpgHrVWAVsMjN8AngtsIhhcvtQGfeyrkuHY3H0d+Io/lM+oArzOxwVsW8I/pFouSzMQVYlqdi5ohu3AB3AWObDCpUTgKzs26MeUb0IqLkNMYBj2ZVSh3Rks4B9hIvG1n0AjPN7HhShawRfT9Rch6mA/emVcgSfZ+/WIJnQVph4qVD0ligB7jAd0SB0gfMSNq0kzaibyRKLsIU4IakwjTR8/zHEjzXJRWkib62gkBCJ9FZmuirKwgkdOYkFaSJDme7VOtIdJYmuqOCQEIn0Vma6PMrCCR0EmdpaaJLve0d4SQ6SxN9pIJAQufPpIIo2i9/JRWkie6rIJDQ6U0qSBP9SwWBhM7OpII00dsrCCR0fkoqiKL9siOpIG2ZdBzumhPn0/kot0xqZieBT6qKKkA+SztAmvWG5X3PwYTMp2mFWS9nx+OO/3o9zxEg3cClZnYiqULqiG40HKnbc4uwOk0y5NtAMx23gWair6gC4yQwy8wOpFXK3EBjZr3AO76iCpCVWZIh/ybH6cCvxD0eZ9KL2+SYuJj0H7k2OTZG9ZPNRhUgz+WRDMV3/G8G7igVUnh8CczPe0qrqOiZQBfxfWIP7mjFwbwNCh1/M7M9wIPAPwUDC4lTwENFJEOJc4ZmtpUCRwoCZImZfVG0UakDnWa2DnipTNs25xUzW9Xyb5VL3TNSWCF3LLseJD0rabBmCVUyKJdYoCm8/EKSFgJrgfZKlZPNceAxM1vfbEc+E6NcCXwEXOWrz5rZjUuM0uWjM6/XHElzgR999lkTG4BFZpa4faAoY3x11OBvz/21ml3A42Wmb1n4zmg4znN/raIfN12dU4Vk8D+i220H6lFgFfBGnmPGzeBb9CzP/VXF78C7wBozO9SKL/QtejjPOHpwL1A3Al+XzY1UFt+ib/XcXzMMAN/j0sRtAr41s8G6gvE5j54KHKT4j9eHewG8GdiPSzoyC7h8yGcyLq90B+6hyHA3sAHcTOcg/0/U/XOQ+aIlLSvxePuNQkotXDWSOiR1F5S8QW7bWSQvDWl5GVTdK2HtiKSnCkjul1uAiuRFLlf/8gKSt0gKKUls9Ui6SVJXTsHdkjoV8h8YVIGk55Vvof+QpJcltdtj+fBA0pEUuacal4hOSb7+TyUIyjwZvgU8jVuQOQzsA37AHcX4ysy6/YUXiUQikUgkEinGvyrBZx5xPWjLAAAAAElFTkSuQmCC"
            />
          </Defs>
        </Svg>
        <Text
          style={{
            color: whiteColor,
          }}>
          25
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Svg
          width={30}
          height={30}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <Path fill="url(#pattern0)" d="M0 0H30V30H0z" />
          <Defs>
            <Pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}>
              <Use xlinkHref="#image0_227_532" transform="scale(.01111)" />
            </Pattern>
            <ImageSvg
              id="image0_227_532"
              width={90}
              height={90}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAEOklEQVR4nO2cT6gVVQCHv2OlZZZaGyM1SoggWxv9IYhXURHPglqEyxbugiCKbFGtBMuQFq2KwmphtLBFzwetKmxTVJtWikJKWVppUD7R97WYKzz0zdy5M2fu3Jl3Prhc3jn3zfndj8OZc87MXEgkEolEIpFIJBKJRCKRSHQKdbn6tnpK/V19S13Rdq7eoe72cr5IsiOjnlxEdJIdmxzJFzmgXt12xl4wRHSSHYsSopPsGJQUnWTXZQTRSXYdRhSdZFelgugkuwoVRSfZo1JDdJI9CjVFJ9lliSA6yS5DJNG1ZIfYX2qcqDcCdwC3ABuA9cBG4Hpg9eC1BrghYrMzwJMhhLlR/qkzotV1wP3A3cBdwGbgppbijCx7YkWr1wBTwBPAA8Dt7Sa6jJFkT5Towfg3DTxLJnllu4mGUlr2RIhWNwPbyQSvbTnOqJSS3apo9T7gJeDxtrPUZBbYGkI4m/eBVr6cugXYRXZy6wuFPXvZOJOoG9R9wLf0SzLAo8BreZVj6dHqMuA54E3gunG02RInQgjrFqu4sumW1Y3AJ8C9Tbc1AcznVTQ6dKjTwA8sDckAH+RVNDJ0qAF4FXi9qTYmkMKTYXQJ6nLgPWBb7GNPMEPn0lFFDyTvI1vdLRWGzqEhomizW6v2A4/EOmYHKL0Ej3IyHEzf9rK0JM8CT5XdVIo163gHeDrSsbrADDA9bLhYSO2hQ90OvFv3OB2i1Jh8KbVED/YsvgKW1zlOReaAI8Bh4BBwFDgN/D14Pw38Nfj7VKQ2K11dgRqiBxvzPzKeDflfyfZHDpItgA4Bx0IIuSuxhahGyFBZMtRbgr9Bc5KPA58D3wAHQwhHG2qnLLUkV0bdop6PeHVZ9Rd1jzqlXhE5bx3auc1AXaH+XDP8Rf5V31fvMVu2N5W5Ku09eqE+H0HwSXWH2e0C48jcOcmr1BM1BJ9RX1FXjTl3dyQPAu+oKHjebIhYdFN8DLk7JXmN+mcFyUfVh1oLTscerVBfriB5v9r67QNdkrxMPTyC4AvqizY4kxiFEnkn48FO9eERJJ9Vn2k780I6IRlA/ayk5Dn1sbbzXopdeERZXaueKyH5vLq17byLYfZrBpMrGUDdVrI3v9B21jzMfkZi96Bn/6bumijJAOqnJSR/3HbOTmO2r3FmiORjTsAUrtOoDw6RPK9OtZ2zCwy7ZjjsDqOPQghfxgqzZFFnC3rznHpb2xk7j9lq8HSB6D1tZ+wF6qYCyRfUW9vO2CWKxug7C+pmQghHYofpM1VFfxg7SN8pEr0pp3wOONBAll5TJPrmnPKvQwj/NBGmzxSJXp9T/l0TQfpOkejVOeXfNxGk7xSJvjan/KcmgvSd3EtN6jngqkWqVoYQ/msuUj8p6tF/LFJ2PEmuRpHovSXLEnUwuyqxUz0+eO00exgokUgkEolEIpFIJBKJRCKxxPkfY8ecz5uERmwAAAAASUVORK5CYII="
            />
          </Defs>
        </Svg>
      </TouchableOpacity>
    </View>
  );
}
