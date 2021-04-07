import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { Svg, Path, Rect } from 'react-native-svg';

interface SVGConfig {
  svgWidth: number;
  svgHeight: number;
  innerWidth: number;
  innerHeight: number;
  svgFill: string;
  svgStroke: string;
  innerFill: string;
  innerStroke: string;
}

export type BorderType =
  | 'borderType1'
  | 'borderType2'
  | 'borderType3'
  | 'borderType4'
  | 'borderType5'
  | 'borderType6';

export interface Props {
  children: ReactNode;
  width: number;
  height: number;
  borderStyle?: ViewStyle;
  svgConfig: SVGConfig;
  additionalWidth?: number;
  additionalHeight?: number;
  borderType: BorderType;
}

interface PosXY {
  x: number;
  y: number;
}

interface RadXY extends PosXY {}
interface InnerBoxXY extends PosXY {
  w: number;
  h: number;
}

interface BorderTypeDataCoordinate {
  firstRad: RadXY;
  secondRad: RadXY;
  thirdRad: RadXY;
  fourthRad: RadXY;
  startingXY: PosXY;
  topRightChanges: PosXY;
  bottomRightChanges: PosXY;
  bottomLeftChanges: PosXY;
  topLeftChanges: PosXY;
  innerBoxChanges: InnerBoxXY;
}

type BorderTypeData = Record<BorderType, BorderTypeDataCoordinate>;

const Border = ({
  children,
  borderStyle,
  width,
  height,
  svgConfig,
  additionalWidth = 0,
  additionalHeight = 0,
  borderType = 'borderType1',
}: Props) => {
  const getBorderTypeData = () => {
    const borderTypeData: BorderTypeData = {
      borderType1: {
        firstRad: {
          x: 225,
          y: 5,
        },
        secondRad: {
          x: 15,
          y: 225,
        },
        thirdRad: {
          x: 625,
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
      },
      borderType2: {
        firstRad: {
          x: 255,
          y: 15,
        },
        secondRad: {
          x: 15,
          y: 255,
        },
        thirdRad: {
          x: 255,
          y: 15,
        },
        fourthRad: {
          x: 15,
          y: 255,
        },

        startingXY: {
          x: 5,
          y: 6,
        },
        topRightChanges: {
          x: 0,
          y: -2,
        },
        bottomRightChanges: {
          x: -3,
          y: 1,
        },
        bottomLeftChanges: {
          x: 3,
          y: -2,
        },
        topLeftChanges: {
          x: 0,
          y: 2,
        },
        innerBoxChanges: {
          x: 0,
          y: 0,
          w: 0,
          h: -2,
        },
      },
      borderType3: {
        firstRad: {
          x: 255,
          y: 10,
        },
        secondRad: {
          x: 15,
          y: 255,
        },
        thirdRad: {
          x: 255,
          y: 15,
        },
        fourthRad: {
          x: 15,
          y: 255,
        },

        startingXY: {
          x: 5,
          y: 2,
        },
        topRightChanges: {
          x: 2,
          y: 2,
        },
        bottomRightChanges: {
          x: -4,
          y: 1,
        },
        bottomLeftChanges: {
          x: 1,
          y: -3,
        },
        topLeftChanges: {
          x: 2,
          y: 1,
        },
        innerBoxChanges: {
          x: 1,
          y: 2,
          w: 0,
          h: 0,
        },
      },
      borderType4: {
        firstRad: {
          x: 255,
          y: 15,
        },
        secondRad: {
          x: 15,
          y: 255,
        },
        thirdRad: {
          x: 255,
          y: 10,
        },
        fourthRad: {
          x: 15,
          y: 255,
        },

        startingXY: {
          x: 3,
          y: 6,
        },
        topRightChanges: {
          x: -1,
          y: 0,
        },
        bottomRightChanges: {
          x: 3,
          y: -2,
        },
        bottomLeftChanges: {
          x: 1,
          y: 2,
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
      },
      borderType5: {
        firstRad: {
          x: 250,
          y: 15,
        },
        secondRad: {
          x: 215,
          y: 215,
        },
        thirdRad: {
          x: 255,
          y: 15,
        },
        fourthRad: {
          x: 100,
          y: 215,
        },

        startingXY: {
          x: 2,
          y: 6,
        },
        topRightChanges: {
          x: 1,
          y: -2,
        },
        bottomRightChanges: {
          x: 0,
          y: 1,
        },
        bottomLeftChanges: {
          x: 1,
          y: -2,
        },
        topLeftChanges: {
          x: -2,
          y: 2,
        },
        innerBoxChanges: {
          x: 2,
          y: -1,
          w: 0,
          h: 0,
        },
      },
      borderType6: {
        firstRad: {
          x: 255,
          y: 15,
        },
        secondRad: {
          x: 15,
          y: 255,
        },
        thirdRad: {
          x: 255,
          y: 1,
        },
        fourthRad: {
          x: 150,
          y: 255,
        },

        startingXY: {
          x: 5,
          y: 6,
        },
        topRightChanges: {
          x: 0,
          y: 2,
        },
        bottomRightChanges: {
          x: -2,
          y: 1,
        },
        bottomLeftChanges: {
          x: 2,
          y: 0,
        },
        topLeftChanges: {
          x: 2,
          y: -4,
        },
        innerBoxChanges: {
          x: 2,
          y: 2,
          w: -2,
          h: 0,
        },
      },
    };

    const firstValueX = (
      Number(borderTypeData[borderType].startingXY.x) +
      svgConfig.svgWidth +
      borderTypeData[borderType].topRightChanges.x +
      additionalWidth
    ).toString();

    const firstValueY = (
      Number(borderTypeData[borderType].startingXY.y) +
      borderTypeData[borderType].topRightChanges.y
    ).toString();
    const secondValueX = (
      Number(firstValueX) + borderTypeData[borderType].bottomRightChanges.x
    ).toString();
    const secondValueY = (
      Number(firstValueY) +
      svgConfig.svgHeight +
      borderTypeData[borderType].bottomRightChanges.y +
      additionalHeight
    ).toString();
    const thirdValueX = (
      Number(secondValueX) -
      svgConfig.svgWidth +
      borderTypeData[borderType].bottomLeftChanges.x -
      additionalWidth
    ).toString();
    const thirdValueY = (
      Number(secondValueY) + borderTypeData[borderType].bottomLeftChanges.y
    ).toString();
    const fourthValueX = (
      Number(thirdValueX) + borderTypeData[borderType].topLeftChanges.x
    ).toString();
    const fourthValueY = (
      Number(thirdValueY) -
      svgConfig.svgHeight +
      borderTypeData[borderType].topLeftChanges.y -
      additionalHeight
    ).toString();

    const arch = `
      M ${borderTypeData[borderType].startingXY.x.toString()} ${borderTypeData[
      borderType
    ].startingXY.y.toString()}
      A ${borderTypeData[borderType].firstRad.x.toString()} ${borderTypeData[
      borderType
    ].firstRad.y.toString()} 0 0 1 ${firstValueX} ${firstValueY}
      A ${borderTypeData[borderType].secondRad.x.toString()} ${borderTypeData[
      borderType
    ].secondRad.y.toString()} 0 0 1 ${secondValueX} ${secondValueY}
      A ${borderTypeData[borderType].thirdRad.x.toString()} ${borderTypeData[
      borderType
    ].thirdRad.y.toString()} 0 0 1 ${thirdValueX} ${thirdValueY}
      A ${borderTypeData[borderType].fourthRad.x.toString()}  ${borderTypeData[
      borderType
    ].fourthRad.y.toString()} 0 0 1 ${fourthValueX} ${fourthValueY}
    `;

    return {
      arch,
      innerXY: borderTypeData[borderType].startingXY,
      innerChangesXY: borderTypeData[borderType].innerBoxChanges,
    };
  };
  // raw data for reference
  // const type1 = `
  //   M 3 6
  //   A 255 15 0 0 1 116 3
  //   A 15 255 0 0 1 118 64
  //   A 255 15 0 0 1 6 67
  //   A 15 255 0 0 1 3 5
  // `;

  //   const type2 = `
  //   M 5 6
  //   A 190 25 0 0 1 118 4
  //   A 10 205 0 0 1 115 66
  //   A 190 25 0 0 1 5 64
  //   A 15 255 0 0 1 5 5
  // `;

  //   const type2 = `
  //   M 5 6
  //   A 190 25 0 0 1 118 4
  //   A 10 205 0 0 1 115 66
  //   A 190 25 0 0 1 5 64
  //   A 15 255 0 0 1 5 5
  // `;

  return (
    <View style={[borderStyle]}>
      <Svg width={width + additionalWidth} height={height + additionalHeight}>
        <Path
          d={getBorderTypeData().arch}
          stroke={svgConfig.svgStroke}
          strokeWidth="3"
          fill={svgConfig.svgFill}
        />
        <Rect
          x={
            getBorderTypeData().innerXY.x + getBorderTypeData().innerChangesXY.x
          }
          y={
            getBorderTypeData().innerXY.y + getBorderTypeData().innerChangesXY.y
          }
          width={
            svgConfig.innerWidth +
            additionalWidth +
            getBorderTypeData().innerChangesXY.w
          }
          height={
            svgConfig.innerHeight +
            additionalHeight +
            getBorderTypeData().innerChangesXY.h
          }
          strokeWidth="0.5"
          stroke={svgConfig.innerStroke}
          fill={svgConfig.innerFill}
        />
      </Svg>
      {children}
    </View>
  );
};

export default Border;
