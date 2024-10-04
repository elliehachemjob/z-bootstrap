import React from 'react';
import { AccordionComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/AccordionComponent',
  component: AccordionComponent,
  argTypes: {
    accordionItemId: {
      description: 'Sets The id of the  Accordion Item ',
    },
    onClickHeader: {
      description: 'Function to handle the click om the Accordion"s header',
    },
    accordionTitleText: {
      description: 'Sets The Ttitle Of The Accordion',
    },
    accordionBodyText: {
      description: 'Sets The Text Of Accordion"s body',
    },
    onClickBody: {
      description: 'Function to handle the clicking om the Accordion"s body,
    },',
    },
  },
};

const AccordionComponentTemplate = (args: any) => (
  <AccordionComponent {...args} />
);

export const Default = AccordionComponentTemplate.bind({});

// Default.args = {};
