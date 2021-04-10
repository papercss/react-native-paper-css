import React from 'react';
import type { Text as DefaultText } from 'react-native';
import type { Meta, Story } from '@storybook/react';
import Text from './Text';
import Styles from './Text.style';
import type { TextProps } from '../../../../src';

export default {
  title: 'Example/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps & DefaultText['props']> = (args) => (
  <Text {...args}>{args.children}</Text>
);

export const Default = Template.bind({});
Default.args = { children: 'Default' };

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  color: 'primary',
  children: 'Primary Color',
  style: Styles.bigFont,
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  color: 'secondary',
  children: 'Secondary Color',
  style: Styles.bigFont,
};

export const DangerColor = Template.bind({});
DangerColor.args = {
  color: 'danger',
  children: 'Danger Color',
  style: Styles.bigFont,
};

export const SuccessColor = Template.bind({});
SuccessColor.args = {
  color: 'success',
  children: 'Success Color',
  style: Styles.bigFont,
};

export const WarningColor = Template.bind({});
WarningColor.args = {
  color: 'warning',
  children: 'Warning Color',
  style: Styles.bigFont,
};

export const MutedColor = Template.bind({});
MutedColor.args = {
  color: 'muted',
  children: 'Muted Color',
  style: Styles.bigFont,
};
