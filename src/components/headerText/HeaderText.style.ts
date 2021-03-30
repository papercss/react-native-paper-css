import HeaderSize from '../../constants/HeaderSize';
import Colors from '../../constants/Colors';

export const getDefaultHeaderTextSize = (headerSize: string) => ({
  fontFamily: 'Patrick Hand SC',
  fontSize: HeaderSize[headerSize],
  color: Colors.primary,
});
