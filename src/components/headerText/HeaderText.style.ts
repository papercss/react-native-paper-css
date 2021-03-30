import HeaderSize from '../../constants/HeaderSize';
import Colors from '../../constants/Colors';
import { secondaryFont } from '../../constants/Fonts';

export const getDefaultHeaderTextSize = (headerSize: string) => ({
  fontFamily: secondaryFont,
  fontSize: HeaderSize[headerSize],
  color: Colors.primary,
});
