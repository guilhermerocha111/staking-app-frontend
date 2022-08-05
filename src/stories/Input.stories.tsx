import Input from '../components/Input'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Input',
    component: Input,
  } as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
    type: 'text',
    placeholder: 'Text input',
    defaultValue: 'Default text input value',
};

export const Email = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Email.args = {
    type: 'email',
    placeholder: 'Email input',
    defaultValue: 'default@mail.com',
};