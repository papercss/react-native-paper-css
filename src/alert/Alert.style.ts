import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface Styles {
  mainContainer: ViewStyle;
  message: TextStyle;
  messageContainer: ViewStyle;
  close: TextStyle;
}

export const alertStyle = () => {
  return StyleSheet.create<Styles>({
    mainContainer: {
      justifyContent: 'center',
    },
    messageContainer: {
      position: 'absolute',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    message: {
      fontSize: 16,
      padding: 10,
      width: '95%',
    },
    close: {
      width: '5%',
    },
  });
};
