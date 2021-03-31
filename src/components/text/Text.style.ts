import Colors from '../../constants/Colors';
import { mainFont } from '../../constants/Fonts';

export const getDefaultTextStyle = (colorType: string) => ({
  color: Colors[colorType],
  fontFamily: mainFont,
  fontSize: 16,
});
