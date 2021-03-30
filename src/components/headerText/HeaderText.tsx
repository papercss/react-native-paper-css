import React, { CSSProperties } from 'react';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  PatrickHandSC_400Regular,
} from '@expo-google-fonts/patrick-hand-sc';
import { getDefaultHeaderTextSize } from './HeaderText.style';

export type HeaderSize = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';

export interface Props {
  headerSize?: HeaderSize;
  style?: CSSProperties;
}

const HeaderText = ({
  headerSize = 'H1',
  style,
  ...otherProps
}: Props & Text['props']) => {
  let [fontsLoaded] = useFonts({
    PatrickHandSC_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Text style={[getDefaultHeaderTextSize(headerSize), style]}>
      {otherProps.children}
    </Text>
  );
};

export default HeaderText;
