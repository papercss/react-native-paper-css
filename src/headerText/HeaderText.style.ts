import HeaderSize from '../constants/HeaderSize';
import Colors from '../constants/Colors';
import { secondaryFont } from '../constants/Fonts';
import { StyleSheet } from 'react-native';

export const getDefaultHeaderTextSize = (headerSize: string) =>
  StyleSheet.create({
    headerStyle: {
      fontFamily: secondaryFont,
      fontSize: HeaderSize[headerSize],
      color: Colors.primary,
      textAlignVertical: 'center',
    },
  });
