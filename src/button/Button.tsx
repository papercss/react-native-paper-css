import React from 'react';
import { LayoutChangeEvent, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
import Text from '../text/Text';
import { useButtonHeight, useButtonWidth } from './Button.style';
import Colors, { ThemeColors } from '../constants/Colors';
import Border, { BorderType } from '../shared/Border';
import { useButtonData } from './useButtonData';

export type ButtonSize = 'small' | 'default' | 'large';

export interface Props {
  children: string;
  size?: ButtonSize;
  bgColor?: string;
  textColor?: string;
  buttonType?: ThemeColors;
  outline?: boolean;
  borderType?: BorderType;
  block?: boolean;
  disabled?: boolean;
  link?: string;
  onPress?: () => void;
}

const Button = ({
  children,
  size = 'default',
  bgColor = 'white',
  textColor = Colors.primary,
  buttonType,
  outline = false,
  borderType = 'borderType1',
  block,
  disabled = false,
  link,
  onPress,
}: Props) => {
  const [style, data] = useButtonData(size, block);
  const [isPressed, setIsPressed] = React.useState(false);
  const getWidthandHeightChanges = () => {
    switch (size) {
      case 'large':
        return {
          firstChangeX: 113,
          secondChangeY: 61,
          thirdChangeX: 112,
          fourthChangeY: 62,
          squareWidth: 111,
          squareHeight: 60,
        };
      case 'default':
        return {
          firstChangeX: 72,
          secondChangeY: 36,
          thirdChangeX: 71,
          fourthChangeY: 37,
          squareWidth: 70,
          squareHeight: 35,
        };
      case 'small':
        return {
          firstChangeX: 43,
          secondChangeY: 24,
          thirdChangeX: 42,
          fourthChangeY: 25,
          squareWidth: 41,
          squareHeight: 23,
        };
      default:
        return {
          firstChangeX: 72,
          secondChangeY: 36,
          thirdChangeX: 71,
          fourthChangeY: 36,
          squareWidth: 70,
          squareHeight: 35,
        };
    }
  };

  const handleLayout = (e: LayoutChangeEvent) => {
    data.setTitleWidthValue(e.nativeEvent.layout.width);
    data.setTitleHeightValue(e.nativeEvent.layout.height);
  };

  const buttonSVGConfig = {
    svgWidth: getWidthandHeightChanges().firstChangeX,
    svgHeight: getWidthandHeightChanges().secondChangeY,
    innerWidth: getWidthandHeightChanges().squareWidth,
    innerHeight: getWidthandHeightChanges().squareHeight,
    svgFill: disabled
      ? Colors[`${buttonType}LightDisabled`]
      : buttonType
      ? isPressed
        ? Colors[`${buttonType}Light10`]
        : Colors[`${buttonType}Light`]
      : bgColor,
    svgStroke: disabled
      ? Colors[`${buttonType}Dark10Disabled`]
      : buttonType
      ? Colors[`${buttonType}Dark10`]
      : isPressed
      ? 'grey'
      : Colors.primary,
    innerFill: disabled
      ? Colors[`${buttonType}LightDisabled`]
      : buttonType
      ? outline
        ? bgColor
        : isPressed
        ? Colors[`${buttonType}Light10`]
        : Colors[`${buttonType}Light`]
      : bgColor,
    innerStroke: disabled
      ? Colors[`${buttonType}LightDisabled`]
      : buttonType
      ? isPressed
        ? Colors[`${buttonType}Light10`]
        : Colors[`${buttonType}Light`]
      : bgColor,
  };

  return (
    <TouchableOpacity
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={
        disabled ? () => {} : link ? () => Linking.openURL(link) : onPress
      }
      activeOpacity={1}
      // style={style.buttonContainer}
    >
      <Border
        borderType={borderType}
        width={useButtonWidth(size)}
        height={useButtonHeight(size)}
        borderStyle={style.buttonContainer}
        svgConfig={buttonSVGConfig}
        additionalWidth={data.additionalWidth}
        additionalHeight={data.additionalHeight}
      >
        <Text
          onLayout={handleLayout}
          style={{
            ...style.title,
            color: disabled
              ? Colors[`${buttonType}DarkDisabled`]
              : buttonType
              ? Colors[`${buttonType}Dark`]
              : textColor,
          }}
        >
          {children}
        </Text>
      </Border>
    </TouchableOpacity>
  );
};

export default Button;
