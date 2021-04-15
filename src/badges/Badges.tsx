import React from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import Colors, { ThemeColors } from '../constants/Colors';
import Border, { SVGConfig } from '../shared/Border';
import Text from '../text/Text';
import { badgesStyle } from './Badges.style';

type BadgesColor = Exclude<ThemeColors, 'muted'>;

export interface Props {
  children: number | string;
  badgesType?: BadgesColor;
  fontSize?: number;
}

const Badges = ({ children, badgesType = 'primary', fontSize = 14 }: Props) => {
  const [childSize, setChildSize] = React.useState({
    width: 0,
    height: 0,
  });
  const style = badgesStyle(fontSize);
  const customBorder = {
    firstRad: {
      x: 105,
      y: 5,
    },
    secondRad: {
      x: 15,
      y: 225,
    },
    thirdRad: {
      x: 225,
      y: 10,
    },
    fourthRad: {
      x: 15,
      y: 225,
    },
    startingXY: {
      x: 3,
      y: 6,
    },
    topRightChanges: {
      x: 0,
      y: -3,
    },
    bottomRightChanges: {
      x: 2,
      y: 0,
    },
    bottomLeftChanges: {
      x: 1,
      y: 3,
    },
    topLeftChanges: {
      x: -3,
      y: -1,
    },
    innerBoxChanges: {
      x: 2,
      y: -1,
      w: 0,
      h: 0,
    },
  };

  const config: SVGConfig = {
    svgWidth: childSize.width + 10,
    svgHeight: childSize.height + 5,
    innerWidth: childSize.width + 9,
    innerHeight: childSize.height + 4,
    svgFill:
      Colors[`${badgesType === 'primary' ? 'muted' : badgesType}Light10`],
    svgStroke:
      Colors[`${badgesType === 'primary' ? 'muted' : badgesType}Light10`],
    innerFill:
      Colors[`${badgesType === 'primary' ? 'muted' : badgesType}Light10`],
    innerStroke:
      Colors[`${badgesType === 'primary' ? 'muted' : badgesType}Light10`],
  };

  return (
    <View style={style.mainContainer}>
      <Border
        width={childSize.width + 20}
        height={childSize.height + 18}
        borderStyle={style.badgesContainer}
        svgConfig={config}
        additionalWidth={0}
        additionalHeight={0}
        customBorderType={customBorder}
      >
        <View style={style.contentContainer}>
          <Text
            onLayout={(e: LayoutChangeEvent) =>
              setChildSize({
                width: e.nativeEvent.layout.width,
                height: e.nativeEvent.layout.height,
              })
            }
            style={style.child}
          >
            {children}
          </Text>
        </View>
      </Border>
    </View>
  );
};

export default Badges;
