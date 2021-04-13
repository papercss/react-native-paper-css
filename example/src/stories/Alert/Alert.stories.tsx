import React from 'react';
import type { Meta, Story } from '@storybook/react';
import Alert from './Alert';
import { StyleSheet, View } from 'react-native';
import type { AlertProps } from '../../../../src';

interface Props {
  alerts: { [x: string]: any }[];
}

export default {
  title: 'Example/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps & Props> = (args) => (
  <View style={style.parent}>
    {args.alerts.map((alert) => (
      <Alert {...alert}>{alert.children}</Alert>
    ))}
  </View>
);

export const Default = Template.bind({});
Default.args = {
  alerts: [
    {
      children: 'This the message',
      parentWidth: 400,
    },
  ],
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  alerts: [
    {
      children: 'This the message',
      parentWidth: 400,
      close: true,
    },
  ],
};

export const Types = Template.bind({});
Types.args = {
  alerts: [
    {
      children: 'This the message for Primary',
      parentWidth: 400,
      alertType: 'primary',
    },
    {
      children: 'This the message for Secondary',
      parentWidth: 400,
      alertType: 'secondary',
    },
    {
      children: 'This the message for Danger',
      parentWidth: 400,
      alertType: 'danger',
    },
    {
      children: 'This the message for Success',
      parentWidth: 400,
      alertType: 'success',
    },
    {
      children: 'This the message for Warning',
      parentWidth: 400,
      alertType: 'warning',
    },
    {
      children: 'This the message for Muted',
      parentWidth: 400,
      alertType: 'muted',
    },
  ],
};

const style = StyleSheet.create({
  parent: {
    width: 400,
  },
});
