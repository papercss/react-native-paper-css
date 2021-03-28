import Colors from '../../constants/Colors';

export const getDefaultTextStyle = (colorType: string) => ({
  color: Colors[colorType],
  fontFamily: 'Neucha_400Regular',
});
