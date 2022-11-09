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
  notionAPI: 'https://saiso.vercel.app/api/saiso'
}

const Template: Story<APIProps> = args => <SaisoWidget {...config} notionDB={`${process.env.NOTION_DATABASE}`} notionKey={`${process.env.NOTION_KEY}`} />;

export const Default = Template.bind({});

Default.args = {};
