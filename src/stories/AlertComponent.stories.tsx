import React from 'react';
import { AlertComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/AlertComponent',
  component: AlertComponent,
  argTypes: {
    onClose: {
      description: 'Function to handle the close of heading ',
    },
    alertHeadingText: {
      description: 'Sets the heading text',
    },
    allowHeading: {
      description: 'Allow or disallow heading',
    },
    alertBodyText: {
      description: 'Sets The text of the body',
    },
    variant: {
      description: 'Set the  color of the button',
    },
    show: {
      description: 'show or hide the alert ',
    },
     variant: {
      description: 'Set the  color of the button',
    },
    show: {
      description: 'show or hide the alert ',
    },
    removable: {
      description: 'Makes the alert removable or not',
    },
  },
};

const AlertComponentTemplate = (args: any) => <AlertComponent {...args} />;

export const Default = AlertComponentTemplate.bind({});

// Default.args = {};
