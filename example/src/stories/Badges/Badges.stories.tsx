import React from 'react';
import type { Meta, Story } from '@storybook/react';
import Badges from './Badges';
import { View } from 'react-native';
import type { BadgesProps } from '../../../../src';

interface Props {
  badges: { [x: string]: any }[];
}

export default {
  title: 'Example/Badges',
  component: Badges,
} as Meta;

const Template: Story<BadgesProps & Props> = (args) => (
  <View>
    {args.badges.map((badge) => (
      <Badges {...args} {...badge}>
        {badge.children}
      </Badges>
    ))}
  </View>
);

export const Default = Template.bind({});
Default.args = {
  badges: [
    {
      children: 123,
    },
  ],
};

export const FontSizes = Template.bind({});
FontSizes.args = {
  badges: [
    {
      children: 1,
      fontSize: 18,
    },
    {
      children: 12,
      fontSize: 22,
    },
    {
      children: 123,
      fontSize: 26,
    },
  ],
};

export const BadgesType = Template.bind({});
BadgesType.args = {
  badges: [
    {
      children: 123,
      badgesType: 'primary',
    },
    {
      children: 123,
      badgesType: 'secondary',
    },
    {
      children: 123,
      badgesType: 'danger',
    },
    {
      children: 123,
      badgesType: 'success',
    },
    {
      children: 123,
      badgesType: 'warning',
    },
  ],
};
