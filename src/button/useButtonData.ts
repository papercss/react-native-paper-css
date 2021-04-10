import React from 'react';
import { useWindowDimensions } from 'react-native';
import type { ButtonSize } from './Button';
import {
  buttonStyle,
  Styles,
  useButtonHeight,
  useButtonWidth,
} from './Button.style';

interface Data {
  setTitleWidthValue: React.Dispatch<React.SetStateAction<number>>;
  setTitleHeightValue: React.Dispatch<React.SetStateAction<number>>;
  additionalWidth: number;
  additionalHeight: number;
}

export const useButtonData = (
  size: ButtonSize,
  block: boolean | undefined,
  parentWidth: number | undefined
): [Styles, Data] => {
  const windowWidth = useWindowDimensions().width;
  const [titleWidthValue, setTitleWidthValue] = React.useState(0);
  const [titleHeightValue, setTitleHeightValue] = React.useState(0);
  const currentButtonWidth = useButtonWidth(size);
  const currentButtonHeight = useButtonHeight(size);
  const additionalWidthForBlock =
    (parentWidth ? parentWidth : windowWidth) - currentButtonWidth;
  const additionalWidth = block
    ? additionalWidthForBlock
    : titleWidthValue > currentButtonWidth
    ? titleWidthValue + 30 < windowWidth
      ? titleWidthValue - currentButtonWidth + 30
      : windowWidth - currentButtonWidth
    : 0;
  const additionalHeight =
    titleHeightValue > currentButtonHeight
      ? titleHeightValue - currentButtonHeight
      : 0;
  const style = buttonStyle({
    size,
    titleWidthValue,
    additionalWidth,
    additionalHeight,
  });
  const data = {
    setTitleWidthValue,
    setTitleHeightValue,
    additionalWidth,
    additionalHeight,
  };

  return [style, data];
};
