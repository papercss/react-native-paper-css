import React from 'react';
import { Text as TextComponent, TextStyle } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Neucha_400Regular } from '@expo-google-fonts/neucha';
import { getDefaultTextStyle } from './Text.style';
import type { ThemeColors } from 'src/constants/Colors';

export interface Props {
  color?: ThemeColors;
  style?: TextStyle;
}

const Text = ({
  color = 'primary',
  style,
  ...otherProps
}: Props & TextComponent['props']) => {
  let [fontsLoaded] = useFonts({
    Neucha_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <TextComponent {...otherProps} style={[getDefaultTextStyle(color), style]}>
      {otherProps.children}
    </TextComponent>
  );
};

export default Text;
