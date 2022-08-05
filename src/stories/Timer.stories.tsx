import Timer from '../components/Timer'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Timer',
    component: Timer,
  } as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />;

export const Primary = Template.bind({});

const targetDate = new Date().getTime() + 100000000
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    targetDate: targetDate
};