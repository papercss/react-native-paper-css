import React, { CSSProperties } from 'react';
import { Text as TextComponent } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Neucha_400Regular } from '@expo-google-fonts/neucha';
import { getDefaultTextStyle } from './Text.style';

type TextColors =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'muted';

interface Props {
  color?: TextColors;
  style?: CSSProperties;
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
    <TextComponent style={[getDefaultTextStyle(color), style]}>
      {otherProps.children}
    </TextComponent>
  );
};

export default Text;
