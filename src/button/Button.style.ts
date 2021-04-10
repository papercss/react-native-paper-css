import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import type { ButtonSize } from './Button';

interface Config {
  size: ButtonSize;
  additionalHeight?: number;
  additionalWidth?: number;
  titleWidthValue?: number;
  titleHeightValue?: number;
}

export interface Styles {
  mainContainer: ViewStyle;
  buttonContainer: ViewStyle;
  titleWrapper: ViewStyle;
  title: TextStyle;
}

export const useButtonWidth = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return 50;
    case 'default':
      return 80;
    case 'large':
      return 120;
    default:
      return 100;
  }
};

export const useButtonHeight = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return 30;
    case 'default':
      return 45;
    case 'large':
      return 70;
    default:
      return 50;
  }
};

const getFontSize = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return 12;
    case 'default':
      return 16;
    case 'large':
      return 20;
    default:
      return 16;
  }
};

export const buttonStyle = ({ size }: Config) => {
  return StyleSheet.create<Styles>({
    mainContainer: {
      flexDirection: 'row',
    },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleWrapper: {
      position: 'absolute',
    },
    title: {
      fontSize: getFontSize(size),
      padding: 10,
      textAlign: 'center',
      // eslint-disable-next-line react-hooks/rules-of-hooks
      minWidth: useButtonWidth(size) + 5,
    },
  });
};
