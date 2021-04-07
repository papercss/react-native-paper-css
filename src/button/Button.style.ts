import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import type { ButtonSize } from './Button';

interface Config {
  size: ButtonSize;
  childHeight: number;
}

export interface Styles {
  buttonContainer: ViewStyle;
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

export const buttonStyle = ({ size, childHeight }: Config) => {
  return StyleSheet.create<Styles>({
    buttonContainer: {
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 5,
    },
    title: {
      fontSize: getFontSize(size),
      position: 'absolute',
      padding: 10,
      top: '50%',
      marginTop: -(childHeight / 2),
      textAlign: 'center',
    },
  });
};
