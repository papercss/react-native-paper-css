import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface Styles {
  mainContainer: ViewStyle;
  badgesContainer: ViewStyle;
  contentContainer: ViewStyle;
  child: TextStyle;
}

export const badgesStyle = (fontSize: number) => {
  return StyleSheet.create<Styles>({
    mainContainer: {
      flexDirection: 'row',
    },
    badgesContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentContainer: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
    },
    child: {
      fontSize,
      color: '#ffffff',
    },
  });
};
