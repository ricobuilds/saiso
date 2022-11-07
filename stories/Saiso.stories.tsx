import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SaisoWidget } from '../src/';
import { APIProps } from "../src/types";

const meta: Meta = {
  title: 'SaisoWidget',
  component: SaisoWidget,
};

export default meta;

const config = {}

const Template: Story<APIProps> = args => <SaisoWidget />;

export const Default = Template.bind({});

Default.args = {};
