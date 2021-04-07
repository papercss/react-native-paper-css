/* eslint-disable no-bitwise */
const lightenDarkenColor = (color: string, percent: number) => {
  let num = parseInt(color.replace('#', ''), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt;

  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

const disabledColor = (color: string) => {
  return `${color}80`;
};

export type ThemeColors =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'muted';

const primary = '#41403e';
const secondary = '#0071de';
const success = '#86a361';
const warning = '#ddcd45';
const danger = '#a7342d';
const muted = '#868e96';
const primaryLight = lightenDarkenColor(primary, 50);
const secondaryLight = lightenDarkenColor(secondary, 50);
const successLight = lightenDarkenColor(success, 30);
const warningLight = lightenDarkenColor(warning, 30);
const dangerLight = lightenDarkenColor(danger, 45);
const mutedLight = lightenDarkenColor(muted, 35);
const primaryDark = lightenDarkenColor(primary, -50);
const secondaryDark = lightenDarkenColor(secondary, -50);
const successDark = lightenDarkenColor(success, -30);
const warningDark = lightenDarkenColor(warning, -30);
const dangerDark = lightenDarkenColor(danger, -45);
const mutedDark = lightenDarkenColor(muted, -35);
const primaryLight10 = lightenDarkenColor(primary, 10);
const secondaryLight10 = lightenDarkenColor(secondary, 10);
const successLight10 = lightenDarkenColor(success, 10);
const warningLight10 = lightenDarkenColor(warning, 10);
const dangerLight10 = lightenDarkenColor(danger, 10);
const mutedLight10 = lightenDarkenColor(muted, 10);
const primaryDark10 = lightenDarkenColor(primary, -10);
const secondaryDark10 = lightenDarkenColor(secondary, -10);
const successDark10 = lightenDarkenColor(success, -10);
const warningDark10 = lightenDarkenColor(warning, -10);
const dangerDark10 = lightenDarkenColor(danger, -10);
const mutedDark10 = lightenDarkenColor(muted, -10);
const primaryShaded70 = lightenDarkenColor(primary, 70);
const primaryShaded50 = lightenDarkenColor(primary, 50);
const colors: { [key: string]: string } = {
  primary,
  secondary,
  success,
  warning,
  danger,
  muted,
  primaryLight,
  secondaryLight,
  successLight,
  warningLight,
  dangerLight,
  mutedLight,
  primaryDark,
  secondaryDark,
  successDark,
  warningDark,
  dangerDark,
  mutedDark,
  primaryLight10,
  secondaryLight10,
  successLight10,
  warningLight10,
  dangerLight10,
  mutedLight10,
  primaryDark10,
  secondaryDark10,
  successDark10,
  warningDark10,
  dangerDark10,
  mutedDark10,
  primaryShaded70,
  primaryShaded50,
  primaryDisabled: disabledColor(primary),
  secondaryDisabled: disabledColor(secondary),
  successDisabled: disabledColor(success),
  warningDisabled: disabledColor(warning),
  dangerDisabled: disabledColor(danger),
  mutedDisabled: disabledColor(muted),
  primaryLightDisabled: disabledColor(primaryLight),
  secondaryLightDisabled: disabledColor(secondaryLight),
  successLightDisabled: disabledColor(successLight),
  warningLightDisabled: disabledColor(warningLight),
  dangerLightDisabled: disabledColor(dangerLight),
  mutedLightDisabled: disabledColor(mutedLight),
  primaryLight10Disabled: disabledColor(primaryLight10),
  secondaryLight10Disabled: disabledColor(secondaryLight10),
  successLight10Disabled: disabledColor(successLight10),
  warningLight10Disabled: disabledColor(warningLight10),
  dangerLight10Disabled: disabledColor(dangerLight10),
  mutedLight10Disabled: disabledColor(mutedLight10),
  primaryDarkDisabled: disabledColor(primaryDark),
  secondaryDarkDisabled: disabledColor(secondaryDark),
  successDarkDisabled: disabledColor(successDark),
  warningDarkDisabled: disabledColor(warningDark),
  dangerDarkDisabled: disabledColor(dangerDark),
  mutedDarkDisabled: disabledColor(mutedDark),
  primaryDark10Disabled: disabledColor(primaryDark10),
  secondaryDark10Disabled: disabledColor(secondaryDark10),
  successDark10Disabled: disabledColor(successDark10),
  warningDark10Disabled: disabledColor(warningDark10),
  dangerDark10Disabled: disabledColor(dangerDark10),
  mutedDark10Disabled: disabledColor(mutedDark10),
};

export default colors;
