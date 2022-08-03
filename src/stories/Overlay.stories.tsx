import Overlay from '../components/Overlay'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Overlay',
    component: Overlay,
  } as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => <Overlay {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children: (<div className="w-full h-16" style={{color: 'white'}}>Overlay Placeholder</div>),
};