import React from 'react';
import { View, useWindowDimensions, TouchableOpacity } from 'react-native';
import Colors, { ThemeColors } from '../constants/Colors';
import Border, { SVGConfig } from '../shared/Border';
import Text from '../text/Text';
import { alertStyle } from './Alert.style';

export interface Props {
  children: string;
  parentWidth?: number;
  alertType?: ThemeColors;
  close?: boolean;
}

const Alert = ({
  children,
  parentWidth,
  alertType = 'primary',
  close = false,
}: Props) => {
  const { width } = useWindowDimensions();
  const [showAlert, setShowAlert] = React.useState(true);
  const config: SVGConfig = {
    svgWidth: (parentWidth ? parentWidth : width) - 8,
    svgHeight: 50,
    innerWidth: (parentWidth ? parentWidth : width) - 10,
    innerHeight: 49,
    svgFill: Colors[`${alertType}Light`],
    svgStroke: Colors[`${alertType}Dark10`],
    innerFill: Colors[`${alertType}Light`],
    innerStroke: Colors[`${alertType}Light`],
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <View>
      {showAlert && (
        <Border
          width={parentWidth ? parentWidth : width}
          height={60}
          borderStyle={alertStyle().mainContainer}
          svgConfig={config}
          additionalWidth={0}
          additionalHeight={0}
        >
          <View style={alertStyle().messageContainer}>
            <Text style={alertStyle().message}>{children}</Text>
            {close && (
              <TouchableOpacity
                style={alertStyle().close}
                onPress={handleClose}
                activeOpacity={1}
              >
                <Text>X</Text>
              </TouchableOpacity>
            )}
          </View>
        </Border>
      )}
    </View>
  );
};

export default Alert;
