import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Example Heading',
    size: 'xl',
  },
  argTypes: {
    size: {
      options: ['lg', 'xl', '2xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: '2xl',
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Custom heading, h1 tag</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
