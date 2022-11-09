import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SaisoWidget } from '../src/';
import { APIProps } from "../src/types";

const meta: Meta = {
  title: 'SaisoWidget',
  component: SaisoWidget,
};

export default meta;

const config: APIProps= {
  name: 'Reeko.me',
  logo: 'https://github.com/0xreeko.png',
  notionAPI: 'akbjf',
  notionDB: 'kjsdvvk'
}

const Template: Story<APIProps> = args => <SaisoWidget name={config.name} logo={config.logo} notionAPI={config.notionAPI} notionDB={config.notionDB} />;

export const Default = Template.bind({});

Default.args = {};
