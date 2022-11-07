import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SaisoWidget } from '../src/';
import { APIProps } from "../src/types";

const meta: Meta = {
  title: 'SaisoWidget',
  component: SaisoWidget,
};

export default meta;

const config = {
  name: 'Reeko.me',
  logo: 'https://github.com/0xreeko.png',
  notionAPI: 'akbjf'
}

const Template: Story<APIProps> = args => <SaisoWidget config={config} />;

export const Default = Template.bind({});

Default.args = {};
