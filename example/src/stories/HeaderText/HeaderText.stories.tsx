import React from 'react';
import { Text as DefaultText, View } from 'react-native';
import type { Meta, Story } from '@storybook/react';
import HeaderText from './HeaderText';
import type { HeaderTextProps } from '../../../../src';

export default {
  title: 'Example/Headers',
  component: HeaderText,
} as Meta;

const Template: Story<HeaderTextProps & DefaultText['props']> = (args) => (
  <HeaderText {...args}>{args.children}</HeaderText>
);

const allSizes: Story<HeaderTextProps & DefaultText['props']> = () => (
  <View>
    <HeaderText headerSize="H1">Header 1</HeaderText>
    <HeaderText headerSize="H2">Header 2</HeaderText>
    <HeaderText headerSize="H3">Header 3</HeaderText>
    <HeaderText headerSize="H4">Header 4</HeaderText>
    <HeaderText headerSize="H5">Header 5</HeaderText>
    <HeaderText headerSize="H6">Header 6</HeaderText>
  </View>
);

export const Default = Template.bind({});
Default.args = { children: 'Header' };

export const AllSizes = allSizes.bind({});
