import React from 'react';
import type { Meta, Story } from '@storybook/react';
import Button from './Button';
import { View } from 'react-native';
import type { ButtonProps } from '../../../../src';

interface Props {
  width: number;
  padding: number;
  borderWidth: number;
  buttons: { [x: string]: any }[];
}

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps & Props> = (args) => (
  <View>
    {args.buttons.map((item: Record<string, any>) => (
      <View
        style={{
          width: args.width,
          borderWidth: args.borderWidth,
          padding: args.padding,
        }}
      >
        <Button {...args} {...item}>
          {item.children}
        </Button>
      </View>
    ))}
  </View>
);

export const Default = Template.bind({});
Default.args = { buttons: [{ children: 'Default Button' }] };

export const Sizes = Template.bind({});
Sizes.args = {
  buttons: [
    {
      children: 'Large',
      size: 'large',
    },
    {
      children: 'Default',
      size: 'default',
    },
    {
      children: 'Small',
      size: 'small',
    },
  ],
};

export const Types = Template.bind({});
Types.args = {
  buttons: [
    {
      children: 'Primary',
      buttonType: 'primary',
    },
    {
      children: 'Secondary',
      buttonType: 'secondary',
    },
    {
      children: 'Danger',
      buttonType: 'danger',
    },
    {
      children: 'Success',
      buttonType: 'success',
    },
    {
      children: 'Warning',
      buttonType: 'warning',
    },
    {
      children: 'Muted',
      buttonType: 'muted',
    },
  ],
};

export const Outline = Template.bind({});
Outline.args = {
  buttons: [
    {
      children: 'OutLine primary',
      outline: true,
      buttonType: 'primary',
    },
    {
      children: 'OutLine secondary',
      outline: true,
      buttonType: 'secondary',
    },
    {
      children: 'OutLine danger',
      outline: true,
      buttonType: 'danger',
    },
    {
      children: 'OutLine success',
      outline: true,
      buttonType: 'success',
    },
    {
      children: 'OutLine warning',
      outline: true,
      buttonType: 'warning',
    },
    {
      children: 'OutLine muted',
      outline: true,
      buttonType: 'muted',
    },
  ],
};

export const BorderTypes = Template.bind({});
BorderTypes.args = {
  buttons: [
    {
      children: 'Type 1',
      borderType: 'borderType1',
    },
    {
      children: 'Type 2',
      borderType: 'borderType2',
    },
    {
      children: 'Type 3',
      borderType: 'borderType3',
    },
    {
      children: 'Type 4',
      borderType: 'borderType4',
    },
    {
      children: 'Type 5',
      borderType: 'borderType5',
    },
    {
      children: 'Type 6',
      borderType: 'borderType6',
    },
  ],
};

export const Block = Template.bind({});
Block.args = {
  buttons: [
    {
      children: 'Block with 400px parent width',
      block: true,
      parentWidth: 340,
    },
  ],
  width: 400,
  borderWidth: 1,
  padding: 30,
};

export const Disabled = Template.bind({});
Disabled.args = {
  buttons: [
    {
      children: 'Disabled default',
      disabled: true,
    },
    {
      children: 'Disabled outline',
      disabled: true,
      outline: true,
    },
    {
      children: 'Disabled primary',
      disabled: true,
      buttonType: 'primary',
    },
    {
      children: 'Disabled secondary',
      disabled: true,
      buttonType: 'secondary',
      outline: true,
    },
    {
      children: 'Disabled danger',
      disabled: true,
      buttonType: 'danger',
    },
    {
      children: 'Disabled success',
      disabled: true,
      buttonType: 'success',
    },
    {
      children: 'Disabled warning',
      disabled: true,
      buttonType: 'warning',
    },
    {
      children: 'Disabled muted',
      disabled: true,
      buttonType: 'muted',
    },
  ],
};
