import Card from '../components/Card'
import Button from '../components/Button'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Card',
    component: Card,
  } as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children: 'This is example text for card',
    className: "card-1",
};

export const PrimaryWithButton = Template.bind({});

PrimaryWithButton.args = {
  children: (<div className="flex justify-center items-center"><div className="p-4">Card with</div><Button className="gradient-2 button-2 border border-design-blue w-12">Button</Button></div>),
  className: "card-1",
};